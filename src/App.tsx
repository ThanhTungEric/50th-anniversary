import Header from './components/header'; // Điều chỉnh đường dẫn nếu cần
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Để thiết lập CSS cơ bản của MUI

// Tạo một theme cơ bản cho MUI
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
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Welcome to the Event Website!
        </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;