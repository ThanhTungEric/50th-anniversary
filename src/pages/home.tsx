import React from 'react';
import { Box } from '@mui/material';
import HomepageContent from '../features/home/HomepageContent';
import EventInfoSection from '../features/home/EventInfoSection';
import StudentContestSection from '../features/home/StudentContestSection'

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
            <EventInfoSection/>
            <StudentContestSection/>
        </Box>
    );
};

export default Home;
