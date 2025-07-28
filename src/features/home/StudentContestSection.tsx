import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

import CampusImage from '../../assets/bg1.jpg';
import VguLogo from '../../assets/lab_db140525v3.png';
import LbrLogo from '../../assets/lbr.jpg';
import VsaLogo from '../../assets/vsa.jpg';

const SectionWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    margin: theme.spacing(4, 'auto'),
    maxWidth: '1280px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}));

const LeftImage = styled(Box)(() => ({
    backgroundImage: `url(${CampusImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 400,
}));

const RightContent = styled(Box)(({ theme }: { theme: Theme }) => ({
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(4),
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3),
    },
}));

const LogoRow = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.spacing(3),
    flexWrap: 'wrap',
}));

const DualBoxWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(2),
    transform: 'translateX(-90px)',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        transform: 'none',
    },
}));

const ContestBox = styled(Box)(({ theme }: { theme: Theme }) => ({
    backgroundColor: '#008080',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
    minWidth: 400,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        minWidth: '100%',
        padding: theme.spacing(2),
    },
}));

const VerticalVGU = styled(Typography)(({ theme }: { theme: Theme }) => ({
    position: 'absolute',
    left: theme.spacing(6),
    top: '90%',
    transform: 'translateY(-50%) rotate(-90deg)',
    transformOrigin: 'left center',
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: '4rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
        position: 'static',
        transform: 'none',
        fontSize: '2rem',
        marginBottom: theme.spacing(1),
    },
}));

const ContestText = styled(Box)(({ theme }: { theme: Theme }) => ({
    marginLeft: theme.spacing(10),
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        paddingTop: theme.spacing(1),
    },
}));

const ContactBox = styled(Box)(({ theme }: { theme: Theme }) => ({
    backgroundColor: '#F5F5F5',
    color: '#333',
    padding: theme.spacing(3),
    minWidth: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const StudentContestSection: React.FC = () => {
    return (
        <SectionWrapper>
            <LeftImage />
            <RightContent>
                <LogoRow>
                    <Box component="img" src={VguLogo} alt="VGU Logo" sx={{ height: 50 }} />
                    <Box component="img" src={VsaLogo} alt="VSA Logo" sx={{ height: 50 }} />
                    <Box component="img" src={LbrLogo} alt="Library Logo" sx={{ height: 50 }} />
                </LogoRow>

                <DualBoxWrapper>
                    <ContestBox>
                        <VerticalVGU variant="h2">VGU</VerticalVGU>
                        <ContestText>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.2rem', md: '1.6rem' } }}>
                                Student Sustainability Contest
                            </Typography>
                            <Typography variant="h6" sx={{ fontStyle: 'italic', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                                Green Future Challenge 2025
                            </Typography>
                        </ContestText>
                    </ContestBox>

                    <ContactBox>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#F57C00' }}>
                            CONTACT
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#098a78', fontSize: '1rem', }}>
                            Ms. Huynh Ngoc Thanh
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            VSA President
                        </Typography>
                        <Link href="mailto:thanh.hn@vgu.edu.vn" underline="hover" color="inherit" sx={{ display: 'block', mb: 0.5 }}>
                            thanh.hn@vgu.edu.vn
                        </Link>
                        <Typography variant="body2">(0274) 222 0990 - Ext. 28101</Typography>
                    </ContactBox>
                </DualBoxWrapper>
            </RightContent>
        </SectionWrapper>
    );
};

export default StudentContestSection;
