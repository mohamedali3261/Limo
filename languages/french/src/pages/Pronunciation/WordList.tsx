import { FC, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, Volume1, PlayCircle, StopCircle, User, UserCheck } from 'lucide-react';
import { Card } from '../../components/ui/Card';

interface DialogueLine {
  id: number;
  speaker: 'A' | 'B';
  fr: string;
  ar: string;
  phonetic: string;
}

interface Conversation {
  id: string;
  name: string;
  dialogues: DialogueLine[];
}

const conversations: Conversation[] = [
  { 
    id: 'intro', 
    name: 'التعارف والمقابلة', 
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Bonjour !', ar: 'مرحباً!', phonetic: 'بونجور!' },
      { id: 2, speaker: 'B', fr: 'Salut ! Comment tu t\'appelles ?', ar: 'أهلاً! ما اسمك؟', phonetic: 'سالو! كومون تو تابيل؟' },
      { id: 3, speaker: 'A', fr: 'Je m\'appelle Ali. Et toi ?', ar: 'اسمي علي. وأنت؟', phonetic: 'جو مابيل علي. إي توا؟' },
      { id: 4, speaker: 'B', fr: 'Moi, c\'est Sara. Enchantée !', ar: 'أنا سارة. تشرفنا!', phonetic: 'موا، سي سارة. أونشانتيه!' },
      { id: 5, speaker: 'A', fr: 'Enchanté ! Comment ça va ?', ar: 'تشرفنا! كيف حالك؟', phonetic: 'أونشانتيه! كومون سا فا؟' },
      { id: 6, speaker: 'B', fr: 'Ça va très bien, merci.', ar: 'أنا بخير جداً، شكراً.', phonetic: 'سا فا تري بيان، ميرسي.' }
    ]
  },
  {
    id: 'cafe',
    name: 'في المقهى',
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Bonjour !', ar: 'صباح الخير!', phonetic: 'بونجور!' },
      { id: 2, speaker: 'B', fr: 'Bonjour ! Que désirez-vous ?', ar: 'صباح الخير! ماذا تريد؟', phonetic: 'بونجور! كو ديزيريه فو؟' },
      { id: 3, speaker: 'A', fr: 'Je voudrais un café, s\'il vous plaît.', ar: 'أريد قهوة، من فضلك.', phonetic: 'جو فودريه أون كافيه، سيل فو بليه.' },
      { id: 4, speaker: 'B', fr: 'Très bien. Et avec ça ?', ar: 'جيد جداً. وهل تريد شيئاً آخر؟', phonetic: 'تري بيان. إي أفيك سا؟' },
      { id: 5, speaker: 'A', fr: 'Un croissant, s\'il vous plaît.', ar: 'كرواسون، من فضلك.', phonetic: 'أون كرواسون، سيل فو بليه.' },
      { id: 6, speaker: 'B', fr: 'Voilà. Ça fait trois euros.', ar: 'تفضل. الحساب ثلاثة يورو.', phonetic: 'فوالا. سا في تروا زورو.' },
    ]
  },
  {
    id: 'directions',
    name: 'طلب الاتجاهات',
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Excusez-moi, où est la gare ?', ar: 'معذرة، أين محطة القطار؟', phonetic: 'إكسكوزي موا، أو إي لا جار؟' },
      { id: 2, speaker: 'B', fr: 'C\'est tout droit, puis à gauche.', ar: 'امش للأمام مباشرة، ثم يساراً.', phonetic: 'سي تو دروا، بوي أ جوش.' },
      { id: 3, speaker: 'A', fr: 'Est-ce que c\'est loin ?', ar: 'هل هي بعيدة؟', phonetic: 'إس كو سي لوان؟' },
      { id: 4, speaker: 'B', fr: 'Non, à cinq minutes d\'ici.', ar: 'لا، على بعد خمس دقائق من هنا.', phonetic: 'نون، أ سانك مينوت ديسي.' },
      { id: 5, speaker: 'A', fr: 'Merci beaucoup !', ar: 'شكراً جزيلاً!', phonetic: 'ميرسي بوكو!' },
      { id: 6, speaker: 'B', fr: 'De rien, bonne journée !', ar: 'عفواً، طاب يومك!', phonetic: 'دو ريان، بون جورنيه!' },
    ]
  },
  {
    id: 'shopping',
    name: 'في المتجر',
    dialogues: [
      { id: 1, speaker: 'B', fr: 'Bonjour, je peux vous aider ?', ar: 'مرحباً، هل يمكنني مساعدتك؟', phonetic: 'بونجور، جو بو فو زيديه؟' },
      { id: 2, speaker: 'A', fr: 'Oui, je cherche un t-shirt.', ar: 'نعم، أبحث عن قميص.', phonetic: 'وي، جو شيرش أون تي شيرت.' },
      { id: 3, speaker: 'B', fr: 'Quelle est votre taille ?', ar: 'ما هو مقاسك؟', phonetic: 'كيل إي فوتر تاي؟' },
      { id: 4, speaker: 'A', fr: 'Taille M, s\'il vous plaît.', ar: 'مقاس M، من فضلك.', phonetic: 'تاي إم، سيل فو بليه.' },
      { id: 5, speaker: 'B', fr: 'Voici. Vous voulez l\'essayer ?', ar: 'تفضل. هل تريد تجربته؟', phonetic: 'فواسي. فو فوليه لساييه؟' },
      { id: 6, speaker: 'A', fr: 'Oui, où sont les cabines ?', ar: 'نعم، أين غرف القياس؟', phonetic: 'وي، أو سون لي كابين؟' },
    ]
  },
  {
    id: 'doctor',
    name: 'عند الطبيب',
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Bonjour docteur.', ar: 'صباح الخير طبيب.', phonetic: 'بونجور دوكتور.' },
      { id: 2, speaker: 'B', fr: 'Bonjour. Quel est le problème ?', ar: 'أهلاً. ما المشكلة؟', phonetic: 'بونجور. كيل إي لو بروبليم؟' },
      { id: 3, speaker: 'A', fr: 'Je suis malade. J\'ai mal à la tête.', ar: 'أنا مريض. أعاني من صداع.', phonetic: 'جو سوي مالاد. جيه مال أ لا تيت.' },
      { id: 4, speaker: 'B', fr: 'Avez-vous de la fièvre ?', ar: 'هل تعاني من الحمى؟', phonetic: 'أفيه فو دو لا فييفر؟' },
      { id: 5, speaker: 'A', fr: 'Oui, un peu.', ar: 'نعم، قليلاً.', phonetic: 'وي، أون بو.' },
      { id: 6, speaker: 'B', fr: 'Reposez-vous bien et prenez ce médicament.', ar: 'ارتح جيداً وخذ هذا الدواء.', phonetic: 'روبوزيه فو بيان إي برونيه سو ميديكامون.' },
    ]
  },
  {
    id: 'hotel',
    name: 'في الفندق',
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Bonjour, j\'ai une réservation à mon nom.', ar: 'مرحباً، لدي حجز باسمي.', phonetic: 'بونجور، جيه أون ريزيرفاسيون أ مون نوم.' },
      { id: 2, speaker: 'B', fr: 'Bonjour monsieur. Quel est votre nom ?', ar: 'مرحباً سيدي. ما هو اسمك؟', phonetic: 'بونجور مسيو. كيل إي فوتر نوم؟' },
      { id: 3, speaker: 'A', fr: 'Je m\'appelle Ali.', ar: 'اسمي علي.', phonetic: 'جو مابيل علي.' },
      { id: 4, speaker: 'B', fr: 'Ah oui, une chambre pour deux nuits.', ar: 'آه نعم، غرفة لليلتين.', phonetic: 'آ وي، أون شامبر بور دو نوي.' },
      { id: 5, speaker: 'A', fr: 'C\'est exact. Le petit-déjeuner est inclus ?', ar: 'هذا صحيح. هل الإفطار مشمول؟', phonetic: 'سيه إكزاكت. لو بوتي ديجونيه إي تانكلو؟' },
      { id: 6, speaker: 'B', fr: 'Oui, de 7h à 10h. Voici votre clé.', ar: 'نعم، من السابعة إلى العاشرة. إليك مفتاحك.', phonetic: 'وي، دو سيت أور أ ديز أور. فواسي فوتر كليه.' },
      { id: 7, speaker: 'A', fr: 'Merci. C\'est à quel étage ?', ar: 'شكراً. في أي طابق؟', phonetic: 'ميرسي. سيه أ كيل إيتاج؟' },
      { id: 8, speaker: 'B', fr: 'Au troisième étage. L\'ascenseur est là.', ar: 'في الطابق الثالث. المصعد هناك.', phonetic: 'أو تروازيام إيتاج. لاسونسور إي لا.' },
    ]
  },
  {
    id: 'restaurant2',
    name: 'في المطعم (محادثة كاملة)',
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Bonsoir, une table pour deux personnes s\'il vous plaît.', ar: 'مساء الخير، طاولة لشخصين من فضلك.', phonetic: 'بونسوار، أون تابل بور دو بيرسون سيل فو بليه.' },
      { id: 2, speaker: 'B', fr: 'Bonsoir. Par ici, s\'il vous plaît. Voici le menu.', ar: 'مساء الخير. من هنا من فضلك. إليك قائمة الطعام.', phonetic: 'بونسوار. بار إيسي سيل فو بليه. فواسي لو مونو.' },
      { id: 3, speaker: 'A', fr: 'Merci. Que recommandez-vous aujourd\'hui ?', ar: 'شكراً. بماذا تنصح اليوم؟', phonetic: 'ميرسي. كو روكومانديه فو أوجوردوي؟' },
      { id: 4, speaker: 'B', fr: 'Le plat du jour est excellent : poulet rôti avec des légumes.', ar: 'طبق اليوم ممتاز: دجاج مشوي مع الخضار.', phonetic: 'لو بلا دو جور إي تيكسيلون : بوليه روتي أفيك دي ليجوم.' },
      { id: 5, speaker: 'A', fr: 'Très bien, je vais prendre ça.', ar: 'حسناً جداً، سآخذ هذا.', phonetic: 'تري بيان، جو في بروندر سا.' },
      { id: 6, speaker: 'B', fr: 'Et comme boisson ?', ar: 'وكمشروب؟', phonetic: 'إي كوم بواسون؟' },
      { id: 7, speaker: 'A', fr: 'Une bouteille d\'eau minérale, s\'il vous plaît.', ar: 'زجاجة مياه معدنية من فضلك.', phonetic: 'أون بوتي دو مينيرال، سيل فو بليه.' },
      { id: 8, speaker: 'B', fr: 'C\'est noté. Je vous apporte ça tout de suite.', ar: 'سُجل. سأحضر لك هذا فوراً.', phonetic: 'سيه نوتيه. جو فو زابورت سا تو دو سويت.' },
    ]
  },
  {
    id: 'airport',
    name: 'في المطار',
    dialogues: [
      { id: 1, speaker: 'A', fr: 'Bonjour, voici mon passeport et mon billet.', ar: 'مرحباً، إليك جواز سفري وتذكرتي.', phonetic: 'بونجور، فواسي مون باسبور إي مون بييه.' },
      { id: 2, speaker: 'B', fr: 'Merci. Vous allez à Paris, c\'est bien ça ?', ar: 'شكراً. أنت ذاهب إلى باريس، أليس كذلك؟', phonetic: 'ميرسي. فو زاليه أ باري، سي بيان سا؟' },
      { id: 3, speaker: 'A', fr: 'Oui, exactement.', ar: 'نعم، بالضبط.', phonetic: 'وي، إكزاكتمون.' },
      { id: 4, speaker: 'B', fr: 'Avez-vous des bagages à enregistrer ?', ar: 'هل لديك حقائب لتسجيلها؟', phonetic: 'أفيه فو دي باجاج أ أونريجيستريه؟' },
      { id: 5, speaker: 'A', fr: 'Juste cette valise.', ar: 'فقط هذه الحقيبة.', phonetic: 'جوست سيت فاليز.' },
      { id: 6, speaker: 'B', fr: 'Parfait. Voici votre carte d\'embarquement.', ar: 'ممتاز. إليك بطاقة الصعود.', phonetic: 'بارفيه. فواسي فوتر كارت دومباركومون.' },
      { id: 7, speaker: 'A', fr: 'À quelle heure est l\'embarquement ?', ar: 'في أي ساعة يتم الصعود إلى الطائرة؟', phonetic: 'أ كيل أور إي لومباركومون؟' },
      { id: 8, speaker: 'B', fr: 'À 14h30, porte B12. Bon voyage !', ar: 'الساعة 14:30، البوابة B12. رحلة سعيدة!', phonetic: 'أ كيتورز أور ترونت، بورت بي دوز. بون فوياج!' },
    ]
  }
];

