import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface Sponsor {
    name: string;
    logoFileName: string;
    level: 'Gold' | 'Silver' | 'Bronze';
}

const sponsorsData: Sponsor[] = [
    { name: 'UK Government Centres of Expertise Green Cities, Infrastructure and Energy', logoFileName: '1-uk-government-green-cities-infrastructure-energy-coe.png', level: 'Gold' },
    { name: 'Hans Seidel Stiftung', logoFileName: '2-hanns-seidel-stiftung-hss-logo.svg', level: 'Gold' },
    { name: 'DHG Technology', logoFileName: '3-dhg-technology.jpg', level: 'Gold' },
    { name: 'Ecco', logoFileName: '4-ecco.jpg', level: 'Silver' },
    { name: 'Vietcombank', logoFileName: '7.logo-vietcombank.png', level: 'Bronze' },
    { name: 'Dan on Food', logoFileName: '5-dan-on-food-logo.png', level: 'Bronze' },
    { name: 'Techcombank', logoFileName: 'techcombank-logo_brandlogos.net_1dcg9.png', level: 'Bronze' },
];

const getLogoPath = (fileName: string) => {
    return `/images/${fileName}`;
};

const logoFixedSizeMap: { [key in Sponsor['level']]: { width: number, height: number } } = {
    Gold: { width: 180, height: 80 },
    Silver: { width: 120, height: 60 },
    Bronze: { width: 115, height: 60 },
};

const techcombankSize = { width: 150, height: 70 };
const hansSeidelSize = { width: 140, height: 70 };

const SponsorsSection: React.FC = () => {
    const groupedSponsors = sponsorsData.reduce((acc, sponsor) => {
        (acc[sponsor.level] = acc[sponsor.level] || []).push(sponsor);
        return acc;
    }, {} as Record<Sponsor['level'], Sponsor[]>);

    const sponsorshipLevels: Sponsor['level'][] = ['Gold', 'Silver', 'Bronze'];

    return (
        <Box sx={{ py: 6, backgroundColor: '#fff' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                    Sponsors
                </Typography>

                {sponsorshipLevels.map((level) => {
                    const sponsors = groupedSponsors[level];
                    if (!sponsors || sponsors.length === 0) return null;

                    const defaultSize = logoFixedSizeMap[level];

                    return (
                        <Box key={level} sx={{ mb: 4 }}>
                            <Typography variant="h5" component="h3" align="center"
                                sx={{
                                    textTransform: 'uppercase',
                                    mb: 2,
                                    color: level === 'Gold' ? '#FFD700' : level === 'Silver' ? '#A9A9A9' : '#CD7F32',
                                    fontWeight: '700'
                                }}>
                                {level} Sponsors
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 3,
                                }}
                            >
                                {sponsors.map((sponsor, index) => {
                                    let currentLogoSize = defaultSize;

                                    if (sponsor.name === 'Techcombank' && level === 'Bronze') {
                                        currentLogoSize = techcombankSize;
                                    } else if (sponsor.name === 'Hans Seidel Stiftung' && level === 'Gold') {
                                        currentLogoSize = hansSeidelSize;
                                    }

                                    const logoStyle: React.CSSProperties = {
                                        width: `${currentLogoSize.width}px`,
                                        height: `${currentLogoSize.height}px`,
                                        objectFit: 'contain',
                                        transition: 'opacity 0.3s ease',
                                    };

                                    return (
                                        <Box key={index} sx={{ textAlign: 'center' }}>
                                            <Box
                                                component="img"
                                                src={getLogoPath(sponsor.logoFileName)}
                                                alt={`Logo ${sponsor.name}`}
                                                sx={logoStyle}
                                            />
                                        </Box>
                                    );
                                })}
                            </Box>
                            {level !== sponsorshipLevels[sponsorshipLevels.length - 1] && (
                                <Box sx={{ borderBottom: '1px solid #ddd', my: 4 }} />
                            )}
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
};

export default SponsorsSection;