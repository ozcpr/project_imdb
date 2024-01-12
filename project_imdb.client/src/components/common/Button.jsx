import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({ onClick,label }) => {
    return (
        <Button variant="outlined" color="secondary" onClick={onClick}>
            {label}
        </Button>
    );
}

export default ButtonComponent;