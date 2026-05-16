import { Routes, Route } from 'react-router-dom';
import { AudioSettingsProvider } from '../../components/languages/spanish/context/AudioSettingsContext';
import { Layout } from '../../components/languages/spanish/components/layout/Layout';
import Lessons from '../../components/languages/spanish/pages/Lessons';
import Review from '../../components/languages/spanish/pages/Review';
import Scenarios from '../../components/languages/spanish/pages/Scenarios';
import Achievements from '../../components/languages/spanish/pages/Achievements';
import Conversations from '../../components/languages/spanish/pages/Conversations';
import Profile from '../../components/languages/spanish/pages/Profile';

export default function SpanishApp() {
  return (
    <AudioSettingsProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Lessons />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="review" element={<Review />} />
          <Route path="scenarios" element={<Scenarios />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="conversations" element={<Conversations />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </AudioSettingsProvider>
  );
}
