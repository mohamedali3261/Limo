import React from 'react';
import { KidsSectionLayout } from '../../components/kids/KidsSectionLayout';
import { kidsHouse } from '../../data/kids/house';

export default function KidsHousePage() {
  return (
    <KidsSectionLayout
      title="أشياء في المنزل"
      items={kidsHouse}
      getAudioText={(item) => item.name}
      getTargetNameInArabic={(item) => item.arabic}
      getCardColor={(item) => item.color}
      renderCard={(item) => (
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
