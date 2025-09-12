import React from 'react';
import { Box, Typography, Link } from '@mui/material';

interface AgendaItemProps {
    item: {
        Time: string;
        Activity: string;
        Details?: string;
        Venue: string;
        type?: 'default' | 'special' | 'other';
    };
}

interface DayData {
    day: string;
    agenda: AgendaItemProps['item'][];
}

interface AgendaProps {
    data: DayData[];
}

const getBorderColor = (type: string | undefined): string => {
    switch (type) {
        case 'special':
            return '#e57373';
        case 'other':
            return '#64b5f6';
        default:
            return '#e0e0e0';
    }
};

const splitTime = (range: string): [string, string] => {
    const parts = range.split('-').map((s) => s.trim());
    if (parts.length >= 2) return [parts[0], parts[1]];
    return [range, ''];
};

const AgendaItem: React.FC<AgendaItemProps> = ({ item }) => {
    const borderColor = getBorderColor(item.type);
    const [start, end] = splitTime(item.Time);
    const isParallelSessions1 = item.Activity === "Parallel Sessions #1";
    const isParallelSessions2 = item.Activity === "Parallel Sessions #2";

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'grid',
                gridTemplateAreas: {
                    xs: `"time content" "time meta"`,
                    sm: `"time content venue"`,
                },
                gridTemplateColumns: {
                    xs: '72px 1fr',
                    sm: '120px 1fr 150px',
                    md: '120px 1fr 180px',
                },
                columnGap: { xs: 1.5, sm: 2 },
                rowGap: { xs: 0.5, sm: 1 },
                py: 2,
                borderLeft: { xs: `2px solid ${borderColor}`, sm: `3px solid ${borderColor}` },
                pl: { xs: 1.5, sm: 2 },
                ml: { xs: 0.5, sm: 1 },
            }}
        >
            <Box
                sx={{
                    gridArea: 'time',
                    color: 'text.secondary',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 0.25,
                    minWidth: 0,
                }}
            >
                <Typography
                    variant="caption"
                    sx={{ fontWeight: 700, lineHeight: 1.2, display: 'block' }}
                >
                    {start}
                </Typography>
                {!!end && (
                    <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                        {end}
                    </Typography>
                )}
            </Box>

            <Box
                sx={{
                    gridArea: 'content',
                    minWidth: 0,
                }}
            >
                {isParallelSessions1 ? (
                    <Link
                        href="https://icsud.vgu.edu.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                    >
                        <Typography
                            variant="body1"
                            fontWeight="medium"
                            sx={{ wordBreak: 'break-word' }}
                        >
                            {item.Activity}
                        </Typography>
                    </Link>
                ) : (
                    <Typography
                        variant="body1"
                        fontWeight="medium"
                        sx={{ wordBreak: 'break-word' }}
                    >
                        {item.Activity}
                    </Typography>
                )}
                {item.Details && (
                    isParallelSessions2 ? (
                        <Box sx={{ mt: 1, maxWidth: '100%' }}>
                            <img src="/call-for-abs.jpg" alt="Call for Abstracts" style={{ width: '100%', height: 'auto' }} />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 0.25, fontStyle: 'italic' }}
                            >
                                {item.Details}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.25, fontStyle: 'italic', whiteSpace: 'pre-line' }}
                        >
                            {item.Details}
                        </Typography>
                    )
                )}
            </Box>

            <Box
                sx={{
                    gridArea: { xs: 'meta', sm: 'venue' },
                    color: 'text.secondary',
                    textAlign: { xs: 'right', sm: 'right' },
                    mt: { xs: 0.25, sm: 0 },
                }}
            >
                <Typography variant="body2">{item.Venue}</Typography>
            </Box>
        </Box>
    );
};

const DaySection: React.FC<{ dayData: DayData }> = ({ dayData }) => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, pl: { xs: 1, sm: 2 } }}>
                {dayData.day}
            </Typography>
            {dayData.agenda.map((item, idx) => (
                <AgendaItem key={idx} item={item} />
            ))}
        </Box>
    );
};

const Agenda: React.FC<AgendaProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <Typography>No agenda data available.</Typography>;
    }

    return (
        <Box
            sx={{
                maxWidth: { xs: '100%', sm: 720, md: 800 },
                mx: 'auto',
                px: { xs: 1, sm: 2 },
                py: { xs: 1, sm: 2 },
            }}
        >
            {data.map((dayData, dayIndex) => (
                <DaySection key={dayIndex} dayData={dayData} />
            ))}
        </Box>
    );
};

export default Agenda;
