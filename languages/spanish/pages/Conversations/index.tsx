import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MessageCircle, Volume2, Ear, Play, Square, Pause, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { conversations, ConversationScenario } from '../../data/conversations';
import { LessonModal } from '../Lessons/LessonModal';

export default function Conversations() {
  const [selectedScenario, setSelectedScenario] = useState<ConversationScenario | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const isPlayingRef = useRef(false);
  const lineRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (currentPlayingIndex !== null && lineRefs.current[currentPlayingIndex]) {
      lineRefs.current[currentPlayingIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentPlayingIndex]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const stopAll = () => {
    isPlayingRef.current = false;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAll(false);
    setCurrentPlayingIndex(null);
  };

  const playAudio = (text: string, speaker: 'A' | 'B'): Promise<void> => {
    return new Promise((resolve) => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 1.0;
        utterance.pitch = speaker === 'A' ? 1.2 : 1.4;
        
        const voices = window.speechSynthesis.getVoices();
        const esVoices = voices.filter(v => v.lang.startsWith('es-') || v.lang.startsWith('es_'));
        
        if (esVoices.length >= 2) {
          if (speaker === 'A') {
            const voiceA = esVoices.find(v => v.name.includes('Helena') || v.name.includes('Monica')) || esVoices[0];
            utterance.voice = voiceA;
          } else {
            const voiceB = esVoices.find(v => v.name.includes('Laura') || v.name.includes('Pablo')) || esVoices[esVoices.length - 1];
            utterance.voice = voiceB;
          }
        }

        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();

        window.speechSynthesis.speak(utterance);
      } else {
        resolve();
      }
    });
  };

  const handlePlayLine = async (text: string, speaker: 'A' | 'B', index: number) => {
    stopAll();
    setCurrentPlayingIndex(index);
    await playAudio(text, speaker);
    setCurrentPlayingIndex(null);
  };

  const togglePlayAll = async () => {
    if (isPlayingAll) {
      stopAll();
      return;
    }
    
    isPlayingRef.current = true;
    setIsPlayingAll(true);
    
    for (let i = 0; i < selectedScenario!.lines.length; i++) {
      if (!isPlayingRef.current) break;
      setCurrentPlayingIndex(i);
      await playAudio(selectedScenario!.lines[i].spanish, selectedScenario!.lines[i].speaker);
      
      if (isPlayingRef.current && i < selectedScenario!.lines.length - 1) {
        await new Promise(r => setTimeout(r, 400));
      }
    }
    
    if (isPlayingRef.current) {
       isPlayingRef.current = false;
       setIsPlayingAll(false);
       setCurrentPlayingIndex(null);
    }
  };

  useEffect(() => {
    return () => stopAll();
  }, [selectedScenario]);

  return (
    <div className="min-h-screen bg-stone-50 pb-20 font-sans" dir="rtl">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-600 transition-colors">
            <ChevronRight size={24} />
          </Link>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-[#ddf4ff] flex items-center justify-center text-[#1cb0f6]">
               <Ear size={18} />
             </div>
             <h1 className="text-xl font-bold text-stone-800 tracking-tight">المحادثات الصوتية</h1>
          </div>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!selectedScenario ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-stone-500 mb-8 text-center text-lg max-w-lg mx-auto">
              اختر موقفاً وتدرب على النطق الصحيح. استمع لحوار بين شخصين لتتعلم المحادثة اليومية!
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {conversations.map((scenario, index) => (
                <motion.button
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedScenario(scenario)}
                  className="bg-white p-6 rounded-3xl border-2 border-[#e5e5e5] shadow-[0_4px_0_0_#e5e5e5] flex flex-col gap-3 hover:bg-stone-50 transition-all text-right active:translate-y-1 active:shadow-none cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-[#ddf4ff] text-[#1cb0f6] rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <MessageCircle size={32} />
                  </div>
                  <h2 className="text-xl font-extrabold text-[#4b4b4b]">{scenario.arabicTitle}</h2>
                  <p className="text-stone-500 font-medium text-sm leading-relaxed">{scenario.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 px-2">
              <div>
                <h2 className="text-3xl font-extrabold text-[#4b4b4b] flex items-center gap-3">
                  {selectedScenario.arabicTitle}
                </h2>
                <p className="text-stone-500 mt-2 text-lg font-medium">{selectedScenario.description}</p>
              </div>
              <button 
                onClick={() => setSelectedScenario(null)}
                className="px-5 py-2.5 bg-white border-2 border-stone-200 text-stone-600 rounded-xl font-bold hover:bg-stone-50 shadow-sm transition-all active:translate-y-0.5 active:shadow-none self-start sm:self-center"
              >
                العودة للقائمة
              </button>
            </div>

            <div className="bg-white p-4 sm:p-8 rounded-[2rem] border-2 border-[#e5e5e5] shadow-sm relative">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b-2 border-stone-100 gap-4">
                 <div className="flex items-center gap-3 bg-[#fff9e6] border-2 border-[#ffc800] px-4 py-3 rounded-2xl text-[#af8b00] font-bold text-sm w-full sm:w-auto">
                   <Volume2 size={20} className="shrink-0" />
                   <p>اضغط على الرسالة أو استخدم زر التشغيل التلقائي.</p>
                 </div>
                 
                 <div className="flex gap-2 flex-wrap w-full sm:w-auto">
                    <button
                      onClick={togglePlayAll}
                      className={"flex flex-1 items-center gap-2 px-6 py-3 rounded-2xl font-bold tracking-wide transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none justify-center " + (isPlayingAll ? "bg-[#ff4b4b] text-white border-2 border-[#ea2b2b] shadow-[#ea2b2b]/50" : "bg-[#58cc02] text-white border-2 border-[#58a700] shadow-[#58a700]/50 hover:brightness-110")}
                    >
                      {isPlayingAll ? (
                        <React.Fragment>
                          <Square size={20} fill="currentColor" />
                          إيقاف المحادثة
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Play size={20} fill="currentColor" />
                          تشغيل كامل المحادثة
                        </React.Fragment>
                      )}
                    </button>
                 </div>
              </div>

              <div className="flex flex-col gap-6">
                {selectedScenario.lines.map((line, idx) => {
                  const isA = line.speaker === 'A';
                  const isPlaying = currentPlayingIndex === idx;
                  
                  return (
                    <motion.button 
                      key={idx}
                      ref={(el) => (lineRefs.current[idx] = el)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => handlePlayLine(line.spanish, line.speaker, idx)}
                      className={"flex flex-col w-full text-right outline-none group " + (isA ? "items-start" : "items-end")}
                    >
                      <div className={"text-sm font-bold mb-2 px-2 transition-colors " + (isPlaying ? "text-[#1cb0f6]" : "text-stone-400")}>
                        {line.speakerNameAr} <span className="opacity-60 text-xs">({line.speakerNameEs})</span>
                      </div>
                      <div className={"relative p-5 sm:p-6 rounded-[2rem] w-[90%] sm:max-w-[75%] border-2 transition-all " + 
                        (isPlaying ? "scale-105 shadow-xl rotate-1 z-10 " : "group-hover:scale-[1.02] shadow-sm ") + 
                        (isA ? 
                          ("rounded-tr-md " + (isPlaying ? "bg-[#ddf4ff] border-[#1cb0f6]" : "bg-[#f7f7f7] border-[#e5e5e5] hover:bg-[#ddf4ff]")) : 
                          ("rounded-tl-md " + (isPlaying ? "bg-[#d7ffb8] border-[#58cc02]" : "bg-white border-[#e5e5e5] hover:bg-[#d7ffb8]"))
                        )
                      }>
                        
                        <div className="flex flex-col gap-4">
                          <div className="flex items-start gap-4" dir="ltr">
                            <div className={"shrink-0 p-3 rounded-2xl mt-1 transition-colors " + 
                               (isPlaying ? (isA ? "bg-[#1cb0f6] text-white" : "bg-[#58cc02] text-white") : "bg-stone-200 text-stone-500 group-hover:bg-opacity-80")
                            }>
                              {isPlaying ? <Volume2 size={24} className="animate-pulse" /> : <Play size={24} fill="currentColor" />}
                            </div>
                            <span className={"text-2xl font-extrabold leading-tight mt-1 transition-colors " + 
                              (isPlaying ? (isA ? "text-[#1cb0f6]" : "text-[#58a700]") : "text-[#4b4b4b]")
                            }>
                              {line.spanish}
                            </span>
                          </div>
                          
                          <div className="h-[2px] bg-stone-200/60 w-full rounded-full" />
                          
                          <div className="flex flex-col gap-2" dir="rtl">
                            <div className="text-xl font-bold text-[#4b4b4b] opacity-90">
                              {line.arabicTranslation}
                            </div>
                            <div className="text-base font-bold text-stone-400 flex flex-wrap gap-1">
                              <span>النطق:</span>
                              <span className="text-stone-600">{line.arabicPronunciation}</span>
                            </div>
                          </div>
                        </div>
                        
                        <AnimatePresence>
                           {isPlaying && (
                             <motion.div 
                               initial={{ scale: 0, opacity: 0 }}
                               animate={{ scale: 1, opacity: 1 }}
                               exit={{ scale: 0, opacity: 0 }}
                               className={"absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white shadow-md " + 
                                 (isA ? "bg-[#1cb0f6]" : "bg-[#58cc02]")
                               }
                             >
                               <Volume2 size={16} />
                             </motion.div>
                           )}
                        </AnimatePresence>

                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 border-t-2 border-stone-200 pt-8">
                 <button
                    onClick={() => { stopAll(); setCurrentPlayingIndex(0); togglePlayAll(); }}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xl tracking-wide transition-all active:translate-y-1 active:shadow-none justify-center bg-stone-100 text-stone-700 border-2 border-stone-200 hover:bg-stone-200 shadow-sm"
                 >
                   إعادة التشغيل
                 </button>
                 {selectedScenario.quiz && selectedScenario.quiz.length > 0 && (
                   <button
                     onClick={() => { stopAll(); setShowQuiz(true); }}
                     className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xl tracking-wide transition-all active:translate-y-1 active:shadow-none justify-center bg-[#1cb0f6] text-white border-b-4 border-[#1899d6] hover:brightness-110 shadow-sm"
                   >
                     <Target size={28} />
                     اختبر نفسك في هذه المحادثة!
                   </button>
                 )}
              </div>

            </div>
          </motion.div>
        )}
      </main>

      {showQuiz && selectedScenario && selectedScenario.quiz && (
        <LessonModal
          lesson={{
            id: "conv_quiz_" + selectedScenario.id,
            title: "اختبار محادثة: " + selectedScenario.arabicTitle,
            details: selectedScenario.quiz
          }}
          unitId="conversation_quiz"
          onClose={() => setShowQuiz(false)}
          onComplete={() => {
             setShowQuiz(false);
          }}
        />
      )}
    </div>
  );
}
