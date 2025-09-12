import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import VguLogo from '../assets/lab_db140525v3.png';
import AnniLogo from '../assets/50th-Anni-Logo.jpg';

const StyledAppBarContainer = styled(Box)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  padding: isMobile ? theme.spacing(1, 1) : theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  borderRadius: isMobile ? 0 : theme.spacing(4),
  boxSizing: 'border-box',
}));

const StyledToolbar = styled(Toolbar)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  backgroundColor: 'white',
  borderRadius: isMobile ? 0 : theme.spacing(4),
  padding: isMobile ? theme.spacing(1) : theme.spacing(1, 3),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '1200px',
  position: 'relative',
  ...(isMobile
    ? {
      // MOBILE: logo trái, menu phải
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
    : {
      // DESKTOP: 3 cột (logo | nav | actions)
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      justifyContent: 'center',
    }),
}));

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Agenda', to: '/agenda' },
    { text: 'Green Hydrogen Hub', to: '/greenhub' },
    { text: 'Sustainability Challenge', to: '/student-competition' },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: '#E0F2F1' }}>
      <StyledAppBarContainer isMobile={isMobile}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', width: '100%' }}>
          <StyledToolbar isMobile={isMobile}>
            {/* Logo group (trái) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
              <Box
                component="img"
                src={VguLogo}
                alt="VGU Logo"
                sx={{ height: 50 }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = 'https://placehold.co/100x40/E5E7EB/1F2937?text=Logo';
                }}
              />
              <Box
                component="img"
                src={AnniLogo}
                alt="50th Anniversary Logo"
                sx={{ height: 50 }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = 'https://placehold.co/40x40/FCD34D/1F2937?text=Logo';
                }}
              />
            </Box>

            {/* Nav trung tâm (desktop) */}
            {!isMobile && (
              <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                  {navItems.map((item) => (
                    <Link
                      key={item.text}
                      component={RouterLink}
                      to={item.to}
                      color="text.primary"
                      underline="none"
                      sx={{
                        fontWeight: 'medium',
                        fontSize: '1.05rem',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {item.text}
                    </Link>
                  ))}
                </Box>
              </Box>
            )}

            {/* Actions (phải): Register (desktop) | Menu button (mobile) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
              {!isMobile && (
                <Button
                  variant="contained"
                  onClick={handleRegisterClick}
                  sx={{
                    backgroundColor: '#4CAF50',
                    '&:hover': { backgroundColor: '#388E3C' },
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    px: 2.5,
                    py: 1,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                  }}
                >
                  Register
                </Button>
              )}
              {isMobile && (
                <IconButton
                  aria-label="open menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ color: 'black' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </StyledToolbar>
        </AppBar>

        {/* Drawer (mobile) */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { borderRadius: 0 } }}
        >
          <Box sx={{ width: 260 }} role="presentation" onClick={() => setDrawerOpen(false)}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component={RouterLink} to={item.to}>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem disablePadding>
                <ListItemButton disableRipple>
                  <Button
                    onClick={handleRegisterClick}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#4CAF50',
                      '&:hover': { backgroundColor: '#388E3C' },
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      px: 2.5,
                      py: 1,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      mt: 2,
                    }}
                  >
                    Register
                  </Button>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </StyledAppBarContainer>
    </Box>
  );
};

export default Header;
