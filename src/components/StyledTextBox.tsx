import { Box, Typography, TextField } from '@mui/material';

// Define the shape of the component's props
interface StyledTextBoxProps {
    label: string;
    value: string | number | null;
    onChange: (newValue: string | number) => void;
    disabled?: boolean;
}

function StyledTextBox({ label, value, onChange, disabled = false }: StyledTextBoxProps) {
    return (
        <Box display="flex" alignItems="center" gap={1} sx={{ width: '100%' }}>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 700, fontSize: 14, flexShrink: 0 }}
            >
                {label}:
            </Typography>

            <TextField
                value={String(value ?? '')}
                onChange={(e) => onChange(e.target.value)}
                size="small"
                fullWidth
                variant="outlined"
                disabled={disabled}
                sx={{
                    flex: 1,
                    minWidth: '200px',
                    '& .MuiOutlinedInput-root': {
                        minHeight: 32,
                        borderRadius: 3,
                        '& fieldset': { borderColor: 'divider' },
                        '&:hover fieldset': { borderColor: 'divider' },
                        '&.Mui-focused fieldset': { borderColor: 'divider' },
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '0.5rem',
                        fontSize: 14,
                        color: 'text.primary',
                    },
                }}
            />
        </Box>
    );
}

export default StyledTextBox;