import { FC, useState } from 'react';
import { Volume2, Search, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const phrasesData = [
  // التحيات والوداع
  { id: 1, category: 'التحيات', fr: 'Bonjour', ar: 'صباح الخير', pron: 'بونجور' },
  { id: 2, category: 'التحيات', fr: 'Bonsoir', ar: 'مساء الخير', pron: 'بونسوار' },
  { id: 3, category: 'التحيات', fr: 'Salut', ar: 'مرحباً / وداعاً (بين الأصدقاء)', pron: 'سالو' },
  { id: 4, category: 'التحيات', fr: 'Au revoir', ar: 'إلى اللقاء', pron: 'أو روفوار' },
  { id: 5, category: 'التحيات', fr: 'À bientôt', ar: 'أراك قريباً', pron: 'أ بيان تو' },
  { id: 6, category: 'التحيات', fr: 'Bonne nuit', ar: 'تصبح على خير', pron: 'بون نوي' },
  { id: 7, category: 'التحيات', fr: 'À demain', ar: 'أراك غداً', pron: 'أ دُمان' },
  { id: 8, category: 'التحيات', fr: 'Coucou', ar: 'أهلاً (للأقرباء)', pron: 'كوكو' },

  // الأساسيات
  { id: 9, category: 'الأساسيات', fr: 'Oui', ar: 'نعم', pron: 'وي' },
  { id: 10, category: 'الأساسيات', fr: 'Non', ar: 'لا', pron: 'نون' },
  { id: 11, category: 'الأساسيات', fr: 'S\'il vous plaît', ar: 'من فضلك (للاحترام)', pron: 'سيل فو بليه' },
  { id: 12, category: 'الأساسيات', fr: 'S\'il te plaît', ar: 'من فضلك (للأصدقاء)', pron: 'سيل تو بليه' },
  { id: 13, category: 'الأساسيات', fr: 'Merci', ar: 'شكراً', pron: 'ميرسي' },
  { id: 14, category: 'الأساسيات', fr: 'Merci beaucoup', ar: 'شكراً جزيلاً', pron: 'ميرسي بوكو' },
  { id: 15, category: 'الأساسيات', fr: 'De rien', ar: 'عفواً / لا شكر على واجب', pron: 'دو ريان' },
  { id: 16, category: 'الأساسيات', fr: 'Excusez-moi', ar: 'معذرة', pron: 'إكسكوزي موا' },
  { id: 17, category: 'الأساسيات', fr: 'Pardon', ar: 'عفواً / المعذرة', pron: 'باردون' },
  { id: 18, category: 'الأساسيات', fr: 'Désolé', ar: 'آسف', pron: 'ديزوليه' },
  { id: 19, category: 'الأساسيات', fr: 'D\'accord', ar: 'حسناً / موافق', pron: 'داكور' },
  { id: 20, category: 'الأساسيات', fr: 'Bien sûr', ar: 'بالتأكيد', pron: 'بيان سور' },
  
  // التعارف
  { id: 21, category: 'التعارف', fr: 'Comment vous appelez-vous ?', ar: 'ما اسم حضرتك؟', pron: 'كومون فو زابليه فو' },
  { id: 22, category: 'التعارف', fr: 'Comment tu t\'appelles ?', ar: 'ما اسمك؟', pron: 'كومون تو تابيل' },
  { id: 23, category: 'التعارف', fr: 'Je m\'appelle...', ar: 'اسمي...', pron: 'جو مابيل' },
  { id: 24, category: 'التعارف', fr: 'Enchanté', ar: 'تشرفنا', pron: 'أونشانتيه' },
  { id: 25, category: 'التعارف', fr: 'Comment allez-vous ?', ar: 'كيف حالك؟ (للاحترام)', pron: 'كومون تاليه فو' },
  { id: 26, category: 'التعارف', fr: 'Comment ça va ?', ar: 'كيف الحال؟', pron: 'كومون سا فا' },
  { id: 27, category: 'التعارف', fr: 'Ça va bien, merci', ar: 'بخير، شكراً', pron: 'سا فا بيان ميرسي' },
  { id: 28, category: 'التعارف', fr: 'Je vais bien', ar: 'أنا بخير', pron: 'جو في بيان' },
  { id: 29, category: 'التعارف', fr: 'Et vous ?', ar: 'وحضرتك؟', pron: 'إي فو' },
  { id: 30, category: 'التعارف', fr: 'Et toi ?', ar: 'وأنت؟', pron: 'إي توا' },
  { id: 31, category: 'التعارف', fr: 'Quel âge as-tu ?', ar: 'كم عمرك؟', pron: 'كيل آج أ تو' },
  { id: 32, category: 'التعارف', fr: 'J\'ai ... ans', ar: 'عمري ... سنة', pron: 'جيه ... أون' },

  // في الشارع والمواصلات
  { id: 33, category: 'في الشارع', fr: 'Où est...', ar: 'أين...', pron: 'أو إي' },
  { id: 34, category: 'في الشارع', fr: 'Où sont les toilettes ?', ar: 'أين الحمام؟', pron: 'أو سون ليه تواليت' },
  { id: 35, category: 'في الشارع', fr: 'Je suis perdu', ar: 'أنا تائه (للمذكر)', pron: 'جو سوي بيردو' },
  { id: 36, category: 'في الشارع', fr: 'Pouvez-vous m\'aider ?', ar: 'هل يمكنك مساعدتي؟', pron: 'بوفيه فو ميديه' },
  { id: 37, category: 'في الشارع', fr: 'Je cherche...', ar: 'أبحث عن...', pron: 'جو شيرش' },
  { id: 38, category: 'في الشارع', fr: 'Tournez à droite', ar: 'اتجه يميناً', pron: 'تورنيه أ دروات' },
  { id: 39, category: 'في الشارع', fr: 'Tournez à gauche', ar: 'اتجه يساراً', pron: 'تورنيه أ جوش' },
  { id: 40, category: 'في الشارع', fr: 'Allez tout droit', ar: 'اذهب إلى الأمام مباشرة', pron: 'اليه تو دروا' },
  { id: 41, category: 'في الشارع', fr: 'Où est la station de métro ?', ar: 'أين محطة المترو؟', pron: 'أو إي لا ستاسيون دو ميترو' },
  { id: 42, category: 'في الشارع', fr: 'Je voudrais un billet', ar: 'أريد تذكرة', pron: 'جو فودريه أون بييه' },

  // الفهم والتواصل
  { id: 43, category: 'التواصل', fr: 'Je ne comprends pas', ar: 'أنا لا أفهم', pron: 'جو نو كومبرون با' },
  { id: 44, category: 'التواصل', fr: 'Pouvez-vous répéter ?', ar: 'هل يمكنك الإعادة؟', pron: 'بوفيه فو ريبيتيه' },
  { id: 45, category: 'التواصل', fr: 'Parlez-vous arabe ?', ar: 'هل تتحدث العربية؟', pron: 'بارليه فو آراب' },
  { id: 46, category: 'التواصل', fr: 'Parlez plus lentement', ar: 'تحدث ببطء أكثر', pron: 'بارليه بلو لونتمون' },
  { id: 47, category: 'التواصل', fr: 'Que veut dire ça ?', ar: 'ماذا يعني هذا؟', pron: 'كو فو دير سا' },

  // الطعام والمطعم
  { id: 48, category: 'الطعام', fr: 'J\'ai faim', ar: 'أنا جائع', pron: 'جيه فان' },
  { id: 49, category: 'الطعام', fr: 'J\'ai soif', ar: 'أنا عطشان', pron: 'جيه سواف' },
  { id: 50, category: 'الطعام', fr: 'Je voudrais...', ar: 'أريد (بأدب)...', pron: 'جو فودريه' },
  { id: 51, category: 'الطعام', fr: 'La carte, s\'il vous plaît', ar: 'قائمة الطعام، من فضلك', pron: 'لا كارت سيل فو بليه' },
  { id: 52, category: 'الطعام', fr: 'L\'addition, s\'il vous plaît', ar: 'الفاتورة، من فضلك', pron: 'لاديسيون سيل فو بليه' },
  { id: 53, category: 'الطعام', fr: 'C\'est délicieux', ar: 'إنه لذيذ', pron: 'سيه ديليسو' },
  { id: 54, category: 'الطعام', fr: 'De l\'eau, s\'il vous plaît', ar: 'ماء، من فضلك', pron: 'دو لو سيل فو بليه' },
  { id: 55, category: 'الطعام', fr: 'Bon appétit', ar: 'بالهناء والشفاء', pron: 'بون أبيتي' },

  // التسوق
  { id: 56, category: 'التسوق', fr: 'Combien ça coûte ?', ar: 'بكم هذا؟', pron: 'كومبيان سا كوت' },
  { id: 57, category: 'التسوق', fr: 'C\'est trop cher', ar: 'هذا غالي جداً', pron: 'سيه ترو شير' },
  { id: 58, category: 'التسوق', fr: 'Je regarde seulement', ar: 'أنا القي نظرة فقط', pron: 'جو روجارد سولمون' },
  { id: 59, category: 'التسوق', fr: 'Je vais le prendre', ar: 'سآخذه', pron: 'جو في لو بروندر' },
  { id: 60, category: 'التسوق', fr: 'Avez-vous une autre couleur ?', ar: 'هل لديكم لون آخر؟', pron: 'أفيه فو أون أوتر كولور' }
];

export const SpeakingPhrases: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const categories = ['الكل', ...Array.from(new Set(phrasesData.map(p => p.category)))];

  const filtered = phrasesData.filter(p => {
    const matchSearch = p.fr.toLowerCase().includes(searchTerm.toLowerCase()) || p.ar.includes(searchTerm);
    const matchCat = selectedCategory === 'الكل' || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.8; // slightly slower for beginners
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="pb-24 pt-8 px-4 md:px-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm shadow-blue-200">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">جمل المحادثة الأساسية</h1>
        <p className="text-slate-600 text-lg max-w-2xl">أكثر الجمل الفرنسية استخداماً في الحياة اليومية مع النطق الصحيح. تدرب عليها لتتحدث بطلاقة.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-4 md:p-6 mb-8 sticky top-20 z-10 transition-all">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2 snap-x snap-mandatory">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`shrink-0 px-6 py-2.5 rounded-full text-base font-semibold transition-all snap-center ${
                selectedCategory === c
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        
        <div className="relative mt-2">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
          <input 
            type="text" 
            placeholder="ابحث عن جملة بالفرنسية أو العربية..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-6 pr-14 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((phrase, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 % 0.3 }} // Fast stagger
              key={phrase.id} 
              className="bg-white border text-right border-slate-100 shadow-sm rounded-3xl p-6 hover:border-blue-300 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-300 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                  {phrase.category}
                </span>
                <button 
                  onClick={() => playAudio(phrase.fr)}
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm active:scale-95"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight" dir="ltr">{phrase.fr}</h3>
              <p className="text-slate-600 font-medium mb-3">{phrase.ar}</p>
              <div className="mt-auto">
                <p className="text-sm text-slate-500 bg-slate-50 border border-slate-100 inline-block px-3 py-1.5 rounded-lg font-mono">
                  {phrase.pron}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-4">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">لا توجد جمل مطابقة</h3>
            <p className="text-slate-500">جرب البحث بكلمة أخرى بالعربية أو الفرنسية.</p>
          </div>
        )}
      </div>
    </div>
  );
};
