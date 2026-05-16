import { kidsAnimals } from './animals';
import { kidsFruits } from './fruits';
import { kidsBodyParts } from './bodyParts';
import { kidsClothes } from './clothes';
import { kidsFamily } from './family';
import { kidsSchool } from './school';
import { kidsHouse } from './house';
import { kidsNature } from './nature';
import { kidsVehicles } from './vehicles';
import { kidsFood } from './food';
import { kidsOccupations } from './occupations';
import { kidsEmotions } from './emotions';
import { kidsShapes } from './shapes';
import { kidsWeather } from './weather';
import { kidsBugs } from './bugs';
import { kidsInstruments } from './instruments';
import { kidsSports } from './sports';
import { kidsSpace } from './space';
import { kidsRoutine } from './routine';
import { kidsCountries } from './countries';

const baseLevels = [
  { id: 1, name: 'الحيوانات', data: kidsAnimals },
  { id: 2, name: 'الفواكه', data: kidsFruits },
  { id: 3, name: 'أجزاء الجسم', data: kidsBodyParts },
  { id: 4, name: 'الملابس', data: kidsClothes },
  { id: 5, name: 'العائلة', data: kidsFamily },
  { id: 6, name: 'المدرسة', data: kidsSchool },
  { id: 7, name: 'المنزل', data: kidsHouse },
  { id: 8, name: 'الطبيعة', data: kidsNature },
  { id: 9, name: 'المركبات', data: kidsVehicles },
  { id: 10, name: 'الطعام', data: kidsFood },
  { id: 11, name: 'المهن', data: kidsOccupations },
  { id: 12, name: 'المشاعر', data: kidsEmotions },
  { id: 13, name: 'الأشكال', data: kidsShapes },
  { id: 14, name: 'الطقس', data: kidsWeather },
  { id: 15, name: 'الحشرات', data: kidsBugs },
  { id: 16, name: 'الآلات الموسيقية', data: kidsInstruments },
  { id: 17, name: 'الرياضات', data: kidsSports },
  { id: 18, name: 'الفضاء', data: kidsSpace },
  { id: 19, name: 'الروتين اليومي', data: kidsRoutine },
  { id: 20, name: 'الدول', data: kidsCountries },
];

const allData = baseLevels.map(l => l.data).flat();

// Generate levels 21 to 50
const mixedLevels = Array.from({ length: 30 }).map((_, idx) => {
  const levelId = idx + 21;
  // Use a pseudo-random seed based on level id to keep the items somewhat consistent
  let seed = levelId * 12345;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  
  const shuffledData = [...allData].sort(() => 0.5 - random());
  
  return {
    id: levelId,
    name: `تحدي المعرفة ${levelId - 20}`,
    data: shuffledData.slice(0, 15) // Each mixed challenge has 15 distinct items
  };
});

export const kidsGameLevels = [...baseLevels, ...mixedLevels];
