import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomepageImage from '../../assets/Homepage-img-scaled.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  maxWidth: '1280px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
}));

const HeaderContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: theme.spacing(4),
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

const EventInfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignSelf: 'flex-end',
}));

const MainImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  marginTop: theme.spacing(4),
}));

const InfoItemsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: theme.spacing(2),
  marginTop: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  backgroundColor: 'white',
  borderRadius: '50%',
  width: 80,
  height: 80,
  justifyContent: 'center',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  flexShrink: 0,
  position: 'relative',
  '&::before': {
    content: 'attr(data-number)',
    position: 'absolute',
    top: -theme.spacing(1),
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  [theme.breakpoints.down('sm')]: {
    width: 60,
    height: 60,
    '&::before': {
      width: 20,
      height: 20,
      fontSize: '0.7rem',
    }
  }
}));

const InfoText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(1),
  fontSize: '0.9rem',
  fontWeight: 'medium',
  color: theme.palette.text.secondary,
  maxWidth: 150,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    maxWidth: 120,
  }
}));

const HomepageContent: React.FC = () => {
  return (
    <HeroSection>
      <ContentContainer>
        <HeaderContent>
          <Box>
            <Typography variant="h3" component="h1" sx={{
              fontWeight: 'bold',
              color: '#333',
              mb: 2,
              lineHeight: 1.2,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' }
            }}>
              Fostering Green <br /> Science And Innovation
            </Typography>
            <Typography variant="h6" sx={{
              color: '#555',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}>
              50-Year Anniversary of Diplomatic Relations Between Vietnam and Germany
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4CAF50',
                '&:hover': {
                  backgroundColor: '#388E3C',
                },
                borderRadius: '8px',
                fontWeight: 'bold',
                padding: '12px 30px',
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              LEARN MORE
            </Button>
          </Box>
          <EventInfoBox>
            <Typography variant="body1" sx={{ color: '#666', fontWeight: 'bold' }}>
              DATE: 23/10/2025 - 24/10/2025
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', fontWeight: 'bold' }}>
              VENUE: VGU Campus
            </Typography>
          </EventInfoBox>
        </HeaderContent>
        <MainImageBox>
          <Box
            component="img"
            src={HomepageImage}
            alt="Fostering Green Science And Innovation"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 2,
            }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = "https://placehold.co/1200x600/E0F2F1/1F2937?text=Homepage+Image";
            }}
          />
        </MainImageBox>
        <InfoItemsContainer>
          {[
            { number: '01', text: 'Opening Ceremony' },
            { number: '02', text: 'Welcome Speech' },
            { number: '03', text: 'Promote green science through bilateral cooperation speech' },
            { number: '04', text: 'Sustainability Projects' },
          ].map((item) => (
            <Box key={item.number} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <InfoItem data-number={item.number} />
              <InfoText>{item.text}</InfoText>
            </Box>
          ))}
        </InfoItemsContainer>
      </ContentContainer>
    </HeroSection>
  );
};

export default HomepageContent;
