import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

// Define the component's props, omitting the props we're defining explicitly
interface PlainTextBoxProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'disabled' | 'size' | 'fullWidth' | 'variant'> {
    value: string | number | null;
    onChange: (newValue: string) => void;
    disabled?: boolean;
}

function PlainTextBox({ value, onChange, disabled = false, ...props }: PlainTextBoxProps) {
    return (
        <TextField
            value={String(value ?? "")}
            onChange={(e) => onChange(e.target.value)}
            size="small"
            fullWidth
            variant="outlined"
            disabled={disabled}
            sx={{
                flex: 1,
                minWidth: "250px",
                "& .MuiOutlinedInput-root": {
                    minHeight: 32,
                    borderRadius: 3,
                    "& fieldset": { borderColor: "divider" },
                    "&:hover fieldset": { borderColor: "divider" },
                    "&.Mui-focused fieldset": { borderColor: "divider" },
                },
                "& .MuiOutlinedInput-input": {
                    padding: "0.5rem",
                    fontSize: 14,
                    color: "text.primary",
                },
            }}
            {...props}
        />
    );
}

export default PlainTextBox;