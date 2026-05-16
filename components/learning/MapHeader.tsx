import { motion } from 'motion/react';
import { Map as MapIcon, Target, Store, User, Flame, Star, Trophy } from 'lucide-react';
import { toast } from 'sonner';

interface MapHeaderProps {
  user: any;
}

export const MapHeader = ({ user }: MapHeaderProps) => {
  return (
    <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between shadow-sm rounded-b-3xl">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
           <MapIcon size={24} />
        </div>
        <div>
          <h1 className="text-xl font-black text-gray-900 leading-none">Adventure Map</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">خريطة المغامرة</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            toast('المهمات اليومية', {
              description: '1. أكمل درسين (0/2)\n2. اجمع 50 نقطة (20/50)\n3. حافظ على حماسك',
              icon: <Target className="text-red-500" />
            });
          }}
          className="hidden lg:flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-red-100 shadow-sm text-gray-600 font-bold text-sm"
        >
           <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <Target size={14} className="text-red-600" />
           </div>
           تحديات
        </motion.button> */}

        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            toast('المتجر', {
              description: 'قريباً: شراء دروع وحيوانات أليفة جديدة بنقاط الـ XP',
              icon: <Store className="text-amber-500" />
            });
          }}
          className="hidden lg:flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-amber-100 shadow-sm text-gray-600 font-bold text-sm"
        >
           <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
              <Store size={14} className="text-amber-600" />
           </div>
           المتجر
        </motion.button> */}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            toast('Hero Statistics', {
              description: `Experience: ${user?.xp} | Level: ${user?.level} | Streak Days: ${user?.streak}`,
              icon: <Trophy className="text-yellow-500" />,
            });
          }}
          className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-blue-100 shadow-sm"
        >
           <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={14} className="text-blue-600" />
           </div>
        </motion.button>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-orange-100 shadow-sm"
        >
           <Flame size={18} className="text-orange-500 fill-orange-500" />
           <span className="font-black text-gray-700">{user?.streak || 0}</span>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-yellow-100 shadow-sm">
           <Star size={18} className="text-yellow-400 fill-yellow-400" />
           <span className="font-black text-gray-700">{user?.xp || 0}</span>
        </motion.div>
      </div>
    </div>
  );
};
