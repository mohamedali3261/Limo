import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './lib/store/auth';
import { useThemeStore } from './lib/store/theme';
import { useSettingsStore } from './lib/store/settings';
import { apiFetch } from './lib/api';
import { Toaster } from 'sonner';

import MainLayout from './components/layout/MainLayout';
import AuthPage from './pages/Auth';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Flashcards from './pages/Flashcards';
import LearningPath from './pages/LearningPath';
import LessonDetail from './pages/LessonDetail';
import Onboarding from './pages/Onboarding';
import OnboardingFlow from './pages/OnboardingFlow';
import Stories from './pages/Stories';
import StoryView from './pages/StoryView';
import GameHub from './pages/GameHub';
import GameLevel from './pages/GameLevel';
import LevelSelection from './pages/LevelSelection';
import ProfilePage from './pages/Profile';
import KidsHub from './pages/KidsHub';
import KidsAlphabetPage from './pages/kids/KidsAlphabetPage';
import KidsNumbersPage from './pages/kids/KidsNumbersPage';
import KidsColorsPage from './pages/kids/KidsColorsPage';
import KidsAnimalsPage from './pages/kids/KidsAnimalsPage';
import KidsFruitsPage from './pages/kids/KidsFruitsPage';
import KidsBodyPartsPage from './pages/kids/KidsBodyPartsPage';
import KidsClothesPage from './pages/kids/KidsClothesPage';
import KidsVehiclesPage from './pages/kids/KidsVehiclesPage';
import KidsFamilyPage from './pages/kids/KidsFamilyPage';
import KidsSchoolPage from './pages/kids/KidsSchoolPage';
import KidsHousePage from './pages/kids/KidsHousePage';
import KidsNaturePage from './pages/kids/KidsNaturePage';
import KidsFoodPage from './pages/kids/KidsFoodPage';
import KidsOccupationsPage from './pages/kids/KidsOccupationsPage';
import KidsEmotionsPage from './pages/kids/KidsEmotionsPage';
import KidsInstrumentsPage from './pages/kids/KidsInstrumentsPage';
import KidsSportsPage from './pages/kids/KidsSportsPage';
import KidsSpacePage from './pages/kids/KidsSpacePage';
import KidsRoutinePage from './pages/kids/KidsRoutinePage';
import KidsCountriesPage from './pages/kids/KidsCountriesPage';
import KidsShapesPage from './pages/kids/KidsShapesPage';
import KidsWeatherPage from './pages/kids/KidsWeatherPage';
import KidsBugsPage from './pages/kids/KidsBugsPage';
import WordCatcher from './components/games/WordCatcher';
import MemoryGame from './pages/kids/games/MemoryGame';
import VoiceConversation from './pages/VoiceConversation';
import SpellingGame from './pages/kids/games/SpellingGame';
import DrawingGame from './pages/kids/games/DrawingGame';
import MatchingGame from './pages/kids/games/MatchingGame';
import FrenchApp from './pages/languages/FrenchApp';
import GermanApp from './pages/languages/GermanApp';
import SpanishApp from './pages/languages/SpanishApp';
import LanguageSelector from './pages/LanguageSelector';

