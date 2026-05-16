import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, User, MessageSquare, Volume2, ArrowRight, Languages, Book, Info } from 'lucide-react';
import { scenarios } from '../../data/scenariosData';
import { useAudioSettings } from '../../context/AudioSettingsContext';

export default function Scenarios() {
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);

  if (activeScenarioId) {
     return <InteractiveScenario scenarioId={activeScenarioId} onBack={() => setActiveScenarioId(null)} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#4b4b4b] mb-4">النصوص والمحادثات</h1>
        <p className="text-[#afafaf] font-bold text-lg max-w-lg mx-auto">تعلم الإسبانية من خلال مواقف حقيقية. استمع، اختر ردك، وطور مهاراتك.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map(scenario => (
          <button 
            key={scenario.id}
            onClick={() => setActiveScenarioId(scenario.id)}
            className="group relative bg-white border-2 border-[#e5e5e5] rounded-[2.5rem] p-8 text-right hover:border-[#1cb0f6] transition-all flex flex-col hover:-translate-y-2 hover:shadow-[0_8px_0_0_#e5e5e5] active:translate-y-0 active:shadow-none"
          >
            <div className="text-6xl mb-6 bg-stone-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">{scenario.emoji}</div>
            <h3 className="text-2xl font-extrabold text-[#4b4b4b] mb-2">{scenario.title}</h3>
            <p className="text-[#afafaf] font-bold leading-relaxed">{scenario.description}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1cb0f6] opacity-0 group-hover:opacity-100 transition-opacity">
               ابدأ الآن <ArrowRight size={16} className="rotate-180" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function InteractiveScenario({ scenarioId, onBack }: { scenarioId: string, onBack: () => void }) {
  const scenario = scenarios.find(s => s.id === scenarioId)!;
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [history, setHistory] = useState<{ text: string; speaker: 'user' | 'bot'; translation?: string }[]>([]);
  const [showTranslations, setShowTranslations] = useState(true);
  const [showVocab, setShowVocab] = useState(false);
  const { audioSpeed } = useAudioSettings();
  const scrollRef = useRef<HTMLDivElement>(null);

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = audioSpeed * 0.9; // Slightly slower for clarity
    utterance.pitch = 1.3; // Even more youthful/expressive
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (scenario.steps[0]?.speaker === 'bot' && history.length === 0) {
      const firstStep = scenario.steps[0];
      setHistory([{ text: firstStep.text, speaker: 'bot', translation: firstStep.options?.[0]?.translation || '...' }]);
      setCurrentStepIdx(1);
      setTimeout(() => playAudio(firstStep.text), 300);
    }
  }, [scenario]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const step = scenario.steps[currentStepIdx];
  const isFinished = currentStepIdx >= scenario.steps.length;

  const handleOptionSelect = (optionText: string, translation: string, correct: boolean) => {
    if (!correct) return;
    
    const newHistory = [...history, { text: optionText, speaker: 'user' as const, translation }];
    
    const nextIdx = currentStepIdx + 1;
    let nextBotText = '';
    let nextBotTranslation = '';
    
    if (nextIdx < scenario.steps.length) {
       const nextStep = scenario.steps[nextIdx];
       if (nextStep.speaker === 'bot') {
          newHistory.push({ text: nextStep.text, speaker: 'bot', translation: 'التالي...' }); // Translation for bot needs data structure adjustment or manual mapping
          nextBotText = nextStep.text;
       }
    }
    
    setHistory(newHistory);
    setCurrentStepIdx(nextIdx + (scenario.steps[nextIdx]?.speaker === 'bot' ? 1 : 0));

    if (nextBotText) {
       setTimeout(() => playAudio(nextBotText), 500);
    }
  };

  const progress = (currentStepIdx / scenario.steps.length) * 100;

  return (
    <div className="fixed inset-0 bg-white z-[60] flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar - Desktop Only */}
      <div className={`
        fixed inset-y-0 right-0 z-50 w-80 bg-stone-50 border-l-2 border-stone-200 p-6 transition-transform
        ${showVocab ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:w-80 border-l-2 flex flex-col
      `}>
          <div className="flex items-center gap-3 mb-8">
             <Book className="text-[#ffc800]" />
             <h3 className="text-xl font-extrabold text-[#4b4b4b]">مفردات هامة</h3>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4">
             {scenario.steps.map((s, idx) => s.options?.filter(o => o.correct).map((o, oidx) => (
               <button 
                 key={`${idx}-${oidx}`}
                 onClick={() => playAudio(o.text)}
                 className="w-full bg-white p-4 rounded-2xl border-2 border-[#e5e5e5] text-right hover:border-[#1cb0f6] transition-all group"
               >
                 <div className="flex justify-between items-center mb-1">
                   <Volume2 size={16} className="text-[#1cb0f6] opacity-0 group-hover:opacity-100" />
                   <span className="font-bold text-[#4b4b4b] text-lg" dir="ltr">{o.text}</span>
                 </div>
                 <div className="text-sm text-stone-500 font-bold">{o.translation}</div>
               </button>
             )))}
             {scenario.steps.length === 0 && <p className="text-stone-400 text-center py-10">سيظهر هنا أهم الكلمات التي تتعلمها خلال الحوار.</p>}
          </div>
          <button 
            onClick={() => setShowVocab(false)}
            className="mt-4 p-4 bg-white border-2 border-[#e5e5e5] rounded-2xl font-bold text-stone-500 md:hidden"
          >
            إغلاق
          </button>
      </div>

      <div className="flex-1 flex flex-col h-full bg-[#f7f7f7] relative">
        {/* Header */}
        <div className="h-20 bg-white border-b-2 border-stone-200 px-6 flex items-center justify-between sticky top-0 z-10">
           <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="w-10 h-10 border-2 border-stone-200 rounded-xl flex items-center justify-center hover:bg-stone-50 transition-colors text-stone-500"
              >
                <ArrowRight size={20} />
              </button>
              <div>
                <h2 className="font-extrabold text-[#4b4b4b]">{scenario.title}</h2>
                <div className="flex items-center gap-4 mt-1">
                   <div className="w-24 h-2 bg-stone-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#58cc02]"
                        animate={{ width: `${progress}%` }}
                      />
                   </div>
                </div>
              </div>
           </div>
           
           <div className="flex gap-2">
              <button 
                onClick={() => setShowTranslations(!showTranslations)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all border-2 ${showTranslations ? 'bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6]' : 'bg-white border-stone-200 text-stone-400'}`}
                title="إظهار/إخفاء الترجمة"
              >
                <Languages size={20} />
              </button>
              <button 
                onClick={() => setShowVocab(true)}
                className="w-10 h-10 bg-white border-2 border-stone-200 rounded-xl flex items-center justify-center text-stone-500 md:hidden"
              >
                <Book size={20} />
              </button>
           </div>
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth"
        >
           <AnimatePresence initial={false}>
              {history.map((msg, i) => (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   key={i} 
                   className={`flex ${msg.speaker === 'user' ? 'justify-start flex-row-reverse' : 'justify-start'}`}
                 >
                    <div className={`flex items-start gap-4 max-w-[85%] md:max-w-[70%] ${msg.speaker === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${msg.speaker === 'user' ? 'bg-[#58cc02]' : 'bg-[#1cb0f6]'}`}>
                          {msg.speaker === 'user' ? <User className="text-white" size={24} /> : <MessageSquare className="text-white" size={24} />}
                       </div>
                       <div className="flex flex-col gap-1">
                          <div className={`
                            group relative px-6 py-4 rounded-[2rem] font-bold text-xl shadow-sm border-2 transition-all
                            ${msg.speaker === 'user' 
                              ? 'bg-[#ddf4ff] border-[#84d8ff] text-[#1cb0f6] rounded-tr-none' 
                              : 'bg-white border-[#e5e5e5] text-[#4b4b4b] rounded-tl-none hover:border-[#1cb0f6]'}
                          `} dir="ltr">
                             {msg.text}
                             <button 
                               onClick={() => playAudio(msg.text)}
                               className={`
                                 absolute top-1/2 -translate-y-1/2 
                                 ${msg.speaker === 'user' ? 'right-full mr-4' : 'left-full ml-4'} 
                                 bg-white w-10 h-10 rounded-full border-2 border-stone-200 flex items-center justify-center text-stone-400 hover:text-[#1cb0f6] hover:border-[#1cb0f6] transition-all
                               `}
                             >
                               <Volume2 size={20} />
                             </button>
                          </div>
                          {showTranslations && msg.translation && (
                             <motion.div 
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               className={`text-sm font-bold text-stone-400 px-4 ${msg.speaker === 'user' ? 'text-left' : 'text-right'}`}
                             >
                                {msg.translation}
                             </motion.div>
                          )}
                       </div>
                    </div>
                 </motion.div>
              ))}
           </AnimatePresence>

           {isFinished && (
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center py-10"
              >
                  <div className="bg-[#ffc800] text-white p-6 rounded-full shadow-[0_4px_0_0_#e5b400] mb-6">
                     <Languages size={48} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#4b4b4b] mb-2">ممتاز! أكملت الحوار</h3>
                  <button 
                    onClick={onBack}
                    className="mt-4 bg-[#58cc02] text-white px-10 py-4 rounded-2xl font-extrabold text-xl shadow-[0_6px_0_0_#58a700] hover:brightness-110 active:translate-y-1 active:shadow-none"
                  >
                    العودة للنصوص
                  </button>
              </motion.div>
           )}
        </div>

        {/* Action Area */}
        {!isFinished && step?.speaker === 'user' && (
           <div className="bg-white p-6 md:p-8 border-t-2 border-stone-200 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
              <div className="max-w-xl mx-auto">
                <div className="flex items-center gap-2 mb-6 justify-center text-stone-400 font-bold">
                   <Info size={18} />
                   <span>اختر الرد الأنسب لإكمال المحادثة</span>
                </div>
                <div className="flex flex-col gap-4">
                   {step.options?.map((opt, i) => (
                      <button 
                         key={i}
                         onClick={() => handleOptionSelect(opt.text, opt.translation, opt.correct)}
                         className={`
                           group w-full text-right p-6 border-2 border-[#e5e5e5] rounded-[2rem] transition-all hover:-translate-y-1
                           ${opt.correct ? 'hover:border-[#1cb0f6] hover:bg-[#ddf4ff] hover:shadow-[0_6px_0_0_#84d8ff]' : 'hover:border-rose-400 hover:bg-rose-50'}
                         `}
                      >
                         <div className="flex justify-between items-center mb-1" dir="ltr">
                           <span className="text-xl font-extrabold text-[#4b4b4b] group-hover:text-[#1cb0f6]">{opt.text}</span>
                           <Volume2 size={24} className="text-stone-300 group-hover:text-[#1cb0f6]" />
                         </div>
                         <div className="text-lg font-bold text-stone-400">{opt.translation}</div>
                      </button>
                   ))}
                </div>
              </div>
           </div>
        )}
      </div>
    </div>
  );
}

