import React from 'react';
import { Button, styled } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface CustomButtonProps extends Omit<ButtonProps, 'onClick'> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;  // Chỉ định onClick là tùy chọn
    children?: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }) => ({
    height: '30px',
    padding: '8px 8px',
    borderRadius: '8px',
    borderColor: theme.palette.grey[400],
    color: theme.palette.text.secondary,
    textTransform: 'none',
    '&:hover': {
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.action.hover,
    },
}));

function CustomButton({ onClick, children = 'Clear', ...props }: CustomButtonProps) {
    return (
        <StyledButton
            variant="outlined"
            onClick={onClick}  // onClick sẽ là tùy chọn, không bắt buộc
            {...props}
        >
            {children}
        </StyledButton>
    );
}

export default CustomButton;
