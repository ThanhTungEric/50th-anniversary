import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import EventInfoImgTall from '../../assets/event-info-img-2-copy-1-1170x1536.jpg';
import EventInfoImgSquare from '../../assets/event-info-img-1536x1536.jpg';

const EventInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const EventInfoContent = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(8),
  alignItems: 'flex-start',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
  },
}));

const ImageColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    '& img:first-of-type': {
      alignSelf: 'flex-start',
    },
    '& img:last-of-type': {
      alignSelf: 'flex-end',
    },
  },
}));

const TextColumn = styled(Box)({
  textAlign: 'left',
});

const KeyThemeBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(224, 242, 241, 0.7)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const EventInfoSection: React.FC = () => {
  return (
    <EventInfoContainer>
      <EventInfoContent>
        <ImageColumn>
          <Box
            component="img"
            src={EventInfoImgTall}
            alt="Event Image 1"
            sx={{
              width: '100%',
              maxWidth: { xs: '300px', sm: '400px', md: '350px' },
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
            }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = 'https://placehold.co/350x450/E0F2F1/1F2937?text=Image+1';
            }}
          />
          <Box
            component="img"
            src={EventInfoImgSquare}
            alt="Event Image 2"
            sx={{
              width: '100%',
              maxWidth: { xs: '250px', sm: '350px', md: '300px' },
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
              marginTop: { xs: 2, md: -8 },
              marginLeft: { xs: 0, md: 'auto' },
            }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = 'https://placehold.co/300x300/E0F2F1/1F2937?text=Image+2';
            }}
          />
        </ImageColumn>

        <TextColumn>
          <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold', display: 'block', mb: 1 }}>
            | EVENT INFORMATION
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              mb: 3,
              lineHeight: 1.2,
              fontSize: { xs: '1.3rem', md: '1.6rem', lg: '1.8rem' },
            }}
          >
            Fostering Green Science and Innovation: A Conference Celebrating 50 Years of Vietnam-Germany Diplomatic Relations
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
            In celebration of the 50th anniversary of diplomatic relations between Vietnam and Germany, this landmark conference - Fostering Green Science and Innovation - brings together leading voices from academia, industry and policy to explore sustainable scientific and technological collaboration between the two nations
          </Typography>

          <KeyThemeBox>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
              Key theme will include:
            </Typography>
            <List dense sx={{ '& .MuiListItem-root': { py: 0.1 } }}>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <FiberManualRecordIcon sx={{ fontSize: '0.6rem', color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Environmental Sustainability Towards Net 0." sx={{ color: '#555' }} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <FiberManualRecordIcon sx={{ fontSize: '0.6rem', color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Water Technology: Waste Management; Climate Adaption." sx={{ color: '#555' }} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <FiberManualRecordIcon sx={{ fontSize: '0.6rem', color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Green Technologies & Smart Infrastructure." sx={{ color: '#555' }} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <FiberManualRecordIcon sx={{ fontSize: '0.6rem', color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Digital Transformation for Sustainability." sx={{ color: '#555' }} />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <FiberManualRecordIcon sx={{ fontSize: '0.6rem', color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Business & Green Economy" sx={{ color: '#555' }} />
              </ListItem>
            </List>
            <Typography variant="body1" sx={{ color: '#555' }}>
              Through keynote speeches, expert panel discussions, and networking sessions, the conference aims to inspire actionable pathways for continued bilateral cooperation and to celebrate the shared commitment of Vietnam and Germany to a greener, more resilient world.
            </Typography>
          </KeyThemeBox>
        </TextColumn>
      </EventInfoContent>
    </EventInfoContainer>
  );
};

export default EventInfoSection;
