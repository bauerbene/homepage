import React, { ReactNode, useRef } from 'react';
import { TChildrenProps } from '../../style/utils/chidren-props';
import { CSSTransition } from 'react-transition-group';

import { Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const SlideAnimation = () => {
    const conatinerRef = useRef(null);
    return (
        <Box ref={conatinerRef}>
            <Slide direction='right' in={true} container={conatinerRef.current}>
                <Typography>Slide in</Typography>
            </Slide>
        </Box>
    );
}