import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomepageImage from '../../assets/Homepage-img-scaled.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#E0F2F1',
  padding: theme.spacing(8, 0),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },

}));

const ContentContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
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
}));



const HomepageContent: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };
  return (
    <HeroSection>
      <ContentContainer>
        <HeaderContent>
          <Box>
            <Typography variant="h3" component="h1" sx={{
              fontWeight: 'bold',
              color: '#333',
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: '1.8rem', md: '2.4rem', lg: '3rem' }
            }}>
              Fostering Green <br /> Science And Innovation
            </Typography>
            <Typography variant="h6" sx={{
              color: '#555',
              mb: 1,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}>
              50-Year Anniversary of Diplomatic Relations between Vietnam and Germany
            </Typography>
            <Button
              onClick={handleRegisterClick}
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
              Register
            </Button>
          </Box>
          <EventInfoBox>
            <Typography variant="body1" sx={{ color: '#666', fontWeight: 'bold' }}>
              Date: 23 - 24/10/2025
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', fontWeight: 'bold' }}>
              Venue: VGU Campus, Ring road 4, Quarter 4, Thoi Hoa Ward, Ho Chi Minh City
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
      </ContentContainer>
    </HeroSection>
  );
};

export default HomepageContent;
