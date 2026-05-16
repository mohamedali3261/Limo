import { useEffect } from 'react';
import { useAuthStore } from '../lib/store/auth';
import { ProgressCard } from '../components/dashboard/ProgressCard';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { NextQuest } from '../components/dashboard/NextQuest';
import { Achievements } from '../components/dashboard/Achievements';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12 font-sans"
    >
      <motion.div variants={item} className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="relative">
          <div className="absolute -left-12 -top-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-3 tracking-tight flex items-center gap-3">
            مرحباً، {user?.username}!
            <Hand className="text-blue-600" size={48} />
          </h1>
          <p className="text-gray-400 font-bold text-xl flex items-center gap-2">
            <Sparkles className="text-primary" size={20} />
            {user?.learning_language === 'french' 
              ? 'أنت في مهمة لإتقان اللغة الفرنسية.' 
              : 'أنت في مهمة لإتقان اللغة الإنجليزية.'}
          </p>
        </div>
        
        <Link to="/learning" className="hidden lg:flex items-center gap-3 bg-white px-8 py-5 rounded-[2rem] border-2 border-gray-100 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all text-gray-700 font-black">
          Continue Path <ArrowRight size={20} className="text-primary" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={item} className="lg:col-span-2">
           <ProgressCard user={user} />
        </motion.div>
        <motion.div variants={item}>
           <NextQuest />
        </motion.div>
      </div>

      <motion.div variants={item}>
        <StatsGrid user={user} />
      </motion.div>

      <motion.div variants={item}>
        <Achievements />
      </motion.div>
    </motion.div>
  );
}
