import { Bot, User } from 'lucide-react';

interface ChatMessageItemProps {
  msg: {
    role: 'user' | 'ai';
    text: string;
    translation?: string;
    correction?: string;
  };
  targetLang: string;
}

export function ChatMessageItem({ msg, targetLang }: ChatMessageItemProps) {
  return (
    <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`w-10 h-10 shrink-0 rounded-2xl flex items-center justify-center ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-blue-accent text-white'}`}>
          {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
        </div>
        <div className="flex flex-col gap-2">
          <div className={`p-4 rounded-2xl border font-medium text-[15px] relative group ${
            msg.role === 'user' 
              ? 'bg-primary border-primary text-white rounded-tr-sm shadow-md' 
              : 'bg-white border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
          }`}>
            {msg.text}
            {msg.role === 'ai' && (
              <button 
                onClick={() => {
                  const utterance = new SpeechSynthesisUtterance(msg.text);
                  utterance.lang = targetLang === 'Spanish' ? 'es-ES' : 
                                   targetLang === 'French' ? 'fr-FR' : 
                                   targetLang === 'German' ? 'de-DE' : 
                                   targetLang === 'Italian' ? 'it-IT' : 
                                   targetLang === 'Japanese' ? 'ja-JP' : 'en-US';
                  window.speechSynthesis.speak(utterance);
                }}
                className="absolute -right-8 top-2 p-1 text-gray-400 hover:text-blue-accent opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
              </button>
            )}
          </div>
          {msg.role === 'ai' && (msg.translation || msg.correction) && (
            <div className="flex flex-col gap-1 ml-2">
              {msg.translation && <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{msg.translation}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
