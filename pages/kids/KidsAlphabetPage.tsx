import React from 'react';
import { KidsSectionLayout } from '../../components/kids/KidsSectionLayout';
import { kidsAlphabet } from '../../data/kids/alphabet';

export default function KidsAlphabetPage() {
  return (
    <KidsSectionLayout
      title="الحروف التفاعلية"
      items={kidsAlphabet}
      getAudioText={(item) => item.letter}
      onItemClick={(item) => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(item.letter + '... ' + item.word);
          u.lang = 'en-US';
          u.rate = 0.8;
          window.speechSynthesis.speak(u);
        }
      }}
      getTargetNameInArabic={(item) => item.arabic}
      getCardColor={(item) => item.color}
      renderCard={(item) => (
        <div className="p-6 w-full flex flex-col items-center justify-center gap-2">
          <div className="text-5xl font-black mb-2" dir="ltr">{item.letter}</div>
          <div className="text-4xl">{item.emoji}</div>
          <div className="text-lg font-bold capitalize mt-2" dir="ltr">{item.word}</div>
          <div className="text-sm font-medium opacity-80">{item.arabic}</div>
        </div>
      )}
    />
  );
}
