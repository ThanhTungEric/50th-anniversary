import React, { useState, type FC } from 'react';
import {
    Box,
    Typography,
    Container,
    Paper,
    Divider,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    RadioGroup,
    Radio
} from '@mui/material';
import { keyframes } from '@emotion/react';

import usePostData from '../service/usePostData';
import SuccessDialog from '../components/SuccessDialog';
import PlainTextBox from '../components/PlainTextBox';
import CustomButton from '../components/CustomButton';

const shimmer = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

interface RegistrationPayload {
    fullName: string;
    title: string;
    organization: string;
    phone: string;
    email: string;
    eventChoices: string[];
    busRoute: string;
    bankTransfer: boolean;
}

interface RegisterPageProps { }

const RegisterPage: FC<RegisterPageProps> = () => {
    const [formData, setFormData] = useState<RegistrationPayload>({
        fullName: '',
        title: '',
        organization: '',
        phone: '',
        email: '',
        eventChoices: [],
        busRoute: '',
        bankTransfer: false,
    });

    const [errors, setErrors] = useState<{
        fullName?: string;
        title?: string;
        organization?: string;
        phone?: string;
        email?: string;
        eventChoices?: string;
        busRoute?: string;
    }>({});

    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

    const { loading, error, postData } = usePostData<RegistrationPayload>();

    const handleChange = (name: keyof RegistrationPayload, value: string | number) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleEventChoiceChange = (selectedValues: string[]) => {
        setFormData((prev) => ({
            ...prev,
            eventChoices: selectedValues,
            bankTransfer: selectedValues.includes('galaDinner') ? true : false,
            busRoute: selectedValues.includes('requestBusService') ? prev.busRoute : '',  // Reset busRoute if "requestBusService" is unchecked
        }));
        setErrors((prev) => ({ ...prev, eventChoices: undefined, busRoute: undefined }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const validateForm = (): boolean => {
        const tempErrors: typeof errors = {};
        if (!formData.fullName) tempErrors.fullName = 'Full Name is required.';
        if (!formData.phone) tempErrors.phone = 'Phone Number is required.';
        if (!formData.email) tempErrors.email = 'Email is required.';
        if (!formData.title) tempErrors.title = 'Title is required.';
        if (!formData.organization) tempErrors.organization = 'Organization is required.';
        if (formData.eventChoices.includes('requestBusService') && !formData.busRoute) {
            tempErrors.busRoute = 'Please select a bus route.';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const payload = {
            ...formData,
            joinDay1: formData.eventChoices.includes('joinDay1'),
            joinDay2: formData.eventChoices.includes('joinDay2'),
            galaDinner: formData.eventChoices.includes('galaDinner'),
            requestBusService: formData.eventChoices.includes('requestBusService'),
        };

        const ok = await postData(payload);
        if (ok) {
            setOpenSuccessDialog(true);
            setFormData({
                fullName: '',
                title: '',
                organization: '',
                phone: '',
                email: '',
                eventChoices: [],
                busRoute: '',
                bankTransfer: false,
            });
            setErrors({});
        } else {
            console.error(error);
        }
    };

    const handleCloseSuccessDialog = () => {
        setOpenSuccessDialog(false);
    };

    const multiChoiceOptions = [
        { value: 'joinDay1', label: 'Join Day 1', description: '23rd Oct 2025' },
        { value: 'joinDay2', label: 'Join Day 2', description: '24th Oct 2025' },
        { value: 'galaDinner', label: 'Join Gala Dinner', description: '500,000 VND/pax' },
        { value: 'requestBusService', label: 'Request Bus Service' },
    ];

    const showBusRouteSection = formData.eventChoices.includes('requestBusService');
    const showBankTransferSection = formData.eventChoices.includes('galaDinner');

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff',
                backgroundSize: '400% 400%',
                animation: `${shimmer} 15s ease infinite`,
                py: { xs: 2, md: 4 },
            }}
        >
            <Container component="main" maxWidth="md">
                <Paper
                    elevation={8}
                    sx={{
                        p: { xs: 2, md: 4 },
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
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: "center" }}>
                            <Box>
                                <Box sx={{ flex: 1, mb: 2 }}>
                                    <PlainTextBox
                                        label="Full Name"
                                        value={formData.fullName}
                                        onChange={(val) => handleChange('fullName', val as string)}
                                    />
                                    {errors.fullName && <Typography variant="caption" color="error">{errors.fullName}</Typography>}
                                </Box>
                                <Box sx={{ flex: 1, mb: 2 }}>
                                    <PlainTextBox
                                        label="Title"
                                        value={formData.title}
                                        onChange={(val) => handleChange('title', val as string)}
                                    />
                                    {errors.title && <Typography variant="caption" color="error">{errors.title}</Typography>}
                                </Box>

                                {/* Cột 2 */}
                                <Box sx={{ flex: 1, mb: 2 }}>
                                    <PlainTextBox
                                        label="Organization"
                                        value={formData.organization}
                                        onChange={(val) => handleChange('organization', val as string)}
                                    />
                                    {errors.organization && <Typography variant="caption" color="error">{errors.organization}</Typography>}
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ flex: 1, mb: 2 }}>
                                    <PlainTextBox
                                        label="Phone Number"
                                        value={formData.phone}
                                        onChange={(val) => handleChange('phone', val as string)}
                                    />
                                    {errors.phone && <Typography variant="caption" color="error">{errors.phone}</Typography>}
                                </Box>
                                <Box sx={{ flex: 1, mb: 2 }}>
                                    <PlainTextBox
                                        label="Email Address"
                                        value={formData.email}
                                        onChange={(val) => handleChange('email', val as string)}
                                    />
                                    {errors.email && <Typography variant="caption" color="error">{errors.email}</Typography>}
                                </Box>
                            </Box>
                        </Box>


                        <Divider sx={{ my: 3 }} />

                        <FormControl component="fieldset" fullWidth margin="normal">
                            <FormLabel component="legend">Event Options</FormLabel>
                            <FormGroup>
                                {multiChoiceOptions.map((option) => (
                                    <Box key={option.value}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={formData.eventChoices.includes(option.value)}
                                                    onChange={(e) => {
                                                        const newEventChoices = e.target.checked
                                                            ? [...formData.eventChoices, option.value]
                                                            : formData.eventChoices.filter((v) => v !== option.value);
                                                        handleEventChoiceChange(newEventChoices);
                                                    }}
                                                    size="small"
                                                />
                                            }
                                            label={<Typography variant="body2">{option.label} {option.description && `(${option.description})`}</Typography>}
                                        />
                                        {option.value === 'requestBusService' && showBusRouteSection && (
                                            <Box sx={{ ml: { xs: 2, md: 4 }, mt: 1, mb: 1 }}>
                                                <Paper variant="outlined" sx={{ p: 1, borderColor: '#bdbdbd' }}>
                                                    <Box sx={{ display: 'flex', borderBottom: '1px solid #e0e0e0', mb: 1, pb: 0.5, flexDirection: { xs: 'column', md: 'row' } }}>
                                                        <Typography variant="caption" sx={{ fontWeight: 'bold', flex: 2, textAlign: 'left' }}>Route</Typography>
                                                        <Typography variant="caption" sx={{ fontWeight: 'bold', flex: 1, textAlign: { xs: 'left', md: 'center' }, mt: { xs: 1, md: 0 } }}>Departure</Typography>
                                                        <Typography variant="caption" sx={{ fontWeight: 'bold', flex: 1, textAlign: { xs: 'left', md: 'center' } }}>Return</Typography>
                                                    </Box>
                                                    {[{ route: 'Turtle Lake - VGU', departure: '6:30', return: '19:00' },
                                                    { route: 'Becamex Hotel - VGU', departure: '7:45', return: '17:45' },
                                                    { route: 'VGU Campus', departure: '8:30', return: '17:00' }]
                                                        .map((bus, index) => (
                                                            <Box key={index} sx={{ display: 'flex', borderBottom: '1px solid #f0f0f0', py: 0.5, flexDirection: { xs: 'column', md: 'row' } }}>
                                                                <Typography variant="body2" sx={{ flex: 2 }}>{bus.route}</Typography>
                                                                <Typography variant="body2" sx={{ flex: 1, textAlign: { xs: 'left', md: 'center' } }}>{bus.departure}</Typography>
                                                                <Typography variant="body2" sx={{ flex: 1, textAlign: { xs: 'left', md: 'center' } }}>{bus.return}</Typography>
                                                            </Box>
                                                        ))}
                                                </Paper>
                                                {/* Thay đổi từ Select sang RadioGroup */}
                                                <FormControl component="fieldset" fullWidth margin="dense" size="small" sx={{ mt: 2 }}>
                                                    <FormLabel component="legend" id="bus-route-label">Choose Bus Route</FormLabel>
                                                    <RadioGroup
                                                        aria-labelledby="bus-route-label"
                                                        name="busRoute"
                                                        value={formData.busRoute}
                                                        onChange={(e) => handleChange('busRoute', e.target.value)}
                                                    >
                                                        <FormControlLabel value="Turtle Lake" control={<Radio size="small" />} label="Turtle Lake" />
                                                        <FormControlLabel value="Becamex Hotel" control={<Radio size="small" />} label="Becamex Hotel (Thu Dau Mot)" />
                                                    </RadioGroup>
                                                </FormControl>
                                                {errors.busRoute && <Typography variant="caption" color="error">{errors.busRoute}</Typography>}
                                            </Box>
                                        )}
                                    </Box>
                                ))}

                            </FormGroup>
                        </FormControl>

                        {showBankTransferSection && (
                            <>
                                <Divider sx={{ my: 2 }} />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="bankTransfer"
                                            checked={formData.bankTransfer}
                                            onChange={handleCheckboxChange}
                                            color="primary"
                                            size="small"
                                            disabled={true}
                                        />
                                    }
                                    label={<Typography variant="body2">Pay via Bank Transfer</Typography>}
                                />
                            </>
                        )}

                        {showBankTransferSection && formData.bankTransfer && (
                            <Box sx={{ mt: 2, p: 2, border: '1px dashed #ccc', borderRadius: 2, width: '100%', bgcolor: '#fafafa' }}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Bank Transfer Details:
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
                                    Bank Name: <Box component="span" sx={{ fontWeight: 700 }}>Vietcombank</Box>
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    Account Number: <Box component="span" sx={{ fontWeight: 700 }}>037 100 0402081</Box>
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    Account Holder: <Box component="span" sx={{ fontWeight: 700 }}>Trường Đại học Việt Đức</Box>
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic', color: '#555' }}>
                                    Content: Gala Dinner 23/10/2025 - [Full Name] - [Phone Number]
                                </Typography>
                            </Box>
                        )}

                        {error && (
                            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
                                {error}
                            </Typography>
                        )}

                        <CustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}

                            sx={{
                                mt: 2,
                                mb: 1,
                                borderRadius: 1.5,
                                p: '8px 0',
                                fontWeight: 'bold',
                                fontSize: '0.8rem',
                                backgroundColor: '#4caf50',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#45a049',
                                },
                                '&.Mui-disabled': {
                                    backgroundColor: '#a5d6a7',
                                    color: 'white',
                                },
                            }}
                        >
                            {loading ? 'Submitting...' : 'Register Now'}
                        </CustomButton>
                    </Box>
                </Paper>
            </Container>

            <SuccessDialog open={openSuccessDialog} onClose={handleCloseSuccessDialog} />
        </Box>
    );
};

export default RegisterPage;
