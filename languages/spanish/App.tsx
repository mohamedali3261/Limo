import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Lessons from './pages/Lessons';
import Review from './pages/Review';
import Scenarios from './pages/Scenarios';
import Achievements from './pages/Achievements';
import Conversations from './pages/Conversations';
import { AudioSettingsProvider } from './context/AudioSettingsContext';

export default function App() {
  return (
    <AudioSettingsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/lessons" replace />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="review" element={<Review />} />
            <Route path="scenarios" element={<Scenarios />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="conversations" element={<Conversations />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/lessons" replace />} />
          </Route>
        </Routes>
      </Router>
    </AudioSettingsProvider>
  );
}
