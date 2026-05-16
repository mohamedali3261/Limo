import React from 'react';
import { KidsSectionLayout } from '../../components/kids/KidsSectionLayout';
import { kidsColors } from '../../data/kids/colors';

export default function KidsColorsPage() {
  return (
    <KidsSectionLayout
      title="عالم الألوان"
      items={kidsColors}
      getAudioText={(item) => item.color}
      getTargetNameInArabic={(item) => item.arabic}
      getCardColor={() => 'border-gray-100 bg-white hover:border-gray-300'}
      renderCard={(item) => (
        <div className="w-full flex flex-col h-full rounded-[1.5rem] overflow-hidden">
          <div className={`h-40 w-full ${item.bgClass}`}></div>
          <div className="p-6 text-center space-y-1">
            <div className={`text-2xl font-black ${item.textClass}`} dir="ltr">{item.color}</div>
            <div className="text-lg font-medium text-gray-500">{item.arabic}</div>
          </div>
        </div>
      )}
    />
  );
}
