/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Journey } from './pages/Journey';
import { Pronunciation } from './pages/Pronunciation';
import { Quizzes } from './pages/Quizzes';
import { InteractiveLesson } from './pages/InteractiveLesson';
import { AlphabetLesson } from './pages/AlphabetLesson/index';
import { SpeakingPhrases } from './pages/SpeakingPhrases';
import { ProgressProvider } from './context/ProgressContext';

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/lesson/alphabet" element={<AlphabetLesson />} />
          <Route path="/lesson/:id" element={<InteractiveLesson />} />
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Journey />} />
                <Route path="/pronunciation" element={<Pronunciation />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/phrases" element={<SpeakingPhrases />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}
