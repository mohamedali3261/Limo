import { Conversation } from './types';
import { introConversation } from './conversations/intro';
import { greetingsConversation } from './conversations/greetings';
import { howAreYouConversation } from './conversations/how_are_you';
import { marketConversation } from './conversations/market';
import { doctorConversation } from './conversations/doctor';
import { hotelConversation } from './conversations/hotel';
import { restaurantConversation } from './conversations/restaurant';
import { airportConversation } from './conversations/airport';
import { directionsConversation } from './conversations/directions';
import { jobInterviewConversation } from './conversations/job_interview';
import { atRestaurantConversation } from './conversations/at_restaurant';
import { atDoctorConversation } from './conversations/at_doctor';
import { emergencyConversation } from './conversations/emergency';
import { rentingConversation } from './conversations/renting';
import { universityConversation } from './conversations/university';
import { sightseeingConversation } from './conversations/sightseeing';
import { workplaceConversation } from './conversations/workplace';

export const conversations: Conversation[] = [
  introConversation,
  greetingsConversation,
  howAreYouConversation,
  marketConversation,
  doctorConversation,
  hotelConversation,
  restaurantConversation,
  airportConversation,
  directionsConversation,
  jobInterviewConversation,
  atRestaurantConversation,
  atDoctorConversation,
  emergencyConversation,
  rentingConversation,
  universityConversation,
  sightseeingConversation,
  workplaceConversation,
];
