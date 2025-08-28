import React, { useState } from 'react';
import type { FC } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    Container,
    Paper,
    Divider,
} from '@mui/material';
import { keyframes } from '@emotion/react';

import usePostData from '../service/usePostData';
import SuccessDialog from '../components/SuccessDialog';

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface RegistrationPayload {
    fullName: string;
    title: string;
    organization: string;
    galaDinner: boolean;
    bankTransfer: boolean;
    joinDay1: boolean;
    joinDay2: boolean;
    requestBusService: boolean;
}

interface RegisterPageProps { }

const RegisterPage: FC<RegisterPageProps> = () => {
    const [formData, setFormData] = useState<RegistrationPayload>({
        fullName: '',
        title: '',
        organization: '',
        galaDinner: false,
        bankTransfer: false,
        joinDay1: false,
        joinDay2: false,
        requestBusService: false,
    });

    const [errors, setErrors] = useState<{
        fullName?: string;
        title?: string;
        organization?: string;
        form?: string;
    }>({});

    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

    const { loading, error, postData } = usePostData<RegistrationPayload>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = (): boolean => {
        const temp: { fullName?: string; title?: string; organization?: string } = {};
        if (!formData.fullName) temp.fullName = 'Full Name is required.';
        if (!formData.title) temp.title = 'Title is required.';
        if (!formData.organization) temp.organization = 'Organization is required.';
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const ok = await postData(formData);
        if (ok) {
            setOpenSuccessDialog(true);
            setFormData({
                fullName: '',
                title: '',
                organization: '',
                galaDinner: false,
                bankTransfer: false,
                joinDay1: false,
                joinDay2: false,
                requestBusService: false,
            });
            setErrors({});
        } else {
            console.error(error);
        }
    };

    const handleCloseSuccessDialog = () => {
        setOpenSuccessDialog(false);
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#e0f2f1',
                backgroundSize: '400% 400%',
                animation: `${shimmer} 15s ease infinite`,
                py: 2,
            }}
        >
            <Container component="main" maxWidth="xs">
                <Paper
                    elevation={8}
                    sx={{
                        p: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(5px)',
                        boxShadow: '0 4px 12px 0 rgba(31, 38, 135, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                    }}
                >
                    <Typography component="h1" variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#004d40' }}>
                        Event Registration
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            autoComplete="name"
                            autoFocus
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                            size="small"
                        />

                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            error={!!errors.title}
                            helperText={errors.title}
                            size="small"
                        />

                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            id="organization"
                            label="Organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            error={!!errors.organization}
                            helperText={errors.organization}
                            size="small"
                        />

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold', color: '#004d40' }}>
                            Event Options:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="joinDay1"
                                        checked={formData.joinDay1}
                                        onChange={handleChange}
                                        color="primary"
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">Join Day 1</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="joinDay2"
                                        checked={formData.joinDay2}
                                        onChange={handleChange}
                                        color="primary"
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">Join Day 2</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="galaDinner"
                                        checked={formData.galaDinner}
                                        onChange={handleChange}
                                        color="primary"
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">Option Gala dinner</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="requestBusService"
                                        checked={formData.requestBusService}
                                        onChange={handleChange}
                                        color="primary"
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">Request Bus Service</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="bankTransfer"
                                        checked={formData.bankTransfer}
                                        onChange={handleChange}
                                        color="primary"
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">Pay via Bank Transfer</Typography>}
                            />
                        </Box>

                        {formData.bankTransfer && (
                            <Box sx={{ mt: 2, p: 2, border: '1px dashed #ccc', borderRadius: 2, width: '100%', bgcolor: '#fafafa' }}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Bank Transfer Details:
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
                                    Bank Name: <Box component="span" sx={{ fontWeight: 700 }}>Vietcombank</Box>
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    Account Number: <Box component="span" sx={{ fontWeight: 700 }}>001-100-200-300</Box>
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    Account Holder: <Box component="span" sx={{ fontWeight: 700 }}>Event Organizer JSC</Box>
                                </Typography>
                                <Typography variant="caption" sx={{ mt: 1, display: 'block', fontStyle: 'italic', color: '#555' }}>
                                    (Please use your Full Name as the transaction reference.)
                                </Typography>
                            </Box>
                        )}

                        {error && (
                            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
                                {error}
                            </Typography>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 2,
                                mb: 1,
                                borderRadius: 1.5,
                                p: '8px 0',
                                fontWeight: 'bold',
                                fontSize: '0.8rem',
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Register Now'}
                        </Button>
                    </Box>
                </Paper>
            </Container>

            <SuccessDialog open={openSuccessDialog} onClose={handleCloseSuccessDialog} />
        </Box>
    );
};

export default RegisterPage;