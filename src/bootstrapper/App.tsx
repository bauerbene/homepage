import React from 'react';
import logo from './logo.svg';
import { LoginPage } from '../components/pages/login.page';
import { useFormik } from 'formik';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { BaseLayout } from '../components/shared/base-layout';

const App = () => {

  return (
    <BaseLayout>
      <LoginPage />
    </BaseLayout>
  );
}

export default App;
