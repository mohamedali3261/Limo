import React from 'react';
import { KidsSectionLayout } from '../../components/kids/KidsSectionLayout';
import { kidsInstruments } from '../../data/kids/instruments';

export default function KidsInstrumentsPage() {
  return (
    <KidsSectionLayout
      title="الآلات الموسيقية"
      items={kidsInstruments}
      getAudioText={(item) => item.name}
      getSentenceText={(item: any) => item.sentence}
      getTargetNameInArabic={(item: any) => item.arabic}
      getCardColor={(item: any) => item.color}
      renderCard={(item: any) => (
        <div className="p-6 w-full flex flex-col items-center justify-center gap-4">
          <div className="text-7xl">{item.emoji}</div>
          <div className="text-center">
            <div className="text-2xl font-bold" dir="ltr">{item.name}</div>
            <div className="text-lg font-medium opacity-80">{item.arabic}</div>
          </div>
        </div>
      )}
    />
  );
}
