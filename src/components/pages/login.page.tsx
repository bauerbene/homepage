import { Button, Card, createStyles, FormControl, Slide, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Form, useFormik } from 'formik';
import React, { forwardRef, ReactElement, ReactNode, useRef, useState } from 'react';
import * as yup from 'yup';
import { LoginComponent } from '../login.component';
import { LoadingComponent } from '../loadinng.component';
import { makeStyles } from '@mui/styles';
import { SlideAnimation } from '../animations/slide-animation';
import { TransitionProps } from 'react-transition-group/Transition';

type TLoginState = 'login' | 'loading' | 'error' | 'success';

const useSTyles = makeStyles(() => createStyles({
    container: {
        margin: 0
    }
}));


export const LoginPage = () => {

    const [loginState, setLoginState] = useState<TLoginState>('login');

    const getLoginComponent = (state: TLoginState): ReactNode => {
        if (state === 'login') {
            return <LoginComponent onSubmit={() => setLoginState('loading')}/>;
        } else if (state === 'loading') {
            return <LoadingComponent />;
        }
    }

    const [inProp, setInProp] = useState(false);

    const containerRef = useRef(null);


    return (
        <Box display='flex' justifyContent='center' paddingTop='100px' paddingRight='20px' paddingLeft='20px'>
            <Card style={{ padding: '20px', opacity: '0.8'}}>
                <LoginComponent onSubmit={() => alert("hallo")} />
            </Card>
        </Box>
    );
};