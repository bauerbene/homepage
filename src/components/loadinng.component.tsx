import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

type TLoadingComponentProps = {
    readonly onFinishedLoading: () => void;
}

export const LoadingComponent = (props: TLoadingComponentProps) => {

    useEffect(() => {
        setTimeout(() => props.onFinishedLoading(), 5000);
    });

    return (
        <Box>
            <CircularProgress />
        </Box>
    );
}