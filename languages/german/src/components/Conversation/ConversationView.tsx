import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { conversations } from '../../data/conversations';
import { Volume2, ChevronRight, User, PlayCircle, Mic, Star, CheckCircle2, ClipboardCheck } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function ConversationView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const conversation = conversations.find(c => c.id === id);
  const [activeSpeechId, setActiveSpeechId] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [completed, setCompleted] = useState(false);

  const isPlayingAllRef = React.useRef(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeSpeechId !== null) {
      const activeElement = document.getElementById(`speech-${activeSpeechId}`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeSpeechId]);

  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
      isPlayingAllRef.current = false;
    };
  }, []);

  if (!conversation) return null;

  const IconComponent = ({ name, className }: { name: string; className?: string }) => {
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return <Star className={className} />;
    return <Icon className={className} />;
  };

  const playAudio = (text: string, id: number, lineIdx: number, speakerName: string, onEnd?: () => void) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.95;
      utterance.pitch = 1;
      
      const voices = window.speechSynthesis.getVoices();
      const germanVoices = voices.filter(v => v.lang.startsWith('de'));
      
      if (germanVoices.length > 0) {
        // Broad categories for voices
        const femaleVoices = germanVoices.filter(v => 
          v.name.toLowerCase().includes('female') || 
          v.name.toLowerCase().includes('sara') || 
          v.name.toLowerCase().includes('katja') || 
          v.name.toLowerCase().includes('zira') || 
          v.name.toLowerCase().includes('hedda') || 
          v.name.toLowerCase().includes('anna') ||
          v.name.toLowerCase().includes('susan') ||
          v.name.toLowerCase().includes('helena') ||
          v.name.toLowerCase().includes('kerstin') ||
          v.name.toLowerCase().includes('vicki')
        );
        
        const maleVoices = germanVoices.filter(v => 
          v.name.toLowerCase().includes('male') || 
          v.name.toLowerCase().includes('stefan') || 
          v.name.toLowerCase().includes('markus') || 
          v.name.toLowerCase().includes('google deutsch') || 
          v.name.toLowerCase().includes('david') || 
          v.name.toLowerCase().includes('leon') ||
          v.name.toLowerCase().includes('herrmann') ||
          v.name.toLowerCase().includes('dietmar') ||
          v.name.toLowerCase().includes('hans')
        );

        if (lineIdx % 2 === 0) {
          // Male Line
          if (maleVoices.length > 0) {
            utterance.voice = maleVoices[0];
            utterance.pitch = 0.85; // Slightly lower for male
          } else if (germanVoices.length > 1) {
            utterance.voice = germanVoices[1];
            utterance.pitch = 0.8; // Lower pitch fallback
          } else {
            utterance.voice = germanVoices[0];
            utterance.pitch = 0.75;
          }
        } else {
          // Female Line
          if (femaleVoices.length > 0) {
            utterance.voice = femaleVoices[0];
            utterance.pitch = 1.15; // Slightly higher for female
          } else {
            utterance.voice = germanVoices[0];
            utterance.pitch = 1.25; // Higher pitch fallback
          }
        }
      }

      utterance.onstart = () => setActiveSpeechId(id);
      utterance.onend = () => {
        setActiveSpeechId(null);
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        setActiveSpeechId(null);
        if (onEnd) onEnd();
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const playEntireConversation = () => {
    if (isPlayingAll) {
      window.speechSynthesis.cancel();
      setIsPlayingAll(false);
      isPlayingAllRef.current = false;
      setActiveSpeechId(null);
      return;
    }

    setIsPlayingAll(true);
    isPlayingAllRef.current = true;
    let currentLine = 0;

    const playNext = () => {
      if (!isPlayingAllRef.current) return;

      if (currentLine < conversation.dialog.length) {
        const line = conversation.dialog[currentLine];
        playAudio(line.german, line.id, currentLine, line.speaker, () => {
          currentLine++;
          // Wait a bit before next line
          setTimeout(() => {
            if (isPlayingAllRef.current) {
              playNext();
            }
          }, 800);
        });
      } else {
        setIsPlayingAll(false);
        isPlayingAllRef.current = false;
        setCompleted(true);
      }
    };

    playNext();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col min-h-screen md:min-h-[calc(100vh-80px)] bg-slate-50 md:rounded-[2.5rem] overflow-hidden shadow-2xl relative mb-16 border border-slate-200">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Chat Header */}
      <div className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 px-4 py-4 md:px-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex items-center justify-between">
        <button 
          onClick={() => navigate('/conversations')}
          className="flex items-center justify-center w-12 h-12 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl font-bold transition-all shadow-sm bg-white border border-slate-100 group"
        >
          <ChevronRight className="w-6 h-6 mr-1 transform group-hover:scale-110 transition-transform" />
        </button>

        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
               <IconComponent name={conversation.icon} className="w-10 h-10 text-indigo-500" />
            </div>
            <div className="text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-tight">{conversation.title}</h1>
              <p className="text-xs md:text-sm text-slate-500 font-bold max-w-xs truncate">{conversation.description}</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={playEntireConversation}
          className={`flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-black transition-all shadow-lg active:scale-95 ${
            isPlayingAll 
            ? 'bg-red-500 text-white shadow-red-200 ring-4 ring-red-100' 
            : 'bg-primary-500 text-white shadow-primary-200 hover:bg-primary-600'
          }`}
        >
          {isPlayingAll ? (
            <>
              <div className="flex gap-1">
                <div className="w-1.5 h-4 bg-white animate-pulse" />
                <div className="w-1.5 h-4 bg-white animate-pulse delay-75" />
                <div className="w-1.5 h-4 bg-white animate-pulse delay-150" />
              </div>
              <span>إيقاف</span>
            </>
          ) : (
            <>
              <PlayCircle className="w-6 h-6" />
              <span className="hidden sm:inline">تشغيل الكل</span>
            </>
          )}
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-10 pb-32 relative z-10 w-full" ref={scrollContainerRef}>
        {conversation.dialog.map((line, idx) => {
          const isLeft = line.speakerId === 2;
          const isActive = activeSpeechId === line.id;
          
          return (
            <motion.div
              key={line.id}
              id={`speech-${line.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 250, damping: 25 }}
              className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex flex-col max-w-[95%] md:max-w-[85%] ${isLeft ? 'items-start' : 'items-end'}`}>
                
                {/* Speaker Name & Avatar */}
                <div className={`flex items-center gap-3 mb-2 px-3 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black shadow-sm border-2 ${isLeft ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
                    {line.speaker.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-slate-200/50">
                    {line.speaker}
                  </span>
                </div>
                
                {/* Chat Bubble */}
                <button
                  onClick={() => playAudio(line.german, line.id, idx, line.speaker)}
                  className={`text-right w-full p-5 md:p-7 relative group text-left transition-all duration-300 shadow-[0_8px_0_0_#f1f5f9] outline-none focus:outline-none focus:ring-4 ${
                    isLeft 
                      ? 'bg-white border-2 border-slate-100 hover:border-indigo-300 rounded-[2.5rem] rounded-tl-xl focus:ring-indigo-300/50 shadow-[#e2e8f0]' 
                      : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200/60 hover:border-emerald-400 rounded-[2.5rem] rounded-tr-xl focus:ring-emerald-300/50 shadow-[#d1fae5]'
                  } ${isActive ? 'ring-4 ring-emerald-400/40 scale-[1.02] shadow-xl border-transparent translate-y-[-2px]' : 'hover:shadow-xl hover:-translate-y-1'}`}
                >
                  {/* German Text (Main) */}
                  <div className={`flex items-start gap-4 mb-4 pb-5 border-b-2 ${isLeft ? 'border-slate-100/80' : 'border-emerald-200/50'}`} dir="ltr">
                    <div className={`mt-1 shrink-0 bg-white rounded-2xl p-2 shadow-sm border border-slate-100 transition-all duration-500 ${isActive ? 'scale-110 text-emerald-500 shadow-emerald-200' : 'text-slate-400 group-hover:text-emerald-500 group-hover:shadow-md group-hover:scale-105'}`}>
                      <Volume2 className={`w-7 h-7 ${isActive ? 'animate-pulse' : ''}`} />
                    </div>
                    <p className={`text-xl md:text-3xl font-black font-mono tracking-tight leading-[1.6] pt-1 ${isLeft ? 'text-slate-800' : 'text-emerald-950'}`}>
                      {line.german}
                    </p>
                  </div>
                  
                  {/* Arabic Translation & Pronunciation */}
                  <div dir="rtl" className="space-y-4 px-2">
                    <p className={`text-xl md:text-2xl font-bold leading-relaxed ${isLeft ? 'text-slate-700' : 'text-emerald-900'}`}>
                      {line.arabicTranslation}
                    </p>
                    <div className={`inline-flex items-center gap-3 py-3 px-5 rounded-2xl w-full sm:w-auto ${isLeft ? 'bg-indigo-50/80 border border-indigo-100' : 'bg-white/60 border border-emerald-200/80'}`}>
                      <Mic className={`w-5 h-5 shrink-0 mt-0.5 ${isLeft ? 'text-indigo-500' : 'text-emerald-600'}`} />
                      <p className={`text-sm md:text-base font-bold ${isLeft ? 'text-indigo-900' : 'text-emerald-900'}`} dir="ltr">
                        {line.arabicPronunciation}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator bar */}
                  {isActive && (
                    <motion.div layoutId="activeIndicator" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-2/3 bg-emerald-500 rounded-r-full" />
                  )}
                </button>

              </div>
            </motion.div>
          );
        })}

        {/* Footer actions */}
        <AnimatePresence>
          {(completed || !isPlayingAll) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6 pt-10"
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-4" />
              
              <div className="text-center mb-4">
                 <h3 className="text-2xl font-black text-slate-800 mb-2">هل تعلمت الدرس جيداً؟</h3>
                 <p className="text-slate-500 font-bold">اختبر معلوماتك الآن واحصل على نقاط خبرة!</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate('/conversations')}
                  className="py-4 px-8 rounded-3xl bg-white border-2 border-slate-200 text-slate-600 font-black text-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-[0_6px_0_0_#e2e8f0] active:translate-y-[6px] active:shadow-none"
                >
                  العودة للقائمة
                </button>
                <button 
                  onClick={() => navigate(`/quiz/conv-${conversation.id}`, { state: { questions: conversation.quizQuestions } })}
                  className="py-4 px-8 rounded-3xl bg-amber-400 border-2 border-amber-300 text-amber-950 font-black text-xl hover:bg-amber-500 transition-all shadow-[0_6px_0_0_#d97706] active:translate-y-[6px] active:shadow-none flex items-center gap-3"
                >
                  <ClipboardCheck className="w-6 h-6" />
                  ابدأ الاختبار
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
