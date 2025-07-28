import Header from './components/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    }, background: {
      default: '#E0F2F1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;