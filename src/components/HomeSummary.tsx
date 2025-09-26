import { Box, Typography, Container } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

import Logo from '../assets/conference/logo.png';

const HomeSummary = () => {
    return (
        <Box sx={{ py: 8, bgcolor: '#f0f4f8' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <img src={Logo} alt="Green Hydrogen Hub Viet Nam Logo" style={{ height: 100 }} />
                </Box>

                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ color: '#005f73', fontWeight: 'bold', mb: 2 }}
                >
                    GREEN HYDROGEN HUB VIET NAM
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 4,
                        textAlign: 'justify',
                        display: 'block',
                    }}
                >
                    A central platform for meeting, workshops and technological showcases, based at the
                    Vietnamese-German University (VGU) campus in Binh Duong. The Hub operates as a
                    <Box component="span" sx={{ color: '#005f73', fontWeight: 'bold' }}> public-private partnership (PPP)</Box>
                    project with GIZ as the public partner and a consortium of international & Vietnamese companies as the private partner.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 4, sm: 2 },
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ textAlign: 'center', p: 2, flex: 1, maxWidth: 300 }}>
                        <LightbulbOutlinedIcon sx={{ fontSize: 50, color: '#ffb703', mb: 1 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Knowledge Sharing
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                            Access cutting-edge knowledge and technologies.
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', p: 2, flex: 1, maxWidth: 300 }}>
                        <SchoolOutlinedIcon sx={{ fontSize: 50, color: '#023e8a', mb: 1 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Capacity Building
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                            Gain insights from exclusive webinars & training.
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', p: 2, flex: 1, maxWidth: 300 }}>
                        <GroupsOutlinedIcon sx={{ fontSize: 50, color: '#0077b6', mb: 1 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Networking
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                            Connect with key players and discover opportunities.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeSummary;