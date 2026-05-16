import { motion } from 'motion/react';
import { Smile, Music, Star, Shapes, Image as ImageIcon, Apple, Hand, Shirt, Car, Users, School, Home, Leaf, Pizza, Briefcase, Heart, Cloud, Bug, Hexagon, Rocket, Clock, Flag, Trophy, Edit3, Gamepad2, Link2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KidsHub() {
  const sections = [
    {
      id: 'alphabet',
      title: 'الحروف التفاعلية',
      description: 'تعلم الحروف مع الصور والأصوات',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: 'bg-yellow-100',
      action: 'العب الآن',
      path: '/kids/alphabet'
    },
    {
      id: 'numbers',
      title: 'الأرقام والعد',
      description: 'تعلم الأرقام بالألوان والعد بصوت واضح',
      icon: <Shapes className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-100',
      action: 'العب الآن',
      path: '/kids/numbers'
    },
    {
      id: 'colors',
      title: 'عالم الألوان',
      description: 'اضغط على اللون لتسمع اسمه بالإنجليزية',
      icon: <ImageIcon className="w-8 h-8 text-pink-500" />,
      color: 'bg-pink-100',
      action: 'العب الآن',
      path: '/kids/colors'
    },
    {
      id: 'animals',
      title: 'الحيوانات وأصواتها',
      description: 'تعرف على الحيوانات وإصدار أصواتها',
      icon: <Music className="w-8 h-8 text-green-500" />,
      color: 'bg-green-100',
      action: 'العب الآن',
      path: '/kids/animals'
    },
    {
      id: 'fruits',
      title: 'الفواكه والخضروات',
      description: 'أسماء الفواكه والخضروات اللذيذة',
      icon: <Apple className="w-8 h-8 text-red-500" />,
      color: 'bg-red-100',
      action: 'العب الآن',
      path: '/kids/fruits'
    },
    {
      id: 'body-parts',
      title: 'أجزاء الجسم',
      description: 'تعرف على أجزاء جسمك',
      icon: <Hand className="w-8 h-8 text-amber-500" />,
      color: 'bg-amber-100',
      action: 'العب الآن',
      path: '/kids/body-parts'
    },
    {
      id: 'clothes',
      title: 'الملابس',
      description: 'ماذا نرتدي؟',
      icon: <Shirt className="w-8 h-8 text-indigo-500" />,
      color: 'bg-indigo-100',
      action: 'العب الآن',
      path: '/kids/clothes'
    },
    {
      id: 'vehicles',
      title: 'وسائل النقل',
      description: 'السيارات، القطارات، والطائرات',
      icon: <Car className="w-8 h-8 text-teal-500" />,
      color: 'bg-teal-100',
      action: 'العب الآن',
      path: '/kids/vehicles'
    },
    {
      id: 'family',
      title: 'العائلة',
      description: 'أفراد العائلة',
      icon: <Users className="w-8 h-8 text-rose-500" />,
      color: 'bg-rose-100',
      action: 'العب الآن',
      path: '/kids/family'
    },
    {
      id: 'school',
      title: 'المدرسة',
      description: 'أدوات المدرسة والصف',
      icon: <School className="w-8 h-8 text-indigo-500" />,
      color: 'bg-indigo-100',
      action: 'العب الآن',
      path: '/kids/school'
    },
    {
      id: 'house',
      title: 'أشياء في المنزل',
      description: 'غرف المنزل والأثاث',
      icon: <Home className="w-8 h-8 text-amber-500" />,
      color: 'bg-amber-100',
      action: 'العب الآن',
      path: '/kids/house'
    },
    {
      id: 'nature',
      title: 'الطبيعة',
      description: 'الأشجار، الزهور، والسماء',
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      color: 'bg-emerald-100',
      action: 'العب الآن',
      path: '/kids/nature'
    },
    {
      id: 'food',
      title: 'الطعام والشراب',
      description: 'بيتزا، تفاح، والمزيد',
      icon: <Pizza className="w-8 h-8 text-orange-500" />,
      color: 'bg-orange-100',
      action: 'العب الآن',
      path: '/kids/food'
    },
    {
      id: 'occupations',
      title: 'المهن والوظائف',
      description: 'ماذا تريد أن تصبح؟',
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-100',
      action: 'العب الآن',
      path: '/kids/occupations'
    },
    {
      id: 'emotions',
      title: 'المشاعر',
      description: 'سعيد، حزين، وغاضب',
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      color: 'bg-pink-100',
      action: 'العب الآن',
      path: '/kids/emotions'
    },
    {
      id: 'shapes',
      title: 'الأشكال',
      description: 'دائرة، مربع، ومثلث',
      icon: <Hexagon className="w-8 h-8 text-fuchsia-500" />,
      color: 'bg-fuchsia-100',
      action: 'العب الآن',
      path: '/kids/shapes'
    },
    {
      id: 'weather',
      title: 'الطقس',
      description: 'مشمس، ممطر، وغائم',
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      color: 'bg-sky-100',
      action: 'العب الآن',
      path: '/kids/weather'
    },
    {
      id: 'bugs',
      title: 'الحشرات',
      description: 'فراشة، نحلة، وغيرها',
      icon: <Bug className="w-8 h-8 text-lime-500" />,
      color: 'bg-lime-100',
      action: 'العب الآن',
      path: '/kids/bugs'
    },
    {
      id: 'instruments',
      title: 'الآلات الموسيقية',
      description: 'بيانو، جيتار...',
      icon: <Music className="w-8 h-8 text-violet-500" />,
      color: 'bg-violet-100',
      action: 'العب الآن',
      path: '/kids/instruments'
    },
    {
      id: 'sports',
      title: 'الرياضات',
      description: 'كرة قدم، تنس...',
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      color: 'bg-orange-100',
      action: 'العب الآن',
      path: '/kids/sports'
    },
    {
      id: 'space',
      title: 'الفضاء',
      description: 'الأرض، الشمس...',
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      color: 'bg-indigo-100',
      action: 'العب الآن',
      path: '/kids/space'
    },
    {
      id: 'routine',
      title: 'الروتين اليومي',
      description: 'أستيقظ، أستحم...',
      icon: <Clock className="w-8 h-8 text-sky-500" />,
      color: 'bg-sky-100',
      action: 'العب الآن',
      path: '/kids/routine'
    },
    {
      id: 'countries',
      title: 'الدول والأعلام',
      description: 'مصر، السعودية...',
      icon: <Flag className="w-8 h-8 text-red-500" />,
      color: 'bg-red-100',
      action: 'العب الآن',
      path: '/kids/countries'
    }
  ];

  const games = [
    {
      id: 'memory-game',
      title: 'لعبة الذاكرة',
      description: 'طابق الصور والكلمات',
      icon: <Gamepad2 className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      textColor: 'text-white',
      path: '/kids/games/memory'
    },
    {
      id: 'matching-game',
      title: 'لعبة التوصيل',
      description: 'وصل الكلمة بالصورة المناسبة',
      icon: <Link2 className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
      textColor: 'text-white',
      path: '/kids/games/matching'
    },
    {
      id: 'spelling-game',
      title: 'تجميع الحروف',
      description: 'رتب الحروف لتكون كلمة',
      icon: <Shapes className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-emerald-400 to-teal-500',
      textColor: 'text-white',
      path: '/kids/games/spelling'
    },
    {
      id: 'drawing-game',
      title: 'الرسم والتلوين',
      description: 'ارسم ولون بحرية',
      icon: <Edit3 className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-pink-400 to-rose-500',
      textColor: 'text-white',
      path: '/kids/games/drawing'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-4"
        >
          <Smile size={48} />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          عالم الأطفال <span className="text-primary text-3xl">✨</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          مكان ممتع وآمن لتعلم اللغة الإنجليزية من خلال اللعب، الأصوات، والألوان!
        </p>
      </div>

      <div className="mt-16 mb-8 text-center space-y-2">
        <h2 className="text-3xl font-black text-gray-900 flex items-center justify-center gap-3">
          الألعاب التفاعلية
          <Gamepad2 className="text-purple-600" size={32} />
        </h2>
        <p className="text-gray-500">العب وتعلم في نفس الوقت!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, idx) => (
          <motion.div
            key={game.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={game.path} className={`group block p-8 rounded-[2rem] ${game.color} hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity"></div>
              <div className="flex gap-6 items-center relative z-10">
                 <div className="p-4 bg-white/20 rounded-3xl backdrop-blur-sm">
                   {game.icon}
                 </div>
                 <div className={game.textColor}>
                   <h3 className="text-2xl font-black mb-2">{game.title}</h3>
                   <p className="opacity-90">{game.description}</p>
                 </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 mb-8 text-center space-y-2">
        <h2 className="text-3xl font-black text-gray-900 flex items-center justify-center gap-3">
          بطاقات التعلم الممتعة
          <BookOpen className="text-blue-600" size={32} />
        </h2>
        <p className="text-gray-500">اختر موضوعاً لنتعلمه معاً!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {sections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={section.path} className="group block p-6 bg-white rounded-[2rem] border-2 border-gray-100 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-300" />
              <div className="flex gap-6 items-start relative z-10">
                 <div className={`p-4 rounded-3xl ${section.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                   {section.icon}
                 </div>
                 <div className="flex-1">
                   <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">{section.title}</h3>
                   <p className="text-gray-600 text-sm font-semibold mb-4">{section.description}</p>
                   <motion.div 
                     whileHover={{ x: 4 }}
                     className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-bold rounded-full group-hover:from-primary/20 group-hover:to-primary/10 transition-all"
                   >
                     {section.action}
                     <span className="text-lg">→</span>
                   </motion.div>
                 </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
