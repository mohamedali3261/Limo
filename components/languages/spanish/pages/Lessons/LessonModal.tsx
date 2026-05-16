import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, Star, Check } from "lucide-react";
import { courseData } from "../../data/courseData";
import { useProgress } from "../../hooks/useProgress";
import { useAudioSettings } from "../../context/AudioSettingsContext";
import { LessonProgress } from "./LessonProgress";
import { LessonFooter } from "./LessonFooter";
import type { Lesson } from "../../data/types";

// Shuffle function to randomize quiz order
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface LessonModalProps {
  lessonId?: string;
  unitId?: string;
  lesson?: Lesson;
  onClose: () => void;
  onComplete: (id: string) => void;
}

export function LessonModal({
  lessonId,
  unitId,
  lesson: propLesson,
  onClose,
  onComplete,
}: LessonModalProps) {
  const unit = unitId ? courseData.find((u) => u.id === unitId) : undefined;
  const lesson = propLesson || (unit && lessonId ? unit.lessons.find((l) => l.id === lessonId) : undefined);

  const { addSRSItem } = useProgress();
  const { audioSpeed } = useAudioSettings();

  const [queue, setQueue] = useState<number[]>(() =>
    lesson ? shuffleArray(lesson.details.map((_, i) => i)) : []
  );
  const [queueIndex, setQueueIndex] = useState(0);

  const [isFinished, setIsFinished] = useState(false);
  const [isDoneWithCard, setIsDoneWithCard] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);

  // Match Game States
  const [matchSelectedAr, setMatchSelectedAr] = useState<string | null>(null);
  const [matchSelectedEs, setMatchSelectedEs] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [shuffledMatchAr, setShuffledMatchAr] = useState<string[]>([]);
  const [shuffledMatchEs, setShuffledMatchEs] = useState<string[]>([]);

  // Arrange Game States
  const [arrangeAvailable, setArrangeAvailable] = useState<string[]>([]);
  const [arrangeSelected, setArrangeSelected] = useState<string[]>([]);

  // True/False Game State
  const [trueFalseAnswer, setTrueFalseAnswer] = useState<boolean | null>(null);

  // Fill Blank Game State
  const [fillBlankAnswer, setFillBlankAnswer] = useState<string>("");

  const currentStep = queue[queueIndex];
  const stepData = currentStep !== undefined ? lesson.details[currentStep] : undefined;

  const playAudio = (text?: string, secondaryText?: string) => {
    if (!stepData) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text || stepData.spanish);
    utterance.lang = "es-ES";
    utterance.rate = audioSpeed * 1.25; // Increased speed as requested
    utterance.pitch = 1.2;

    if (secondaryText) {
      utterance.onend = () => {
        setTimeout(() => {
          const secondUtterance = new SpeechSynthesisUtterance(secondaryText);
          secondUtterance.lang = "es-ES";
          secondUtterance.rate = audioSpeed * 1.25;
          secondUtterance.pitch = 1.2;
          window.speechSynthesis.speak(secondUtterance);
        }, 200); // Shorter delay for faster feel
      };
    }

    window.speechSynthesis.speak(utterance);
  };

  const handleCardClick = () => {
    if (
      unitId === "unit1" &&
      lessonId === "u1l0" &&
      stepData.type === "flashcard"
    ) {
      const word = stepData.arabic.split(" (")[0];
      playAudio(stepData.spanish, word);
    } else {
      playAudio(stepData?.spanish);
    }
  };

  useEffect(() => {
    if (!isFinished && !isDoneWithCard && stepData) {
      if (["flashcard", "listening"].includes(stepData.type || "flashcard")) {
        setTimeout(() => {
          if (
            unitId === "unit1" &&
            lessonId === "u1l0" &&
            stepData.type === "flashcard"
          ) {
            const word = stepData.arabic.split(" (")[0];
            playAudio(stepData.spanish, word);
          } else {
            playAudio(stepData.spanish);
          }
        }, 300);
      }

      if (stepData.type === "match" && stepData.matchPairs) {
        setShuffledMatchAr(
          [...stepData.matchPairs.map((p) => p.arabic)].sort(
            () => Math.random() - 0.5,
          ),
        );
        setShuffledMatchEs(
          [...stepData.matchPairs.map((p) => p.spanish)].sort(
            () => Math.random() - 0.5,
          ),
        );
      }
      if (
        (stepData.type === "arrange" || stepData.type === "arrange_ar") &&
        stepData.arrangeWords
      ) {
        setArrangeAvailable(
          [...stepData.arrangeWords].sort(() => Math.random() - 0.5),
        );
      }
    }
  }, [currentStep, isFinished, isDoneWithCard, stepData]);

  const handleMatchClickAr = (arabic: string) => {
    if (isDoneWithCard || matchedPairs.includes(arabic)) return;
    if (matchSelectedAr === arabic) setMatchSelectedAr(null);
    else {
      setMatchSelectedAr(arabic);
      if (matchSelectedEs) {
        checkMatch(arabic, matchSelectedEs);
      } else {
        setShowError(false); // Reset error when picking new one
      }
    }
  };

  const handleMatchClickEs = (spanish: string) => {
    if (isDoneWithCard) return;
    // Check if this spanish word is already matched
    const isAlreadyMatched = matchedPairs.some(
      (ar) =>
        stepData.matchPairs?.find((p) => p.arabic === ar)?.spanish === spanish,
    );
    if (isAlreadyMatched) return;

    if (matchSelectedEs === spanish) setMatchSelectedEs(null);
    else {
      setMatchSelectedEs(spanish);
      playAudio(spanish);
      if (matchSelectedAr) {
        checkMatch(matchSelectedAr, spanish);
      } else {
        setShowError(false); // Reset error when picking new one
      }
    }
  };

  const checkMatch = (ar: string, es: string) => {
    const isMatch = stepData.matchPairs?.some(
      (p) => p.arabic === ar && p.spanish === es,
    );
    if (isMatch) {
      const newMatched = [...matchedPairs, ar];
      setMatchedPairs(newMatched);
      setMatchSelectedAr(null);
      setMatchSelectedEs(null);
      setShowError(false);
      if (newMatched.length === (stepData.matchPairs?.length || 0)) {
        setIsDoneWithCard(true);
        addSRSItem(stepData.spanish, stepData.arabic, true);
      }
    } else {
      setShowError(true);
      setTimeout(() => {
        setMatchSelectedAr(null);
        setMatchSelectedEs(null);
        setShowError(false);
      }, 600);
    }
  };

  const handleSkip = () => {
    // Add current step to the end of the queue
    const currentQueue = queue;
    const newQueue = [...currentQueue, currentQueue[queueIndex]];
    setQueue(newQueue);
    
    // Inline advanceStep logic with newQueue to prevent async state bugs
    if (queueIndex < newQueue.length - 1) {
      setQueueIndex((s) => s + 1);
      setIsDoneWithCard(false);
      setSelectedOption(null);
      setShowError(false);
      setMatchSelectedAr(null);
      setMatchSelectedEs(null);
      setMatchedPairs([]);
      setArrangeSelected([]);
      setTrueFalseAnswer(null);
      setFillBlankAnswer("");
    } else {
      setIsFinished(true);
      onComplete(lessonId || lesson.id);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const handleContinue = () => {
    if (!stepData) return;
    if (!isDoneWithCard && !isFinished) {
      if (
        unitId === "unit1" &&
        lessonId === "u1l0" &&
        stepData.type === "flashcard"
      ) {
        // Play audio before advancing as requested: Letter then Word
        const word = stepData.arabic.split(" (")[0];
        playAudio(stepData.spanish, word);

        // Short delay to let audio start before advancing
        setTimeout(() => {
          addSRSItem(stepData.spanish, stepData.arabic, true);
          advanceStep();
        }, 100);
        return;
      }
      if (
        ["multiple_choice", "listening", "arabic_to_spanish"].includes(
          stepData.type || "",
        )
      ) {
        if (
          selectedOption !== null &&
          stepData.options?.[selectedOption]?.correct
        ) {
          setIsDoneWithCard(true);
          setShowError(false);
          addSRSItem(stepData.spanish, stepData.arabic, true);
          if (
            stepData.type === "arabic_to_spanish" ||
            stepData.type === "multiple_choice"
          ) {
            playAudio(stepData.options[selectedOption].text);
          } else if (stepData.type === "listening") {
            playAudio(stepData.spanish);
          }
        } else {
          if (showError) {
            handleSkip();
          } else {
            setShowError(true);
          }
        }
      } else if (stepData.type === "true_false") {
        if (trueFalseAnswer !== null && trueFalseAnswer === stepData.isTrue) {
          setIsDoneWithCard(true);
          setShowError(false);
          addSRSItem(stepData.spanish, stepData.arabic, true);
          playAudio(stepData.spanish);
        } else {
          if (showError) {
            handleSkip();
          } else {
            setShowError(true);
          }
        }
      } else if (stepData.type === "arrange") {
        if (arrangeSelected.join(" ") === stepData.spanish) {
          setIsDoneWithCard(true);
          setShowError(false);
          addSRSItem(stepData.spanish, stepData.arabic, true);
          playAudio(stepData.spanish);
        } else {
          if (showError) {
            handleSkip();
          } else {
            setShowError(true);
          }
        }
      } else if (stepData.type === "arrange_ar") {
        if (arrangeSelected.join(" ") === stepData.arabic) {
          setIsDoneWithCard(true);
          setShowError(false);
          addSRSItem(stepData.spanish, stepData.arabic, true);
          playAudio(stepData.spanish);
        } else {
          if (showError) {
            handleSkip();
          } else {
            setShowError(true);
          }
        }
      } else if (stepData.type === "match") {
        // Match type is already handled by checkMatch function
        // Just advance to next step when isDoneWithCard is true
        playAudio(stepData.spanish);
      } else if (stepData.type === "fill_blank") {
        if (fillBlankAnswer.toLowerCase().trim() === stepData.answer?.toLowerCase().trim()) {
          setIsDoneWithCard(true);
          setShowError(false);
          addSRSItem(stepData.spanish, stepData.arabic, true);
          playAudio(stepData.spanish);
        } else {
          if (showError) {
            handleSkip();
          } else {
            setShowError(true);
          }
        }
      } else {
        setIsDoneWithCard(true);
        addSRSItem(stepData.spanish, stepData.arabic, true);
      }
      return;
    }
    advanceStep();
  };

  const advanceStep = () => {
    if (queueIndex < queue.length - 1) {
      setQueueIndex((s) => s + 1);
      setIsDoneWithCard(false);
      setSelectedOption(null);
      setShowError(false);
      setMatchSelectedAr(null);
      setMatchSelectedEs(null);
      setMatchedPairs([]);
      setArrangeSelected([]);
      setTrueFalseAnswer(null);
      setFillBlankAnswer("");
    } else {
      setIsFinished(true);
      onComplete(lessonId || lesson.id);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const progressObj = queueIndex / queue.length;

  const getCorrectAnswer = () => {
    if (!stepData) return "";
    switch (stepData.type) {
      case "multiple_choice":
      case "listening":
      case "arabic_to_spanish":
        const correctOption = stepData.options?.find((o) => o.correct);
        return correctOption ? correctOption.text : "";
      case "true_false":
        return stepData.correctArabic || (stepData.isTrue ? "صحيح" : "خطأ");
      case "arrange":
        return stepData.spanish;
      case "arrange_ar":
        return stepData.arabic;
      case "fill_blank":
        return stepData.answer || "";
      default:
        return "";
    }
  };

  if (!lesson) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">الدرس غير موجود</h2>
        <button onClick={onClose} className="px-6 py-3 bg-[#1cb0f6] text-white rounded-2xl font-bold">
          العودة
        </button>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-between"
      >
        <LessonProgress
          progress={progressObj}
          isFinished={isFinished}
          onClose={onClose}
        />

        <div className="flex-1 w-full flex flex-col items-center justify-center p-6 max-w-xl mx-auto overflow-y-auto">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="text-center w-full"
              >
                <div className="text-stone-500 font-bold text-xl mb-8 flex items-center justify-center gap-2">
                  <span dir="auto">
                  {stepData.type === "listening"
                      ? "ماذا تسمع؟"
                      : stepData.type === "arabic_to_spanish"
                        ? "اختر الترجمة الصحيحة:"
                        : stepData.type === "match"
                          ? "صل كل كلمة بما يناسبها:"
                          : stepData.type === "arrange"
                            ? "رتب الكلمات الإسبانية:"
                            : stepData.type === "arrange_ar"
                              ? "رتب الكلمات العربية:"
                              : stepData.type === "fill_blank"
                                ? "أكمل الجملة:"
                                : stepData.type === "true_false"
                                  ? "هل هذه الترجمة صحيحة؟"
                                  : "استمع وتعرف على المعنى!"}
                  </span>
                  <button onClick={() => playAudio(stepData.spanish)} className="text-[#1cb0f6] hover:text-[#1899d6]">
                    <Volume2 size={24} />
                  </button>
                </div>

                {stepData.type === "match" ? (
                  <div className="w-full flex flex-col gap-8">
                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-rose-50 text-rose-600 p-3 rounded-2xl border border-rose-100 text-sm font-bold"
                      >
                        عفواً، الإجابة غير صحيحة. حاول مرة أخرى!
                      </motion.div>
                    )}
                    <div className="w-full flex flex-col gap-6">
                      <div className="w-full">
                        <div className="text-stone-400 font-bold text-sm mb-3 text-center">
                          الكلمات العربية
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {shuffledMatchAr.map((ar, idx) => {
                            const isMatched = matchedPairs.includes(ar);
                            const isSelected = matchSelectedAr === ar;
                            return (
                              <button
                                key={"ar-" + idx}
                                dir="rtl"
                                onClick={() => handleMatchClickAr(ar)}
                                disabled={isMatched}
                                className={`p-4 border-2 rounded-2xl font-bold text-xl text-center transition-all ${
                                  isMatched
                                    ? "bg-stone-100 border-stone-200 text-stone-300 opacity-0 pointer-events-none"
                                    : isSelected
                                      ? "bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]"
                                      : showError && isSelected
                                        ? "bg-rose-100 border-rose-500 text-rose-600"
                                        : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                                }`}
                              >
                                {ar}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="text-stone-400 font-bold text-sm mb-3 text-center">
                          الكلمات الإسبانية
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {shuffledMatchEs.map((es, idx) => {
                            const correspondingAr = stepData.matchPairs?.find(
                              (p) => p.spanish === es,
                            )?.arabic;
                            const isMatched = matchedPairs.includes(
                              correspondingAr || "",
                            );
                            const isSelected = matchSelectedEs === es;
                            return (
                              <button
                                key={"es-" + idx}
                                dir="ltr"
                                onClick={() => handleMatchClickEs(es)}
                                disabled={isMatched}
                                className={`p-4 border-2 rounded-2xl font-bold text-xl text-center transition-all ${
                                  isMatched
                                    ? "bg-stone-100 border-stone-200 text-stone-300 opacity-0 pointer-events-none"
                                    : isSelected
                                      ? "bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]"
                                      : showError && isSelected
                                        ? "bg-rose-100 border-rose-500 text-rose-600"
                                        : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                                }`}
                              >
                                {es}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : stepData.type === "arrange" ||
                  stepData.type === "arrange_ar" ? (
                  <div className="w-full flex flex-col gap-6">
                    <h2
                      className="text-2xl font-extrabold text-[#4b4b4b] mb-4 text-center"
                      dir={stepData.type === "arrange_ar" ? "ltr" : "rtl"}
                    >
                      {stepData.type === "arrange_ar"
                        ? stepData.spanish
                        : stepData.arabic}
                    </h2>
                    <div
                      className={`min-h-[80px] border-b-2 border-stone-300 flex flex-wrap gap-2 pb-2 justify-center items-center px-4 ${stepData.type === "arrange_ar" ? "flex-row-reverse" : ""}`}
                      dir={stepData.type === "arrange_ar" ? "rtl" : "ltr"}
                    >
                      {arrangeSelected.map((word, idx) => (
                        <motion.button
                          layoutId={`word-${word}-${idx}`}
                          key={"sel-" + idx}
                          onClick={() => {
                            if (!isDoneWithCard && !showError) {
                              setArrangeSelected((prev) =>
                                prev.filter((_, i) => i !== idx),
                              );
                              setArrangeAvailable((prev) => [...prev, word]);
                            }
                          }}
                          className={`px-4 py-2 border-2 rounded-xl font-bold text-lg text-center transition-all cursor-pointer shadow-sm ${
                            isDoneWithCard && !showError
                              ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                              : showError
                                ? "bg-rose-100 border-rose-500 text-rose-600"
                                : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                          }`}
                        >
                          {word}
                        </motion.button>
                      ))}
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 justify-center mt-6 ${stepData.type === "arrange_ar" ? "flex-row-reverse" : ""}`}
                      dir={stepData.type === "arrange_ar" ? "rtl" : "ltr"}
                    >
                      <AnimatePresence>
                        {arrangeAvailable.map((word, idx) => (
                          <motion.button
                            layoutId={`word-${word}-${idx}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            key={"avail-" + idx}
                            onClick={() => {
                              if (!isDoneWithCard && !showError) {
                                setArrangeAvailable((prev) =>
                                  prev.filter((_, i) => i !== idx),
                                );
                                setArrangeSelected((prev) => [...prev, word]);
                                if (stepData.type === "arrange")
                                  playAudio(word);
                                setShowError(false);
                              }
                            }}
                            className="px-4 py-2 border-2 rounded-xl font-bold text-lg text-center bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50 transition-all shadow-sm cursor-pointer active:scale-95"
                          >
                            {word}
                          </motion.button>
                        ))}
                      </AnimatePresence>
                    </div>

                    {showError && (
                      <div className="bg-rose-50 text-rose-600 p-3 rounded-lg border border-rose-100 mt-4 text-sm font-bold">
                        حاول مرة أخرى! الترتيب غير صحيح.
                      </div>
                    )}
                  </div>
                ) : stepData.type === "fill_blank" ? (
                  <div className="w-full flex flex-col gap-6">
                    <div className="bg-white border-[3px] border-[#e5e5e5] rounded-[2rem] p-8 w-full flex flex-col items-center gap-6 shadow-[0_8px_0_0_#e5e5e5]">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-[#4b4b4b] text-center">
                        {stepData.sentence}
                      </h1>
                      <div className="text-lg text-stone-500 font-semibold">
                        {stepData.arabic}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {stepData.fillBlankOptions?.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (!isDoneWithCard && !showError) {
                              setFillBlankAnswer(option);
                              setShowError(false);
                            }
                          }}
                          className={`p-4 border-2 rounded-2xl font-bold text-lg text-center transition-all ${
                            fillBlankAnswer === option
                              ? isDoneWithCard && option === stepData.answer
                                ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                                : showError
                                  ? "bg-rose-100 border-rose-500 text-rose-600"
                                  : "bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]"
                              : isDoneWithCard && option === stepData.answer
                                ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                                : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                          }`}
                          disabled={isDoneWithCard}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : stepData.type === "true_false" ? (
                  <div className="w-full flex flex-col gap-6 items-center">
                    <div
                      onClick={() => playAudio(stepData?.spanish)}
                      className="bg-white border-[3px] border-[#e5e5e5] rounded-[2rem] p-10 w-full flex flex-col items-center gap-6 shadow-[0_8px_0_0_#e5e5e5] relative mb-4 cursor-pointer group active:translate-y-1 transition-all"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(stepData.spanish);
                        }}
                        className="absolute -top-8 bg-[#1cb0f6] text-white w-16 h-16 rounded-full flex items-center justify-center hover:brightness-110 border-b-[6px] border-[#1899d6] shadow-sm cursor-pointer"
                      >
                        <Volume2 size={32} />
                      </button>
                      <h1
                        className="text-3xl md:text-4xl font-extrabold text-[#4b4b4b] tracking-tight text-center mt-4"
                        dir="ltr"
                      >
                        {stepData.spanish}
                      </h1>
                      <div className="text-2xl text-stone-500 font-bold">
                        {stepData.arabic}
                      </div>
                    </div>
                    <div className="flex w-full gap-4">
                      <button
                        onClick={() => {
                          if (!isDoneWithCard && !showError) {
                            setTrueFalseAnswer(true);
                            setShowError(false);
                          }
                        }}
                        className={`flex-1 p-4 border-2 rounded-2xl font-bold text-2xl text-center transition-all ${
                          trueFalseAnswer === true
                            ? isDoneWithCard && stepData.isTrue
                              ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                              : showError
                                ? "bg-rose-100 border-rose-500 text-rose-600"
                                : "bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]"
                            : isDoneWithCard && stepData.isTrue
                              ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                              : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                        }`}
                      >
                        صح
                      </button>
                      <button
                        onClick={() => {
                          if (!isDoneWithCard && !showError) {
                            setTrueFalseAnswer(false);
                            setShowError(false);
                          }
                        }}
                        className={`flex-1 p-4 border-2 rounded-2xl font-bold text-2xl text-center transition-all ${
                          trueFalseAnswer === false
                            ? isDoneWithCard && !stepData.isTrue
                              ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                              : showError
                                ? "bg-rose-100 border-rose-500 text-rose-600"
                                : "bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]"
                            : isDoneWithCard && !stepData.isTrue
                              ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                              : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                        }`}
                      >
                        خطأ
                      </button>
                    </div>

                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 w-full rounded-2xl border-2 border-rose-100 bg-rose-50 p-4 text-center font-bold text-rose-600"
                      >
                        إجابة خاطئة! حاول مرة أخرى.
                      </motion.div>
                    )}

                    {isDoneWithCard && !stepData.isTrue && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 w-full rounded-2xl border-2 border-[#58a700] bg-[#d7ffb8] p-4 text-center font-bold text-[#58a700] overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          <span>الترجمة المعروضة غير صحيحة!</span>
                          {stepData.correctArabic && (
                            <span className="text-xl">
                              الترجمة الصحيحة هي:{" "}
                              <span className="underline decoration-wavy underline-offset-4">
                                {stepData.correctArabic}
                              </span>
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : [
                    "multiple_choice",
                    "listening",
                    "arabic_to_spanish",
                  ].includes(stepData.type || "") ? (
                  <div className="w-full flex flex-col gap-6">
                    <h2 className="text-2xl font-extrabold text-[#4b4b4b] mb-4 text-center">
                      {stepData.type === "multiple_choice"
                        ? "اختر الإجابة الصحيحة"
                        : stepData.type === "listening"
                          ? "ماذا تسمع؟"
                          : "اختر الترجمة الصحيحة"}
                    </h2>
                    
                    <div>
                      {stepData.type === "listening" ? (
                        <div className="flex justify-center mt-4">
                          <button
                            onClick={() => playAudio(stepData.spanish)}
                            className="bg-[#1cb0f6] text-white w-24 h-24 rounded-full flex items-center justify-center hover:brightness-110 active:translate-y-1 transition-all border-b-[6px] border-[#1899d6] shadow-sm cursor-pointer"
                          >
                            <Volume2 size={48} />
                          </button>
                        </div>
                      ) : (
                        <div
                          className="text-3xl md:text-4xl text-center my-6 font-bold"
                          dir="auto"
                        >
                          {stepData.arabic || stepData.spanish}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      {stepData.options?.map((opt, idx) => (
                        <button
                          key={idx}
                          dir="auto"
                          onClick={() => {
                            if (!isDoneWithCard && !showError) {
                              setSelectedOption(idx);
                              setShowError(false);
                              if (
                                stepData.type === "arabic_to_spanish" ||
                                stepData.type === "multiple_choice"
                              ) {
                                playAudio(opt.text);
                              }
                            }
                          }}
                          className={`p-4 border-2 rounded-2xl font-bold text-xl text-right transition-all flex justify-between items-center ${
                            selectedOption === idx
                              ? isDoneWithCard && opt.correct
                                ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                                : showError
                                  ? "bg-rose-100 border-rose-500 text-rose-600"
                                  : "bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]"
                              : isDoneWithCard && opt.correct
                                ? "bg-[#d7ffb8] border-[#58a700] text-[#58a700]"
                                : "bg-white border-[#e5e5e5] text-[#4b4b4b] hover:bg-stone-50"
                          }`}
                        >
                          <span>{opt.text}</span>
                          <div className="flex items-center gap-3">
                            {isDoneWithCard && opt.correct && (
                              <Check size={24} className="text-[#58a700]" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleCardClick}
                    className="bg-white border-[3px] border-[#e5e5e5] rounded-[2rem] p-10 md:p-14 w-full flex flex-col items-center gap-8 shadow-[0_8px_0_0_#e5e5e5] relative cursor-pointer active:translate-y-1 transition-all group"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (unitId === "unit1" && lessonId === "u1l0") {
                          const word = stepData.arabic.split(" (")[0];
                          playAudio(stepData?.spanish, word);
                        } else {
                          playAudio(stepData?.spanish);
                        }
                      }}
                      className="absolute -top-10 bg-[#1cb0f6] text-white w-20 h-20 rounded-full flex items-center justify-center hover:brightness-110 active:translate-y-1 transition-all border-b-[6px] border-[#1899d6] shadow-sm cursor-pointer"
                    >
                      <Volume2 size={40} />
                    </button>

                    <div className="mt-4 flex flex-col items-center gap-8">
                      <h1
                        className="text-4xl md:text-5xl font-extrabold text-[#4b4b4b] tracking-tight"
                        dir="ltr"
                      >
                        {stepData?.spanish}
                      </h1>

                      <div className="w-16 h-1 bg-[#e5e5e5] rounded-full"></div>

                      <p
                        className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${isDoneWithCard || (unitId === "unit1" && lessonId === "u1l0") ? "text-teal-600" : "text-stone-200 blur-sm select-none"}`}
                      >
                        {stepData?.arabic}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="text-center flex flex-col items-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="w-32 h-32 bg-[#ffc800] text-white rounded-full flex items-center justify-center mb-8 shadow-[0_6px_0_0_#e5b400]"
                >
                  <Star size={64} fill="currentColor" />
                </motion.div>
                <h1 className="text-4xl font-extrabold text-[#4b4b4b] mb-4">
                  درس رائع!
                </h1>
                <p className="text-xl text-[#afafaf] font-bold">
                  زادت حصيلتك الإسبانية اليوم.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <LessonFooter
          isFinished={isFinished}
          isDoneWithCard={
            isDoneWithCard ||
            (unitId === "unit1" &&
              lessonId === "u1l0" &&
              stepData?.type === "flashcard")
          }
          onContinue={handleContinue}
          onClose={onClose}
          showError={showError}
          correctAnswer={getCorrectAnswer()}
          isHidden={
            ((stepData?.type === "match" || lessonId?.includes("exam")) &&
              !isDoneWithCard &&
              !isFinished) ||
            ([
              "multiple_choice",
              "listening",
              "arabic_to_spanish",
              "true_false",
              "arrange",
              "arrange_ar",
              "fill_blank",
            ].includes(stepData?.type || "") &&
              selectedOption === null &&
              trueFalseAnswer === null &&
              arrangeSelected.length === 0 &&
              fillBlankAnswer === "" &&
              !isDoneWithCard &&
              !isFinished &&
              !showError)
          }
        />
      </motion.div>
    </AnimatePresence>
  );
}
