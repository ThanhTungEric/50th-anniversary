import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';

// Define the shape for a single choice option
interface MultiChoiceOption {
    value: string;
    label: string;
    description?: string; // Optional description for more context
}

// Define the component's props
interface MultiChoiceProps {
    label: string;
    options: MultiChoiceOption[];
    selected: string[];
    onChange: (selectedValues: string[]) => void;
    disabled?: boolean;
}

function MultiChoice({ label, options, selected, onChange, disabled = false }: MultiChoiceProps) {
    const handleToggle = (value: string) => {
        const currentIndex = selected.indexOf(value);
        const newSelected = [...selected];

        if (currentIndex === -1) {
            newSelected.push(value);
        } else {
            newSelected.splice(currentIndex, 1);
        }
        onChange(newSelected);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, fontSize: 14, mb: 1 }}>
                {label}:
            </Typography>
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    p: 1,
                    bgcolor: disabled ? 'action.disabledBackground' : 'background.paper',
                }}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        control={
                            <Checkbox
                                checked={selected.includes(option.value)}
                                onChange={() => handleToggle(option.value)}
                                size="small"
                                color="primary"
                                disabled={disabled}
                            />
                        }
                        label={
                            <Typography variant="body2" color="text.primary">
                                {option.label}
                                {option.description && (
                                    <Box component="span" sx={{ color: 'text.secondary', ml: 0.5, fontStyle: 'italic' }}>
                                        ({option.description})
                                    </Box>
                                )}
                            </Typography>
                        }
                        sx={{
                            width: '100%',
                            m: 0,
                            '&:not(:last-of-type)': {
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                                pb: 1,
                                mb: 1,
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default MultiChoice;