export default function App() {
  const { user, login, logout, token } = useAuthStore();
  const { setPrimaryColor } = useThemeStore();
  const { setSettings } = useSettingsStore();
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const onboardingData = localStorage.getItem('memohero_onboarding');
    return !onboardingData;
  });

  // Track user session time
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (user) {
      // Update session every minute
      intervalId = setInterval(() => {
        // This will keep the session active and track time
        const currentUser = localStorage.getItem('memohero_current_user');
        if (currentUser) {
          const sessions = JSON.parse(localStorage.getItem('memohero_user_sessions') || '{}');
          const userId = JSON.parse(currentUser).id;
          
          if (sessions[userId]?.currentSessionStart) {
            // Session is being tracked automatically
          }
        }
      }, 60000); // Every minute
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [user]);

  useEffect(() => {
    // Load theme
    apiFetch('/api/settings/theme')
      .then(data => {
         if (data.primaryColor) setPrimaryColor(data.primaryColor);
      })
      .catch(console.error);

    // Load System Settings
    apiFetch('/api/settings/all')
      .then(data => {
        const updates: any = {};
        if (data.tts_rate) updates.ttsRate = parseFloat(data.tts_rate);
        if (data.tts_gender) updates.ttsGender = data.tts_gender;
        if (data.anim_speed) updates.animSpeed = parseInt(data.anim_speed);
        if (data.map_character_url) updates.mapCharacterUrl = data.map_character_url;
        if (data.map_background_urls) {
          try {
            const parsed = JSON.parse(data.map_background_urls);
            if (Array.isArray(parsed)) {
              updates.mapBackgroundUrls = parsed.filter(u => typeof u === 'string');
            } else {
              throw new Error("Not an array");
            }
          } catch (e) {
            updates.mapBackgroundUrls = data.map_background_urls.split('\n').filter((u: string) => u.trim());
          }
        }
        if (data.map_anim_interval) updates.mapAnimInterval = parseInt(data.map_anim_interval);
        setSettings(updates);
      })
      .catch(console.error);

    // التحقق من صحة الجلسة عند بدء التطبيق
    const initAuth = async () => {
      if (token && user) {
        try {
          // التحقق من صحة التوكن
          const data = await apiFetch('/api/auth/me');
          // تحديث بيانات المستخدم إذا تغيرت
          if (JSON.stringify(data.user) !== JSON.stringify(user)) {
            login(data.user, token);
          }
        } catch (err) {
          // في حالة فشل التحقق، تسجيل الخروج
          logout();
        }
      } else if (!token && !user) {
        // إذا لم يكن هناك مستخدم مسجل دخول، قم بإنشاء مستخدم افتراضي
        try {
          const result = await apiFetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
              username: `guest_${Date.now()}`,
              password: 'guest_password_123'
            })
          });
          if (result.user && result.token) {
            login(result.user, result.token);
          }
        } catch (err) {
          console.error('Failed to create guest user', err);
        }
      }
    };
    initAuth();
  }, []); // تشغيل مرة واحدة فقط عند بدء التطبيق

  const handleOnboardingComplete = (data: any) => {
    setShowOnboarding(false);
    
    // Navigate to language-specific route based on selection
    const languageRoutes: Record<string, string> = {
      en: '/',
      fr: '/french',
      de: '/german',
      es: '/spanish'
    };
    
    const route = languageRoutes[data.language] || '/';
    // We'll use React Router navigation instead of window.location
    window.history.pushState({}, '', route);
    window.location.href = route;
  };

  // Show onboarding flow if user hasn't completed it
  if (showOnboarding) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          {/* {!user ? (
            <>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          ) : (user.onboarding_completed !== true && user.onboarding_completed !== 1 && String(user.onboarding_completed) !== 'true') ? (
            <Route path="*" element={<Onboarding />} />
          ) : ( */}
            <>
              <Route element={<MainLayout />}>
                <Route path="/" element={<LanguageSelector />} />
                <Route path="/languages" element={<LanguageSelector />} />
                <Route path="/learning" element={<LearningPath />} />
                <Route path="/learning/lesson/:id" element={<LessonDetail />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/stories/:id" element={<StoryView />} />
                <Route path="/voice-conversation" element={<VoiceConversation />} />
                <Route path="/game" element={<GameHub />} />
                <Route path="/game/type/:type" element={<LevelSelection />} />
                <Route path="/game/level/:levelId" element={<GameLevel />} />
                <Route path="/game/word-catcher" element={<WordCatcher />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/kids" element={<KidsHub />} />
                <Route path="/kids/alphabet" element={<KidsAlphabetPage />} />
                <Route path="/kids/numbers" element={<KidsNumbersPage />} />
                <Route path="/kids/colors" element={<KidsColorsPage />} />
                <Route path="/kids/animals" element={<KidsAnimalsPage />} />
                <Route path="/kids/fruits" element={<KidsFruitsPage />} />
                <Route path="/kids/body-parts" element={<KidsBodyPartsPage />} />
                <Route path="/kids/clothes" element={<KidsClothesPage />} />
                <Route path="/kids/vehicles" element={<KidsVehiclesPage />} />
                <Route path="/kids/family" element={<KidsFamilyPage />} />
                <Route path="/kids/school" element={<KidsSchoolPage />} />
                <Route path="/kids/house" element={<KidsHousePage />} />
                <Route path="/kids/nature" element={<KidsNaturePage />} />
                <Route path="/kids/food" element={<KidsFoodPage />} />
                <Route path="/kids/occupations" element={<KidsOccupationsPage />} />
                <Route path="/kids/emotions" element={<KidsEmotionsPage />} />
                <Route path="/kids/shapes" element={<KidsShapesPage />} />
                <Route path="/kids/weather" element={<KidsWeatherPage />} />
                <Route path="/kids/bugs" element={<KidsBugsPage />} />
                <Route path="/kids/instruments" element={<KidsInstrumentsPage />} />
                <Route path="/kids/sports" element={<KidsSportsPage />} />
                <Route path="/kids/space" element={<KidsSpacePage />} />
                <Route path="/kids/routine" element={<KidsRoutinePage />} />
                <Route path="/kids/countries" element={<KidsCountriesPage />} />
                <Route path="/kids/games/memory" element={<MemoryGame />} />
                <Route path="/kids/games/spelling" element={<SpellingGame />} />
                <Route path="/kids/games/drawing" element={<DrawingGame />} />
                <Route path="/kids/games/matching" element={<MatchingGame />} />
                <Route path="/flashcards" element={<Flashcards />} />
                {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
                {/* <Route path="/profile" element={<Profile />} /> */}
              </Route>
              
              {/* Language Routes */}
              <Route path="/french/*" element={<FrenchApp />} />
              <Route path="/german/*" element={<GermanApp />} />
              <Route path="/spanish/*" element={<SpanishApp />} />
              
              <Route path="*" element={<Navigate to="/" />} />
            </>
          {/* )} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
