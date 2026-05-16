import { Check, X } from 'lucide-react';

interface LessonFooterProps {
  isFinished: boolean;
  isDoneWithCard: boolean;
  onContinue: () => void;
  onClose: () => void;
  isHidden?: boolean;
  showError?: boolean;
  correctAnswer?: string;
}

export function LessonFooter({ isFinished, isDoneWithCard, onContinue, onClose, isHidden, showError, correctAnswer }: LessonFooterProps) {
  const isGreen = isFinished || isDoneWithCard;
  const isRed = showError && !isDoneWithCard;
  
  if (isHidden) return null;
  
  return (
    <div className={`w-full border-t-2 transition-colors duration-300 ${isGreen ? 'border-[#d7ffb8]' : (isRed ? 'border-[#ffc1c1]' : 'border-[#e5e5e5]')}`}>
      <div className={`w-full p-6 md:p-8 ${isGreen ? 'bg-[#d7ffb8]' : (isRed ? 'bg-[#ffdfe0]' : 'bg-white')}`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {isGreen ? (
            <div className="flex items-center gap-4 text-[#58a700] font-bold text-2xl hidden sm:flex">
              <Check size={32} strokeWidth={3} />
              {isFinished ? 'عمل ممتاز' : ''}
            </div>
          ) : isRed ? (
            <div className="flex flex-col gap-2 text-[#ea2b2b] w-full sm:w-auto">
                <div className="flex items-center gap-2 font-bold text-2xl">
                  <X size={32} strokeWidth={3} />
                  إجابة غير صحيحة
                </div>
                {correctAnswer && (
                  <div className="text-[#ea2b2b] font-medium text-lg flex flex-col ml-10">
                    <span className="text-sm opacity-80">الإجابة الصحيحة:</span>
                    <span>{correctAnswer}</span>
                  </div>
                )}
            </div>
          ) : (
            <div className="hidden sm:block"></div>
          )}

          <div className="flex gap-4 w-full sm:w-auto">
            <button 
              onClick={isFinished ? onClose : onContinue}
              className={`
                w-full sm:w-auto px-16 py-4 rounded-2xl font-extrabold text-xl transition-all uppercase tracking-wide
                ${isRed ? "bg-[#ea2b2b] text-white border-b-[6px] border-[#ca2222] active:border-b-0 active:translate-y-[6px]" : "bg-[#58cc02] text-white border-b-[6px] border-[#58a700] active:border-b-0 active:translate-y-[6px] hover:brightness-110"}
              `}
            >
              {isFinished ? 'متابعة' : (isDoneWithCard ? 'استمرار' : (isRed ? 'متابعة' : 'تحقق'))}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
