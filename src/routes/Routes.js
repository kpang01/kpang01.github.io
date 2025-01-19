import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Import pages
import Goals from '../pages/Personal/Goals';
import InternshipJourney from '../pages/Personal/InternshipJourney';
// ... import other pages

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/personal/internship" element={<InternshipJourney />} />
          <Route path="/personal/goals" element={<Goals />} />
          {/* Add other routes */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes; 