import React from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface TranslatorInputCardProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  targetLang: string;
  setTargetLang: React.Dispatch<React.SetStateAction<string>>;
  handleTranslate: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
}

export function TranslatorInputCard({ text, setText, targetLang, setTargetLang, handleTranslate, loading }: TranslatorInputCardProps) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border-2 border-gray-100 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-4">
         <span className="font-bold text-gray-500">Target Language</span>
         <select 
           value={targetLang}
           onChange={(e) => setTargetLang(e.target.value)}
           className="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800"
         >
           <option>Spanish</option>
           <option>French</option>
           <option>German</option>
           <option>Italian</option>
           <option>Japanese</option>
           <option>Korean</option>
           <option>Mandarin</option>
           <option>English</option>
         </select>
      </div>
      <form onSubmit={handleTranslate} className="flex-1 flex flex-col grid relative">
         <textarea 
           value={text}
           onChange={(e) => setText(e.target.value)}
           placeholder="Type something to translate..."
           className="flex-1 w-full p-4 pr-12 bg-gray-50 border-2 border-gray-100 rounded-2xl resize-none focus:outline-none focus:border-primary font-medium text-lg min-h-[150px] mb-4"
           dir="ltr"
         ></textarea>
         
         {/* Speech to text input */}
         <button
            type="button"
            onClick={() => {
              const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
              if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.onresult = (event: any) => {
                  setText(prev => prev + (prev ? ' ' : '') + event.results[0][0].transcript);
                };
                recognition.start();
                toast.info("Listening...");
              } else {
                toast.error("Speech recognition not supported in this browser.");
              }
            }}
            className="absolute top-16 right-4 p-2 bg-white border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer shadow-sm"
            title="Speak"
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
         </button>

         <button 
           type="submit" 
           disabled={loading || !text.trim()}
           className="bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-auto"
         >
           {loading ? 'Translating...' : 'Translate & Analyze'} <ArrowRight size={20} />
         </button>
      </form>
    </div>
  );
}
