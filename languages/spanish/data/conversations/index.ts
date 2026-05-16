import { ConversationScenario } from './types';
import { greeting } from './greeting';
import { market } from './market';
import { doctor } from './doctor';
import { hotel } from './hotel';
import { airport } from './airport';
import { renting } from './renting';
import { restaurant } from './restaurant';
import { bank } from './bank';
import { ordering_coffee } from './ordering_coffee';
import { library } from './library';
import { interview } from './interview';
import { train_station } from './train_station';
import { party } from './party';
import { directions } from './directions';
import { gym } from './gym';
import { tech_support } from './tech_support';
import { travel_agency } from './travel_agency';
import { dentist } from './dentist';
import { supermarket_complaint } from './supermarket_complaint';

export const conversations: ConversationScenario[] = [
  greeting,
  market,
  doctor,
  hotel,
  airport,
  renting,
  restaurant,
  bank,
  ordering_coffee,
  library,
  interview,
  train_station,
  party,
  directions,
  gym,
  tech_support,
  travel_agency,
  dentist,
  supermarket_complaint
];

export * from './types';
