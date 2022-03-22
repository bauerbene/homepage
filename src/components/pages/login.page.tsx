import { Card } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactNode, useState } from 'react';
import { LoginComponent } from '../login.component';
import { LoadingComponent } from '../loadinng.component';
import { ErrorComponent } from '../error-component';

type TLoginState = 'login' | 'loading' | 'error' | 'success';

export const LoginPage = () => {

    const [loginState, setLoginState] = useState<TLoginState>('login');

    const getLoginComponent = (state: TLoginState): ReactNode => {
        if (state === 'login') {
            return <LoginComponent onSubmit={() => setLoginState('loading')} />;
        } else if (state === 'loading') {
            return <LoadingComponent onFinishedLoading={() => setLoginState('error')}/>;
        } else if (state === 'error') {
            return <ErrorComponent onTryAgain={() => setLoginState('login')} />
        }
    }

    return (
        <Box display='flex' justifyContent='center' paddingTop='100px' paddingRight='20px' paddingLeft='20px'>
            <Card style={{ padding: '20px', opacity: '0.8', width: '300px', height: '250px'}}>
                <Box width='100%' height='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='row'>
                    {getLoginComponent(loginState)}
                </Box>
            </Card>
        </Box>
    );
};