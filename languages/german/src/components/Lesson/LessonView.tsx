import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getLessonData, courseUnits } from '../../data/courseData';
import { Volume2, Check, BookOpen, X, Trophy } from 'lucide-react'; 
import * as LucideIcons from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';

export default function LessonView({ levelId, dataId }: { levelId: number; dataId: string }) {
  const navigate = useNavigate();
  const { unlockLevel } = useProgress();
  const [activeTip, setActiveTip] = useState<{title: string, content: string} | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const playAudioSequentially = async (letter?: string, word?: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      let text = '';
      if (letter && word) {
        text = `${letter}, ${word}`;
      } else {
        text = letter || word || '';
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const finish = () => {
    setShowCelebration(true);
  };

  const proceedToNextLevel = () => {
    const allLevels = courseUnits.flatMap(u => u.levels);
    const currentIndex = allLevels.findIndex(l => l.id === levelId);
    
    // Unlock the next level
    if (currentIndex !== -1 && currentIndex < allLevels.length - 1) {
      const nextLevel = allLevels[currentIndex + 1];
      unlockLevel(nextLevel.id);
      navigate(`/${nextLevel.type === 'lesson' ? 'level' : 'quiz'}/${nextLevel.id}`);
    } else if (levelId === 72) { // Final level
       navigate('/');
    } else {
      unlockLevel(levelId + 1);
      navigate('/');
    }
  };

  const data = getLessonData(dataId);

  const IconComponent = ({ name, className }: { name: string; className?: string }) => {
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return null;
    return <Icon className={className} />;
  };

  return (
    <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight text-right w-full">تعلم الحروف الألمانية</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 pb-20" dir="rtl">
        {data.map((item, index) => (
          <div key={item.id} className="relative group">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playAudioSequentially(item.audioLetter, item.audioWord)}
              className="bg-white w-full h-full rounded-3xl p-4 flex flex-col items-center justify-center border-2 border-slate-200 shadow-[0_8px_0_0_#e2e8f0] hover:border-primary-400 hover:shadow-[0_8px_0_0_#3b82f6] transition-all overflow-hidden relative"
            >
              <div className="absolute top-3 left-3 bg-primary-100 p-1.5 rounded-full group-hover:bg-primary-200 transition-colors">
                <Volume2 className="w-5 h-5 text-primary-600" />
              </div>

              <span className="text-4xl md:text-5xl font-black text-primary-600 mb-2 font-mono">
                {item.title.includes(' ') ? item.title.split(' ')[0] : item.title}
              </span>
              
              <div className="text-5xl mb-4 text-slate-700">
                {item.icon ? <IconComponent name={item.icon} className="w-12 h-12" /> : item.emoji}
              </div>
              
              <div className="flex flex-col items-center gap-1 w-full mt-auto bg-slate-50 p-3 rounded-2xl group-hover:bg-primary-50 transition-colors">
                <span className="text-lg md:text-xl font-bold text-slate-800 ">{item.subtitle || item.title}</span>
                <span className="text-sm font-bold text-slate-500 group-hover:text-primary-600 ">{item.translation}</span>
              </div>
            </motion.button>
            
            {item.grammarTip && (
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveTip(item.grammarTip!); }}
                className="absolute -top-3 -right-3 bg-amber-400 text-amber-900 p-2 rounded-full shadow-md hover:scale-110 transition-transform z-10"
                title="نصيحة للقواعد"
              >
                <BookOpen className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center pb-20">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={finish}
          className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-2xl py-6 px-12 rounded-3xl shadow-[0_8px_0_0_#d97706] transition-all hover:scale-105 active:scale-95 flex items-center gap-4 border-2 border-amber-300"
        >
          <Trophy className="w-8 h-8" />
          ابدأ الاختبار الآن!
        </motion.button>
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
              
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-amber-100 p-6 rounded-full"
                  >
                    <Trophy className="w-20 h-20 text-amber-500" />
                  </motion.div>
                </div>
              </div>

              <h2 className="text-4xl font-black text-slate-800 mb-4">ممتاز!</h2>
              <p className="text-xl text-slate-600 mb-8 font-medium">
                لقد انتهيت من دراسة هذا الدرس. هل أنت مستعد لاختبار معلوماتك؟
              </p>

              <button
                onClick={proceedToNextLevel}
                className="w-full py-5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-2xl transition-all shadow-lg shadow-amber-400/30 hover:scale-105 active:scale-95"
              >
                بدء الاختبار
              </button>
            </motion.div>
          </motion.div>
        )}

        {activeTip && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveTip(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl border-4 border-amber-400 relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setActiveTip(null)} className="absolute top-4 left-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 ">
                <X className="w-5 h-5 text-slate-500" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-100 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-amber-600 " />
                </div>
                <h3 className="text-2xl font-black text-slate-800 ">{activeTip.title}</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium text-right">
                {activeTip.content}
              </p>
              <button 
                onClick={() => setActiveTip(null)}
                className="w-full mt-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 font-bold text-amber-950 text-lg transition-colors border-b-4 border-amber-600"
              >
                فهمت ذلك!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
