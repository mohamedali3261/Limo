import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Mascot from '../languages/german/components/UI/Mascot';

interface LessonResultsProps {
  score: number;
  total: number;
  onRetry: () => void;
}

export function LessonResults({ score, total, onRetry }: LessonResultsProps) {
  const navigate = useNavigate();
  const pass = score >= total / 2;
  const isPerfect = score === total;
  const mascotState = pass ? 'happy' : 'sad';
  const mascotMessage = isPerfect ? 'برافو! 🌟' : pass ? 'ممتاز! 🎉' : 'حاول مرة أخرى! 💪';

  return (
    <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] border-2 border-gray-100 shadow-xl text-center space-y-8 animate-in zoom-in-95 duration-500 font-sans">
      <Mascot state={mascotState} message={mascotMessage} />
      
      {isPerfect && (
        <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Star burst background */}
          <circle cx="100" cy="100" r="95" fill="#FFF9E6" stroke="#FFD700" strokeWidth="2"/>
          
          {/* Main star */}
          <path d="M100 20L130 80L195 80L145 130L170 190L100 150L30 190L55 130L5 80L70 80Z" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
          
          {/* Sparkles */}
          <circle cx="50" cy="40" r="4" fill="#FFD700"/>
          <circle cx="150" cy="40" r="4" fill="#FFD700"/>
          <circle cx="30" cy="100" r="3" fill="#FFA500"/>
          <circle cx="170" cy="100" r="3" fill="#FFA500"/>
          <circle cx="50" cy="160" r="3" fill="#FFD700"/>
          <circle cx="150" cy="160" r="3" fill="#FFD700"/>
        </svg>
      )}
      {pass && !isPerfect && (
        <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-green-100 text-green-500">
          <Star size={48} className="fill-green-500" />
        </div>
      )}
      {!pass && (
        <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-red-100 text-red-500">
          <Star size={48} />
        </div>
      )}
      
      <div className="space-y-4">
        <h2 className="text-4xl font-black text-gray-900">
          {isPerfect ? 'برافو! 🌟' : pass ? 'أسطوري!' : 'واصل التدريب'}
        </h2>
        <p className="text-gray-500 font-bold text-xl">
          {isPerfect ? `لقد أجبت على جميع ${total} أسئلة بشكل صحيح!` : `لقد أجبت على ${score} من أصل ${total} بشكل صحيح.`}
        </p>
      </div>
      
      <div className="flex gap-4">
        <button 
          onClick={() => navigate('/learning')}
          className="flex-1 bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
        >
          العودة للمسار
        </button>
        {!pass && (
          <button 
            onClick={onRetry}
            className="flex-1 bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
          >
            حاول مرة أخرى
          </button>
        )}
      </div>
    </div>
  );
}
