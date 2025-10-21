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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

import VguLogo from '../assets/lab_db140525v3.png';
import AnniLogo from '../assets/50th-Anni-Logo.jpg';

const StyledToolbar = styled(Toolbar)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(3px)',
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
  borderRadius: 0,
  width: '100%',
  padding: 0,
  minHeight: isMobile ? 64 : 80,
}));

const Header: React.FC = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // navigate('/register'); // Remove navigation
    setDialogOpen(true); // Open the dialog instead of navigating
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Agenda', to: '/agenda' },
    { text: 'Green Hydrogen Hub', to: '/greenhub' },
    { text: 'Sustainability Challenge', to: '/student-competition' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          boxShadow: 'none',
          backgroundColor: 'transparent',
          padding: 0,
          width: '100%',
        }}
      >
        <StyledToolbar isMobile={isMobile}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isMobile ? theme.spacing(1, 2) : theme.spacing(1, 4),
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
              <Box
                component="img"
                src={VguLogo}
                alt="VGU Logo"
                sx={{ height: 50, cursor: 'pointer' }}
                onClick={() => navigate('/')}
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

            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexGrow: 1,
                  flexShrink: 1,
                  maxWidth: '700px',
                  mx: 2,
                }}
              >
                <Box sx={{ display: 'flex', gap: 3 }}>
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Link
                        key={item.text}
                        component={RouterLink}
                        to={item.to}
                        color="text.primary"
                        underline="none"
                        tabIndex={0}
                        sx={{
                          fontWeight: 'medium',
                          fontSize: '1.05rem',
                          px: 1.5,
                          py: 0.5,
                          transition: 'all 0.3s ease',
                          borderRadius: 0,
                          ...(isActive && {
                            border: '2px solid',
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                            py: 0.3,
                          }),
                          '&:hover': {
                            color: theme.palette.primary.main,
                            opacity: 0.8,
                          },
                          '&:focus-visible': {
                            outline: `2px solid ${theme.palette.secondary.main}`,
                            outlineOffset: '2px',
                            borderRadius: 0,
                          },
                        }}
                      >
                        {item.text}
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
              {!isMobile && (
                <Button
                  variant="contained"
                  onClick={handleRegisterClick}
                  tabIndex={0}
                  sx={{
                    backgroundColor: theme.palette.success.main,
                    '&:hover': { backgroundColor: theme.palette.success.dark },
                    borderRadius: 0,
                    boxShadow: 'none',
                    fontWeight: 'bold',
                    px: 2.5,
                    py: 1,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    '&:focus-visible': {
                      outline: `2px solid ${theme.palette.secondary.dark}`,
                      outlineOffset: '2px',
                      borderRadius: 0,
                      boxShadow: theme.shadows[3],
                    },
                  }}
                >
                  Register
                </Button>
              )}
              {isMobile && (
                <IconButton
                  aria-label="open menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ color: theme.palette.text.primary }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </StyledToolbar>
      </AppBar>

      <Box
        sx={{
          marginTop: '70px',
          [theme.breakpoints.up('md')]: {
            marginTop: '80px',
          },
        }}
      >
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { borderRadius: 0 } }}
      >
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={item.to}
                    sx={{
                      ...(isActive && {
                        borderLeft: '4px solid',
                        borderColor: theme.palette.primary.main,
                        backgroundColor: theme.palette.action.selected,
                      }),
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}

            <ListItem disablePadding>
              <ListItemButton disableRipple sx={{ display: 'block', pt: 0, pb: 0 }}>
                <Button
                  onClick={handleRegisterClick}
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: theme.palette.success.main,
                    '&:hover': { backgroundColor: theme.palette.success.dark },
                    borderRadius: 0,
                    fontWeight: 'bold',
                    px: 2.5,
                    py: 1,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    mt: 2,
                    mx: 'auto',
                    display: 'block'
                  }}
                >
                  Register
                </Button>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="registration-closed-dialog-title"
        aria-describedby="registration-closed-dialog-description"
      >
        <DialogTitle id="registration-closed-dialog-title">
          Registration Notice
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="registration-closed-dialog-description">
            The registration portal is closed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Header;