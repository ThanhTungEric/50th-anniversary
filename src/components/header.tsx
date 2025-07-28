import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

// Import các hình ảnh logo
import VguLogo from '../assets/lab_db140525v3.png';
import AnniLogo from '../assets/50th-Anni-Logo.jpg';

const StyledAppBarContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  borderRadius: theme.spacing(4),
  boxSizing: 'border-box',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(1, 3),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1200px',
  position: 'relative',
}));

const Header: React.FC = () => {
  return (
    <StyledAppBarContainer>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', width: '100%' }}>
        <StyledToolbar>

          {/* LEFT: Logo + 51 badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src={VguLogo} // Sử dụng logo đã import
              alt="VGU Logo"
              sx={{ height: 40}}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = "https://placehold.co/100x40/E5E7EB/1F2937?text=Logo"; // Fallback
              }}
            />
            <Box
              component="img"
              src={AnniLogo} // Sử dụng logo đã import
              alt="50th Anniversary Logo"
              sx={{ height: 40}}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = "https://placehold.co/40x40/FCD34D/1F2937?text=Logo"; // Fallback
              }}
            />
          </Box>

          {/* CENTER: Navigation menu */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
              {['Home', 'Event Info', 'Agenda', 'Student Competition'].map((text) => (
                <Link
                  key={text}
                  href="#"
                  color="text.primary"
                  underline="none"
                  sx={{
                    fontWeight: 'medium',
                    fontSize: '1.1rem',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Box>

          {/* RIGHT: Register button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF50',
              '&:hover': {
                backgroundColor: '#388E3C',
              },
              borderRadius: '25px',
              fontWeight: 'bold',
              padding: '10px 25px',
              fontSize: '1rem',
              textTransform: 'none',
            }}
          >
            Register
          </Button>

        </StyledToolbar>
      </AppBar>
    </StyledAppBarContainer>
  );
};

export default Header;
