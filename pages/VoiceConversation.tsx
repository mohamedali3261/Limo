import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, ArrowLeft, Play, Pause, BookOpen, MessageCircle, Mic } from 'lucide-react';
import { speak, stopSpeaking } from '../lib/audio';
import ConversationQuiz from './ConversationQuiz';
import {
  HandshakeIcon,
  ShoppingIcon,
  DoctorIcon,
  HotelIcon,
  RestaurantIcon,
  AirportIcon,
  LibraryIcon,
  TrainIcon,
  PharmacyIcon,
  SchoolIcon,
  OfficeIcon,
  CafeIcon
} from '../components/icons/ConversationIcons';

interface Dialogue {
  speaker: string;
  gender: 'male' | 'female';
  en: string;
  ar: string;
}

interface Situation {
  id: number;
  title: string;
  titleEn: string;
  icon: string;
  color: string;
  difficulty: string;
  dialogues: Dialogue[];
}

// SVG Icons Components
const MaleAvatar = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#3B82F6" opacity="0.1"/>
    <circle cx="50" cy="35" r="15" fill="#3B82F6"/>
    <path d="M25 75 Q25 55 50 55 Q75 55 75 75 L75 85 Q75 90 70 90 L30 90 Q25 90 25 85 Z" fill="#3B82F6"/>
  </svg>
);

const FemaleAvatar = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#EC4899" opacity="0.1"/>
    <circle cx="50" cy="35" r="15" fill="#EC4899"/>
    <path d="M25 75 Q25 55 50 55 Q75 55 75 75 L75 85 Q75 90 70 90 L30 90 Q25 90 25 85 Z" fill="#EC4899"/>
    <path d="M35 32 Q30 28 30 35" stroke="#EC4899" strokeWidth="2" fill="none"/>
    <path d="M65 32 Q70 28 70 35" stroke="#EC4899" strokeWidth="2" fill="none"/>
  </svg>
);

