/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Layout from './components/UI/Layout';
import AdventureMap from './components/Map/AdventureMap';
import LessonView from './components/Lesson/LessonView';
import QuizView from './components/Quiz/QuizView';
import ConversationList from './components/Conversation/ConversationList';
import ConversationView from './components/Conversation/ConversationView';
import FlashcardsView from './components/Flashcards/FlashcardsView';
import ProfileView from './components/Profile/ProfileView';
import { ProgressProvider } from './contexts/ProgressContext';
import { courseUnits } from './data/courseData';

import { useLocation } from 'react-router-dom';

function LessonRoute() {
 const { id } = useParams();
 const level = courseUnits.flatMap(u => u.levels).find(l => l.id === Number(id));
 if (!level) return <Navigate to="/" />;
 return <LessonView levelId={level.id} dataId={level.dataId} />;
}

function QuizRoute() {
 const { id } = useParams();
 const location = useLocation();
 
 // Handle conversation-specific quizzes
 if (id?.startsWith('conv-')) {
   const questions = location.state?.questions;
   return <QuizView levelId={0} dataId={id} initialQuestions={questions} />;
 }

 const level = courseUnits.flatMap(u => u.levels).find(l => l.id === Number(id));
 if (!level) return <Navigate to="/" />;
 return <QuizView levelId={level.id} dataId={level.dataId} />;
}

export default function App() {
 return (
 <ProgressProvider>
 <BrowserRouter>
 <Layout>
 <Routes>
 <Route path="/" element={<AdventureMap />} />
 <Route path="/lesson/:id" element={<LessonRoute />} />
 <Route path="/quiz/:id" element={<QuizRoute />} />
 <Route path="/conversations" element={<ConversationList />} />
 <Route path="/conversations/:id" element={<ConversationView />} />
 <Route path="/flashcards" element={<FlashcardsView />} />
 <Route path="/profile" element={<ProfileView />} />
 </Routes>
 </Layout>
 </BrowserRouter>
 </ProgressProvider>
 );
}
