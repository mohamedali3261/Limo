import React from 'react';
import { KidsSectionLayout } from '../../components/kids/KidsSectionLayout';
import { kidsAnimals } from '../../data/kids/animals';

export default function KidsAnimalsPage() {
  return (
    <KidsSectionLayout
      title="الحيوانات وأصواتها"
      items={kidsAnimals}
      getAudioText={(item) => item.name}
      onItemClick={(item) => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(`${item.name}. ${item.soundText}`);
          u.lang = 'en-US';
          u.rate = 0.8;
          window.speechSynthesis.speak(u);
        }
      }}
      getTargetNameInArabic={(item) => item.arabic}
      getCardColor={(item) => item.color}
      renderCard={(item) => (
        <div className="p-6 w-full flex flex-col items-center justify-center gap-4">
          <div className="text-7xl">{item.emoji}</div>
          <div className="text-center">
            <div className="text-2xl font-bold" dir="ltr">{item.name}</div>
            <div className="text-lg font-medium opacity-80">{item.arabic}</div>
          </div>
          <div className="mt-2 px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm opacity-90" dir="ltr">
            "{item.soundText}"
          </div>
        </div>
      )}
    />
  );
}