export default function VoiceConversation() {
  const [situations, setSituations] = useState<Situation[]>([]);
  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const dialogueRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const autoPlayRef = React.useRef(false);

  useEffect(() => {
    // تحميل الأصوات المتاحة
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setVoicesLoaded(true);
        console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
      }
    };

    // تحميل الأصوات عند بدء الصفحة
    loadVoices();
    
    // بعض المتصفحات تحتاج لحدث onvoiceschanged
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // تحميل المواقف من ملف الفهرس
    fetch('/data/conversations/index.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load conversations: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSituations(data);
        } else {
          console.error('Invalid conversations data format');
          setSituations([]);
        }
      })
      .catch(err => {
        console.error('Error loading situations:', err);
        setSituations([]);
      });

    return () => {
      // إيقاف أي صوت شغال وإلغاء التشغيل التلقائي عند مغادرة الصفحة
      setAutoPlay(false);
      autoPlayRef.current = false;
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    autoPlayRef.current = autoPlay;
  }, [autoPlay]);

  const handleSpeak = async (text: string, index: number, gender: 'male' | 'female') => {
    setPlayingIndex(index);
    
    // Scroll to the dialogue box
    if (dialogueRefs.current[index]) {
      dialogueRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // استخدام صوت مختلف حسب الجنس
    console.log(`Speaking as ${gender}: ${text.substring(0, 30)}...`);
    await speak(text, 'en-US', gender);
    setPlayingIndex(null);
    
    // التشغيل التلقائي للجملة التالية بدون توقف
    if (autoPlayRef.current && selectedSituation && index < selectedSituation.dialogues.length - 1) {
      const nextDialogue = selectedSituation.dialogues[index + 1];
      handleSpeak(nextDialogue.en, index + 1, nextDialogue.gender);
    } else if (autoPlayRef.current && selectedSituation && index === selectedSituation.dialogues.length - 1) {
      // إيقاف التشغيل التلقائي عند انتهاء المحادثة
      setAutoPlay(false);
      autoPlayRef.current = false;
    }
  };

  const startAutoPlay = () => {
    if (selectedSituation && selectedSituation.dialogues.length > 0) {
      setAutoPlay(true);
      const firstDialogue = selectedSituation.dialogues[0];
      handleSpeak(firstDialogue.en, 0, firstDialogue.gender);
    }
  };

  const stopAutoPlay = () => {
    setAutoPlay(false);
    window.speechSynthesis.cancel();
  };

  const loadSituationDetails = async (situation: Situation) => {
    try {
      const file = (situation as any).file;
      if (!file) {
        // إذا لم يكن هناك ملف، استخدم البيانات الموجودة
        setSelectedSituation(situation);
        return;
      }
      const response = await fetch(`/data/conversations/${file}`);
      if (!response.ok) {
        console.error('Failed to load situation details:', response.status);
        setSelectedSituation(situation);
        return;
      }
      const fullData = await response.json();
      setSelectedSituation(fullData);
    } catch (err) {
      console.error('Error loading situation details:', err);
      // استخدم البيانات الموجودة بدلاً من الفشل
      setSelectedSituation(situation);
    }
  };



  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      'handshake': HandshakeIcon,
      'shopping': ShoppingIcon,
      'doctor': DoctorIcon,
      'hotel': HotelIcon,
      'restaurant': RestaurantIcon,
      'airport': AirportIcon,
      'library': LibraryIcon,
      'train': TrainIcon,
      'pharmacy': PharmacyIcon,
      'school': SchoolIcon,
      'office': OfficeIcon,
      'cafe': CafeIcon,
    };
    return icons[iconName] || HandshakeIcon;
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'from-blue-500 to-cyan-500',
        light: 'from-blue-50 to-cyan-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-700'
      },
      green: {
        bg: 'from-green-500 to-emerald-500',
        light: 'from-green-50 to-emerald-50',
        border: 'border-green-200',
        text: 'text-green-600',
        badge: 'bg-green-100 text-green-700'
      },
      red: {
        bg: 'from-red-500 to-rose-500',
        light: 'from-red-50 to-rose-50',
        border: 'border-red-200',
        text: 'text-red-600',
        badge: 'bg-red-100 text-red-700'
      },
      purple: {
        bg: 'from-purple-500 to-indigo-500',
        light: 'from-purple-50 to-indigo-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        badge: 'bg-purple-100 text-purple-700'
      },
      orange: {
        bg: 'from-orange-500 to-amber-500',
        light: 'from-orange-50 to-amber-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        badge: 'bg-orange-100 text-orange-700'
      },
      cyan: {
        bg: 'from-cyan-500 to-sky-500',
        light: 'from-cyan-50 to-sky-50',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        badge: 'bg-cyan-100 text-cyan-700'
      },
      amber: {
        bg: 'from-amber-500 to-yellow-500',
        light: 'from-amber-50 to-yellow-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        badge: 'bg-amber-100 text-amber-700'
      }
    };
    return colors[color] || colors.blue;
  };

  if (showQuiz && selectedSituation && (selectedSituation as any).quiz) {
    return (
      <ConversationQuiz
        situationTitle={selectedSituation.title}
        quizTitle={(selectedSituation as any).quiz.title}
        questions={(selectedSituation as any).quiz.questions}
        onBack={() => setShowQuiz(false)}
      />
    );
  }

  if (selectedSituation) {
    // تأكد من أن selectedSituation لديها dialogues
    if (!selectedSituation.dialogues || selectedSituation.dialogues.length === 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">خطأ في تحميل المحادثة</h2>
            <button
              onClick={() => setSelectedSituation(null)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600"
            >
              العودة
            </button>
          </div>
        </div>
      );
    }
    
    const colors = getColorClasses(selectedSituation.color);
    const IconComponent = getIconComponent(selectedSituation.icon);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pb-32">
        {/* Header */}
        <div className={`bg-gradient-to-r ${colors.bg} text-white px-6 py-8 shadow-lg`}>
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => {
                stopAutoPlay();
                setSelectedSituation(null);
              }}
              className="flex items-center gap-2 mb-4 hover:bg-white/20 px-4 py-2 rounded-xl transition-all"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">رجوع</span>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <IconComponent className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black mb-2">{selectedSituation.title}</h1>
                <p className="text-xl opacity-90">{selectedSituation.titleEn}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Auto Play Button */}
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <button
              onClick={autoPlay ? stopAutoPlay : startAutoPlay}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                autoPlay 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {autoPlay ? (
                <>
                  <Pause size={20} />
                  <span>إيقاف التشغيل</span>
                </>
              ) : (
                <>
                  <Play size={20} />
                  <span>التشغيل التلقائي</span>
                </>
              )}
            </button>
            {(selectedSituation as any).quiz && (
              <button
                onClick={() => setShowQuiz(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold bg-blue-500 hover:bg-blue-600 text-white transition-all"
              >
                <BookOpen size={20} />
                <span>اختبار</span>
              </button>
            )}
            {voicesLoaded && (
              <span className="text-xs bg-green-500 text-white px-3 py-2 rounded-full font-bold">
                ✓ جاهز
              </span>
            )}
          </div>
        </div>

        {/* Dialogues */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {selectedSituation.dialogues.map((dialogue, index) => {
              const isMale = dialogue.gender === 'male';
              
              return (
                <motion.div
                  key={index}
                  ref={(el) => {
                    if (el) dialogueRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isMale ? 'mr-auto' : 'ml-auto'} max-w-2xl`}
                >
                  <div className={`bg-gradient-to-br ${isMale ? 'from-blue-50 to-cyan-50 border-blue-200' : 'from-pink-50 to-rose-50 border-pink-200'} border-3 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                       onClick={() => handleSpeak(dialogue.en, index, dialogue.gender)}>
                    
                    {/* Speaker Badge with Avatar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {isMale ? (
                          <MaleAvatar className="w-12 h-12" />
                        ) : (
                          <FemaleAvatar className="w-12 h-12" />
                        )}
                        <div className={`${isMale ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'} px-4 py-2 rounded-full font-black text-sm`}>
                          {dialogue.speaker}
                        </div>
                      </div>
                      <button
                        className={`p-3 rounded-full transition-all ${
                          playingIndex === index 
                            ? 'bg-primary text-white scale-110 animate-pulse' 
                            : `bg-white ${isMale ? 'text-blue-600' : 'text-pink-600'} hover:scale-110`
                        }`}
                      >
                        <Volume2 size={22} />
                      </button>
                    </div>

                    {/* English Text */}
                    <p className={`text-2xl font-extrabold ${isMale ? 'text-blue-900' : 'text-pink-900'} mb-3 leading-relaxed`} dir="ltr">
                      {dialogue.en}
                    </p>

                    {/* Arabic Translation */}
                    <div className="border-t-2 border-white/50 pt-3">
                      <p className="text-xl font-bold text-gray-600">{dialogue.ar}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quiz Button - Appears after all dialogues */}
            {(selectedSituation as any).quiz && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (selectedSituation.dialogues.length) * 0.1 + 0.2 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={() => setShowQuiz(true)}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <BookOpen size={24} />
                  <span className="text-lg">اختبر معلوماتك</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Situations Grid
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pb-32">
      {/* Hero Header */}
      <header className="relative pt-20 pb-24 px-6 overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-black uppercase tracking-wider mb-8"
          >
            <Volume2 size={16} />
            <span>تدرب على المحادثة</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            المحادثة <span className="italic">الصوتية</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            تدرب على المحادثات الحقيقية مع النطق الصحيح والترجمة الفورية
          </motion.p>

          {/* Voice Info */}

        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-8xl opacity-10">
          <Mic className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-10">
          <MessageCircle className="w-24 h-24 text-purple-400" />
        </div>
      </header>

      {/* Situations Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {!situations || situations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 font-bold">جاري تحميل المحادثات...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((situation, index) => {
              const colors = getColorClasses(situation.color);
              const IconComponent = getIconComponent(situation.icon);
              
              return (
                <motion.div
                  key={situation.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => loadSituationDetails(situation)}
                  className="group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${colors.light} border-3 ${colors.border} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}>
                    {/* Icon */}
                    <div className={`w-20 h-20 ${colors.badge} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-12 h-12 ${colors.text}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-black ${colors.text} mb-2`}>
                      {situation.title}
                    </h3>
                    <p className="text-gray-600 font-bold mb-4">{situation.titleEn}</p>

                    {/* Info */}
                    <div className="flex items-center justify-between">
                      <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-black uppercase`}>
                        {situation.difficulty === 'easy' ? 'سهل' : situation.difficulty === 'medium' ? 'متوسط' : 'صعب'}
                      </span>
                      <span className="text-gray-500 font-bold text-sm">
                        {situation.dialogues?.length || 0} جملة
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className={`mt-4 flex items-center gap-2 ${colors.text} font-black group-hover:gap-4 transition-all`}>
                      <span>ابدأ التدريب</span>
                      <span>←</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
