import React from 'react';
import { Save, Lightbulb, Languages, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface TranslatorOutputCardProps {
  result: any;
  targetLang: string;
  handleSavePhrase: () => void;
}

export function TranslatorOutputCard({ result, targetLang, handleSavePhrase }: TranslatorOutputCardProps) {
  return (
    <div className="bg-primary/5 p-6 rounded-[2rem] border-2 border-primary/20 flex flex-col min-h-[300px]">
      {result ? (
        <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
          <div className="flex justify-between items-start mb-4">
            <span className="font-bold text-primary">Translation ({targetLang})</span>
            <span className="text-xs font-bold text-gray-400 bg-white px-2 py-1 rounded-full border">Detected: {result.detectedSource}</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-6 bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-sm leading-relaxed relative group" dir="ltr">
            {result.translatedText}
            <button 
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(result.translatedText);
                utterance.lang = targetLang === 'Spanish' ? 'es-ES' : 
                                 targetLang === 'French' ? 'fr-FR' : 
                                 targetLang === 'German' ? 'de-DE' : 
                                 targetLang === 'Italian' ? 'it-IT' : 
                                 targetLang === 'Japanese' ? 'ja-JP' : 
                                 targetLang === 'Korean' ? 'ko-KR' : 
                                 targetLang === 'Mandarin' ? 'zh-CN' : 'en-US';
                window.speechSynthesis.speak(utterance);
              }}
              className="absolute bottom-2 right-2 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              title="Listen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            </button>
          </div>
          
          {result.grammarNotes && result.grammarNotes.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-700 flex items-center gap-2 mb-3"><Lightbulb size={18} className="text-yellow-500" /> Grammar Insights</h4>
              <ul className="space-y-2">
                {result.grammarNotes.map((note: string, i: number) => (
                  <li key={i} className="text-sm font-medium text-gray-600 bg-white/50 p-2 rounded-xl border border-white">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.alternativePhrasing && result.alternativePhrasing.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-700 mb-2 text-sm">Other ways to say it:</h4>
              <div className="flex flex-wrap gap-2">
                {result.alternativePhrasing.map((alt: string, i: number) => (
                  <span key={i} className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">
                    {alt}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto pt-4 flex justify-end gap-3">
            <button 
              onClick={() => {
                 if (navigator.share) {
                   navigator.share({
                     title: 'Limo Translation',
                     text: `Checkout this translation!\n\nTranslation: ${result.translatedText}`,
                   }).catch(console.error);
                 } else {
                   navigator.clipboard.writeText(`Translation: ${result.translatedText}`);
                   toast.success("Copied to clipboard!");
                 }
              }}
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-sm"
            >
              <Share2 size={18} /> Share
            </button>
            <button 
              onClick={handleSavePhrase}
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-sm"
            >
              <Save size={18} /> Save Phrase
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400">
          <div className="w-16 h-16 bg-white rounded-2xl mb-4 flex items-center justify-center opacity-50"><Languages size={32} /></div>
          <p className="font-bold">Your translation and AI insights will appear here.</p>
        </div>
      )}
    </div>
  );
}
