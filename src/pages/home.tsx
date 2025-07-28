import React from 'react';
import { Box } from '@mui/material';
import HomepageContent from '../features/home/HomepageContent';

const Home: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <HomepageContent />
        </Box>
    );
};

export default Home;
