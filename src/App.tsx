import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import StudentCompetition from './pages/student-competition';
import Conference from './pages/conference';
import AgendaPage from './pages/agenda';
import RegisterPage from './pages/register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#FFF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-competition" element={<StudentCompetition />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
