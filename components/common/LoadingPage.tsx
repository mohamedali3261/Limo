import { motion } from 'motion/react';
import { APP_CONFIG } from '../../lib/config';
import Mascot from '../languages/german/components/UI/Mascot';

interface LoadingPageProps {
  message?: string;
}

export function LoadingPage({ message = 'جاري التحميل...' }: LoadingPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-10"
    >
      <Mascot state="thinking" message="جاري التحميل..." />
      
      <div className="bg-white p-12 rounded-[3.5rem] border-2 border-gray-100 shadow-sm flex flex-col items-center text-center max-w-sm w-full relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="relative mb-8">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
          />
        </div>
        
        <h2 className="text-2xl font-black text-gray-900 mb-2 truncate w-full px-4">{message}</h2>
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
          {APP_CONFIG.name} Academy
        </p>

        {/* Branded loading bar */}
        <div className="w-full h-1.5 bg-gray-50 rounded-full mt-8 overflow-hidden border border-gray-100">
           <motion.div 
             initial={{ x: '-100%' }}
             animate={{ x: '100%' }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
           />
        </div>
      </div>
    </motion.div>
  );
}