export const WordList: FC = () => {
  const [activeCategory, setActiveCategory] = useState(conversations[0].id);
  const [playingLineId, setPlayingLineId] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [speechSynthesisAvailable, setSpeechSynthesisAvailable] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSpeechSynthesisAvailable(false);
      return;
    }

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      const frVoices = allVoices.filter(v => v.lang.startsWith('fr'));
      setVoices(frVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playUtterance = (text: string, speaker: 'A' | 'B'): Promise<void> => {
    return new Promise((resolve) => {
      if (!speechSynthesisAvailable) {
        resolve();
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.85; // slightly slower
      
      // Simulate two distinct voices
      if (voices.length > 1) {
        // Find a male and a female voice if possible, or just two different voices
        utterance.voice = speaker === 'A' ? voices[0] : voices[voices.length - 1];
      } else {
        // Fallback to pitch shifting if only one voice available
        utterance.pitch = speaker === 'A' ? 1.0 : 1.4;
      }
      
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      
      window.speechSynthesis.speak(utterance);
    });
  };

  const playLine = async (line: DialogueLine) => {
    window.speechSynthesis.cancel();
    setIsPlayingAll(false);
    setPlayingLineId(line.id);
    await playUtterance(line.fr, line.speaker);
    setPlayingLineId(null);
  };

  const playConversation = async () => {
    if (isPlayingAll) {
      window.speechSynthesis.cancel();
      setIsPlayingAll(false);
      setPlayingLineId(null);
      return;
    }

    const conversation = conversations.find(c => c.id === activeCategory);
    if (!conversation) return;

    window.speechSynthesis.cancel();
    setIsPlayingAll(true);

    for (const line of conversation.dialogues) {
      setPlayingLineId(line.id);
      await playUtterance(line.fr, line.speaker);
      // Wait a little bit between lines
      await new Promise(r => setTimeout(r, 600));
    }

    setPlayingLineId(null);
    setIsPlayingAll(false);
  };

  const currentConversation = conversations.find(c => c.id === activeCategory);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
      <Card className="w-full lg:w-72 shrink-0 p-4 lg:sticky lg:top-24 overflow-x-auto">
        <h3 className="font-bold text-slate-800 mb-4 px-2 hidden lg:block">المواقف والمحادثات</h3>
        <div className="flex lg:flex-col gap-2 p-1">
          {conversations.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                window.speechSynthesis.cancel();
                setIsPlayingAll(false);
                setPlayingLineId(null);
              }}
              className={`text-right whitespace-nowrap px-4 py-3 rounded-xl lg:w-full transition-colors ${
                activeCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex-1 w-full flex flex-col gap-4">
        {!speechSynthesisAvailable && (
          <div className="p-4 bg-amber-50 text-amber-800 rounded-xl text-sm mb-2">
            عذراً، خاصية النطق غير مدعومة في متصفحك الحالي.
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">{currentConversation?.name}</h2>
          <button 
            onClick={playConversation}
            className={`w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
              isPlayingAll 
                ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {isPlayingAll ? (
              <>
                <StopCircle className="w-5 h-5" />
                <span>إيقاف المحادثة</span>
              </>
            ) : (
              <>
                <PlayCircle className="w-5 h-5" />
                <span>تشغيل المحادثة</span>
              </>
            )}
          </button>
        </div>
        
        <div className="bg-slate-50/50 p-4 md:p-6 rounded-3xl grid grid-cols-1 gap-6 md:gap-4">
          {currentConversation?.dialogues.map((line, idx) => {
            const isA = line.speaker === 'A';
            const isActive = playingLineId === line.id;
            
            return (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex w-full ${isA ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[90%] md:max-w-[75%] ${isA ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar */}
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm ${
                    isA ? 'bg-blue-500 text-white' : 'bg-emerald-500 text-white'
                  }`}>
                    {isA ? <User className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />}
                  </div>

                  {/* Message Bubble */}
                  <div className={`relative p-5 rounded-2xl shadow-sm border transition-all ${
                    isA 
                      ? 'bg-blue-50 border-blue-100 rounded-tr-none ' + (isActive ? 'ring-2 ring-blue-400' : '') 
                      : 'bg-emerald-50 border-emerald-100 rounded-tl-none ' + (isActive ? 'ring-2 ring-emerald-400' : '')
                  }`}>
                    
                    <div className="flex items-start justify-between gap-6 mb-3" dir="ltr">
                      <p className={`text-xl md:text-2xl font-bold ${isA ? 'text-blue-900' : 'text-emerald-900'}`}>
                        {line.fr}
                      </p>
                      <button
                        onClick={() => playLine(line)}
                        disabled={!speechSynthesisAvailable}
                        className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all shadow-sm ${
                          isActive 
                            ? (isA ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-emerald-600 text-white shadow-emerald-200')
                            : 'bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                        }`}
                      >
                        {isActive ? (
                          <Volume2 className="w-5 h-5 animate-pulse" />
                        ) : (
                          <Volume1 className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <div className={`text-right border-t pt-3 ${isA ? 'border-blue-200/50' : 'border-emerald-200/50'}`}>
                      <p className={`font-medium mb-2 ${isA ? 'text-blue-800/80' : 'text-emerald-800/80'}`}>{line.ar}</p>
                      <p className="text-sm text-slate-500 bg-white/60 inline-block px-3 py-1 rounded-lg border border-white/40">
                        {line.phonetic}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


