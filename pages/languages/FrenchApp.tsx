import { Routes, Route } from 'react-router-dom';
import { ProgressProvider } from '../../components/languages/french/context/ProgressContext';
import { Layout } from '../../components/languages/french/components/layout/Layout';
import { Journey } from '../../components/languages/french/pages/Journey';
import { Pronunciation } from '../../components/languages/french/pages/Pronunciation';
import { Quizzes } from '../../components/languages/french/pages/Quizzes';
import { InteractiveLesson } from '../../components/languages/french/pages/InteractiveLesson';
import { AlphabetLesson } from '../../components/languages/french/pages/AlphabetLesson';
import { SpeakingPhrases } from '../../components/languages/french/pages/SpeakingPhrases';
import ProfileView from '../../components/languages/french/pages/Profile/ProfileView';

export default function FrenchApp() {
  return (
    <ProgressProvider>
      <Routes>
        <Route path="lesson/alphabet" element={<AlphabetLesson />} />
        <Route path="lesson/:id" element={<InteractiveLesson />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route index element={<Journey />} />
              <Route path="pronunciation" element={<Pronunciation />} />
              <Route path="quizzes" element={<Quizzes />} />
              <Route path="phrases" element={<SpeakingPhrases />} />
              <Route path="profile" element={<ProfileView />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </ProgressProvider>
  );
}
