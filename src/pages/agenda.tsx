import React from 'react';
import { Box, Typography } from '@mui/material';

import Agenda from '../features/home/Agenda';
import { allAgendaData } from '../data/agendaData';

const AgendaPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                py: 2,
            }}
        >
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
                Conference Agenda
            </Typography>
            <Agenda data={allAgendaData} />
        </Box>
    );
};

export default AgendaPage;
