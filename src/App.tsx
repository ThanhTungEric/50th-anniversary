import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/MenuBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import StudentCompetition from './pages/student-competition';
import GreenHydrogenHub from './pages/greenhub';
import AgendaPage from './pages/agenda';
import DocumentViewerPage from './pages/DocumentViewerPage';
import Session2 from './pages/session2';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-competition" element={<StudentCompetition />} />
        <Route path="/greenhub" element={<GreenHydrogenHub />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/documents" element={<DocumentViewerPage />} />
        <Route path="/circular_economy_and_sustainable_business" element={<Session2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;