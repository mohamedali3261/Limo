import React from 'react';
import { KidsSectionLayout } from '../../components/kids/KidsSectionLayout';
import { kidsNumbers } from '../../data/kids/numbers';

export default function KidsNumbersPage() {
  return (
    <KidsSectionLayout
      title="الأرقام والعد"
      items={kidsNumbers}
      getAudioText={(item) => item.word}
      getTargetNameInArabic={(item) => item.arabic}
      getCardColor={(item) => item.color}
      renderCard={(item) => (
        <div className="p-8 w-full flex flex-col items-center justify-center gap-4">
          <div className="text-6xl font-black">{item.number}</div>
          <div className="text-3xl tracking-widest">{item.emoji}</div>
          <div className="text-2xl font-bold" dir="ltr">{item.word}</div>
          <div className="text-lg font-medium opacity-80">{item.arabic}</div>
        </div>
      )}
    />
  );
}
