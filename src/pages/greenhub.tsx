import { Box, Typography, List, ListItem, Container } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../assets/conference/logo.png';
import Partner from '../assets/conference/partner.png';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EventsCard from '../features/greenhub/EventsCard';

const SectionContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
}));


const GreenHydrogenHub = () => {
    return (
        <Container maxWidth="lg" sx={{ fontFamily: 'sans-serif' }}>
            {/* Logo chính */}
            <Box sx={{ padding: '2rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Logo} alt="Green Hydrogen Hub Viet Nam Logo" style={{ height: 150 }} />
            </Box>

            {/* Main Description */}
            <SectionContainer>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ color: '#005f73', fontWeight: 'bold', mb: 2, textAlign: 'center' }}
                >
                    GREEN HYDROGEN HUB VIET NAM
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, textAlign: 'center' }}>
                    A central platform for meeting, workshops and technological showcases, based at the
                    Vietnamese-German University (VGU) campus in Binh Duong. The Hub operates as a
                    <Box component="span" sx={{ color: '#005f73', fontWeight: 'bold' }}> public-private partnership (PPP)</Box>
                    project with GIZ as the public partner and a consortium of international & Vietnamese companies as the private partner.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <img
                        src={Partner}
                        alt="Partner Logos"
                        style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
                    />
                </Box>
            </SectionContainer>

            {/* Aims and Serves Section */}
            <Box sx={{ padding: '2rem', textAlign: 'left', maxWidth: '800px', mx: 'auto' }}>
                <Typography variant="body1">
                    The Green Hydrogen Hub Viet Nam aims to unlock Viet Nam's green hydrogen potential & serves as:
                </Typography>
                <List>
                    <ListItem disablePadding sx={{ alignItems: "flex-start" }}>
                        <Typography variant="body1">
                            <Box component="span" sx={{ fontWeight: "bold", color: "#005f73" }}>
                                • A Centre of Excellence
                            </Box>{" "}
                            to develop a skilled workforce in green hydrogen.
                        </Typography>
                    </ListItem>

                    <ListItem disablePadding sx={{ alignItems: "flex-start" }}>
                        <Typography variant="body1">
                            <Box component="span" sx={{ fontWeight: "bold", color: "#005f73" }}>
                                • A demonstration platform
                            </Box>{" "}
                            showcasing green hydrogen real-world technologies.
                        </Typography>
                    </ListItem>

                    <ListItem disablePadding sx={{ alignItems: "flex-start" }}>
                        <Typography variant="body1">
                            <Box component="span" sx={{ fontWeight: "bold", color: "#005f73" }}>
                                • A business consortium
                            </Box>{" "}
                            connecting stakeholders across the hydrogen value chain.
                        </Typography>
                    </ListItem>
                </List>
            </Box>

            {/* What the Hub Offers Section */}
            <SectionContainer>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ color: '#005f73', fontWeight: 'bold', mb: 4, textAlign: 'center' }}
                >
                    WHAT THE HUB OFFERS
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
                    <Box sx={{ flex: '1 1 250px', maxWidth: 300, textAlign: 'center', p: 2 }}>
                        <LightbulbOutlinedIcon sx={{ fontSize: 60, color: '#ffb703', mb: 1 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                            Knowledge sharing
                        </Typography>
                        <Typography variant="body2">
                            Access cutting-edge green hydrogen knowledge & technologies
                        </Typography>
                    </Box>

                    <Box sx={{ flex: '1 1 250px', maxWidth: 300, textAlign: 'center', p: 2 }}>
                        <SchoolOutlinedIcon sx={{ fontSize: 60, color: '#023e8a', mb: 1 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                            Capacity building
                        </Typography>
                        <Typography variant="body2">
                            Gain valuable insights through exclusive green hydrogen webinars & training sessions
                        </Typography>
                    </Box>

                    <Box sx={{ flex: '1 1 250px', maxWidth: 300, textAlign: 'center', p: 2 }}>
                        <GroupsOutlinedIcon sx={{ fontSize: 60, color: '#0077b6', mb: 1 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                            Networking
                        </Typography>
                        <Typography variant="body2">
                            Connect key players & discover green hydrogen partnership and joint venture opportunities
                        </Typography>
                    </Box>
                </Box>
            </SectionContainer>

            <EventsCard />

        </Container>
    );
};

export default GreenHydrogenHub;