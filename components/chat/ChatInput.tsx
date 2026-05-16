import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: (e: React.FormEvent) => void;
  targetLang: string;
  loading: boolean;
}

export function ChatInput({ input, setInput, handleSend, targetLang, loading }: ChatInputProps) {
  return (
    <form onSubmit={handleSend} className="flex gap-3 relative">
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Type your message in ${targetLang}...`}
        className="flex-1 w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-accent font-medium pr-24"
      />
      <button
         type="button"
         onClick={() => {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
              const recognition = new SpeechRecognition();
              recognition.lang = targetLang === 'Spanish' ? 'es-ES' : 
                                 targetLang === 'French' ? 'fr-FR' : 
                                 targetLang === 'German' ? 'de-DE' : 
                                 targetLang === 'Italian' ? 'it-IT' : 
                                 targetLang === 'Japanese' ? 'ja-JP' : 'en-US';
              recognition.onresult = (event: any) => {
                setInput(prev => prev + (prev ? ' ' : '') + event.results[0][0].transcript);
              };
              recognition.start();
            }
         }}
         className="absolute right-16 top-2 bottom-2 w-10 text-gray-400 hover:text-blue-accent rounded-lg flex items-center justify-center transition-colors shadow-sm bg-white border border-gray-100"
         title="Speak"
      >
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
      </button>
      <button 
        type="submit"
        disabled={!input.trim() || loading}
        className="absolute right-2 top-2 bottom-2 bg-blue-accent hover:bg-blue-hover text-white w-12 rounded-lg flex items-center justify-center disabled:opacity-50 transition-colors"
      >
        <Send size={18} />
      </button>
    </form>
  );
}
