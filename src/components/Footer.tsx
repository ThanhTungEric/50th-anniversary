import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnniLogo from '../assets/lab_db140525v3.png';

const FooterContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  padding: theme.spacing(6, 0, 2),
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0, 2),
    marginTop: theme.spacing(4),
  },
}));

const FooterContent = styled(Container)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  fontSize: '1.1rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
  },
}));


const CopyrightSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.9rem',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, minWidth: '250px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              component="img"
              src={AnniLogo}
              alt="50th Anniversary Logo"
              sx={{ height: 40, mr: 1 }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = 'https://placehold.co/40x40/FCD34D/1F2937?text=Logo';
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              50th anniversary
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
            Nisl libero ullamcorper id ipsum viverra mauris non pellentesque placerat lorem lacinia sagittis non pretium aliquet, fames quo.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="#" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'right' }, minWidth: '250px' }}>
          <SectionTitle>CONTACT INFO</SectionTitle>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
            Jl. Niti Mandala Renon No.88, <br />
            Denpasar, Bali - 80239
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
            Phone : (318) 212-3456
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Email : xyz@example.com
          </Typography>
        </Box>
      </FooterContent>

      <CopyrightSection>
        <Typography variant="body2">
          © 2025. 50th anniversary. All rights reserved
        </Typography>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
