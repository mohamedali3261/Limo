import React from 'react';
import { Routes, Route, useParams, Navigate, Outlet } from 'react-router-dom';
import Layout from '../../components/languages/german/components/UI/Layout';
import AdventureMap from '../../components/languages/german/components/Map/AdventureMap';
import LessonView from '../../components/languages/german/components/Lesson/LessonView';
import QuizView from '../../components/languages/german/components/Quiz/QuizView';
import ConversationList from '../../components/languages/german/components/Conversation/ConversationList';
import ConversationView from '../../components/languages/german/components/Conversation/ConversationView';
import FlashcardsView from '../../components/languages/german/components/Flashcards/FlashcardsView';
import ProfileView from '../../components/languages/german/components/Profile/ProfileView';
import { ProgressProvider } from '../../components/languages/german/contexts/ProgressContext';
import { courseUnits } from '../../components/languages/german/data/courseData';

function LessonRoute() {
 const { id } = useParams();
 const level = courseUnits.flatMap(u => u.levels).find(l => l.id === Number(id));
 if (!level) return <Navigate to=".." relative="route" />;
 return <LessonView levelId={level.id} dataId={level.dataId} />;
}

function QuizRoute() {
 const { id } = useParams();
 const level = courseUnits.flatMap(u => u.levels).find(l => l.id === Number(id));
 if (!level) return <Navigate to=".." relative="route" />;
 return <QuizView levelId={level.id} />;
}

function LayoutWrapper() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default function GermanApp() {
  return (
    <ProgressProvider>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route index element={<AdventureMap />} />
          <Route path="map" element={<AdventureMap />} />
          <Route path="lesson/:id" element={<LessonRoute />} />
          <Route path="quiz/:id" element={<QuizRoute />} />
          <Route path="conversations" element={<ConversationList />} />
          <Route path="conversation/:id" element={<ConversationView />} />
          <Route path="flashcards" element={<FlashcardsView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}
