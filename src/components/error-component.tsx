import React from 'react';
import { Button, Typography, Alert } from '@mui/material';

type TErrorComponentProps = {
    readonly onTryAgain: () => void;
};

export const ErrorComponent = (props: TErrorComponentProps) => {
    return (
        <Alert severity='error' >
            <Typography>An error occured</Typography>
            <Button variant='contained' color='error' onClick={() => props.onTryAgain()}>Try again</Button> 
        </Alert>
    );
}