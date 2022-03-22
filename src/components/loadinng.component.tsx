import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const LoadingComponent = () => {
    return (
        <Box>
            <CircularProgress />
        </Box>
    );
}