import { CourseUnit, LessonItem, QuizQuestion } from './types';
export * from './types';
import { level1Alphabet, level1Quiz } from './levels/level1';
import { level2Greetings, level2Quiz } from './levels/level2';
import { level3Numbers, level3Quiz } from './levels/level3';
import { level4Colors, level4Quiz } from './levels/level4';
import { level5Animals, level5Quiz } from './levels/level5';
import { level6Food, level6Quiz } from './levels/level6';
import { level7Family, level7Quiz } from './levels/level7';
import { level8Clothes, level8Quiz } from './levels/level8';
import { level9Jobs, level9Quiz } from './levels/level9';
import { level10Adjectives, level10Quiz } from './levels/level10';
import { level11Places, level11Quiz } from './levels/level11';
import { level12Time, level12Quiz } from './levels/level12';
import { level13Hobbies, level13Quiz } from './levels/level13';
import { level14Weather, level14Quiz } from './levels/level14';
import { level15Health, level15Quiz } from './levels/level15';
import { level16Transport, level16Quiz } from './levels/level16';
import { level17Nature, level17Quiz } from './levels/level17';
import { level18Tech, level18Quiz } from './levels/level18';
import { level19Education, level19Quiz } from './levels/level19';
import { level20House, level20Quiz } from './levels/level20';
import { level21Feelings, level21Quiz } from './levels/level21';
import { level22Shopping, level22Quiz } from './levels/level22';
import { level23Environment, level23Quiz } from './levels/level23';
import { level24Sports, level24Quiz } from './levels/level24';
import { level25Travel, level25Quiz } from './levels/level25';
import { level26Office, level26Quiz } from './levels/level26';
import { level27Body2, level27Quiz } from './levels/level27';
import { level28Shapes, level28Quiz } from './levels/level28';
import { level29Routine, level29Quiz } from './levels/level29';
import { level30Media, level30Quiz } from './levels/level30';
import { level31Holidays, level31Quiz } from './levels/level31';
import { level32Emotions, level32Quiz } from './levels/level32';
import { level33Phrases, level33Quiz } from './levels/level33';

export const getLessonData = (dataId: string): LessonItem[] => {
  switch (dataId) {
    case 'level1Alphabet': return level1Alphabet;
    case 'level2Greetings': return level2Greetings;
    case 'level3Numbers': return level3Numbers;
    case 'level4Colors': return level4Colors;
    case 'level5Animals': return level5Animals;
    case 'level6Food': return level6Food;
    case 'level7Family': return level7Family;
    case 'level8Clothes': return level8Clothes;
    case 'level9Jobs': return level9Jobs;
    case 'level10Adjectives': return level10Adjectives;
    case 'level11Places': return level11Places;
    case 'level12Time': return level12Time;
    case 'level13Hobbies': return level13Hobbies;
    case 'level14Weather': return level14Weather;
    case 'level15Health': return level15Health;
    case 'level16Transport': return level16Transport;
    case 'level17Nature': return level17Nature;
    case 'level18Tech': return level18Tech;
    case 'level19Education': return level19Education;
    case 'level20House': return level20House;
    case 'level21Feelings': return level21Feelings;
    case 'level22Shopping': return level22Shopping;
    case 'level23Environment': return level23Environment;
    case 'level24Sports': return level24Sports;
    case 'level25Travel': return level25Travel;
    case 'level26Office': return level26Office;
    case 'level27Body2': return level27Body2;
    case 'level28Shapes': return level28Shapes;
    case 'level29Routine': return level29Routine;
    case 'level30Media': return level30Media;
    case 'level31Holidays': return level31Holidays;
    case 'level32Emotions': return level32Emotions;
    case 'level33Phrases': return level33Phrases;
    default: return [];
  }
};

export const getQuizData = (dataId: string): QuizQuestion[] => {
  switch (dataId) {
    case 'level1Quiz': return level1Quiz;
    case 'level2Quiz': return level2Quiz;
    case 'level3Quiz': return level3Quiz;
    case 'level4Quiz': return level4Quiz;
    case 'level5Quiz': return level5Quiz;
    case 'level6Quiz': return level6Quiz;
    case 'level7Quiz': return level7Quiz;
    case 'level8Quiz': return level8Quiz;
    case 'level9Quiz': return level9Quiz;
    case 'level10Quiz': return level10Quiz;
    case 'level11Quiz': return level11Quiz;
    case 'level12Quiz': return level12Quiz;
    case 'level13Quiz': return level13Quiz;
    case 'level14Quiz': return level14Quiz;
    case 'level15Quiz': return level15Quiz;
    case 'level16Quiz': return level16Quiz;
    case 'level17Quiz': return level17Quiz;
    case 'level18Quiz': return level18Quiz;
    case 'level19Quiz': return level19Quiz;
    case 'level20Quiz': return level20Quiz;
    case 'level21Quiz': return level21Quiz;
    case 'level22Quiz': return level22Quiz;
    case 'level23Quiz': return level23Quiz;
    case 'level24Quiz': return level24Quiz;
    case 'level25Quiz': return level25Quiz;
    case 'level26Quiz': return level26Quiz;
    case 'level27Quiz': return level27Quiz;
    case 'level28Quiz': return level28Quiz;
    case 'level29Quiz': return level29Quiz;
    case 'level30Quiz': return level30Quiz;
    case 'level31Quiz': return level31Quiz;
    case 'level32Quiz': return level32Quiz;
    case 'level33Quiz': return level33Quiz;
    default: return [];
  }
};

import { unit1_4 } from './units/unit1_4';
import { unit5_8 } from './units/unit5_8';
import { unit9_13 } from './units/unit9_13';
import { unit14_19 } from './units/unit14_19';

export const courseUnits: CourseUnit[] = [
  ...unit1_4,
  ...unit5_8,
  ...unit9_13,
  ...unit14_19
];

