import React from 'react';
import { Box } from '@mui/material';
import HomepageContent from '../features/home/HomepageContent';
import EventInfoSection from '../features/home/EventInfoSection';
import StudentContestSection from '../features/home/StudentContestSection'
import HomeSummary from '../components/HomeSummary';
import SponsorsSection from '../components/SponsorsSection';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <HomepageContent />
            <EventInfoSection />
            <HomeSummary />
            <StudentContestSection />
            <SponsorsSection />
        </Box>
    );
};

export default Home;
