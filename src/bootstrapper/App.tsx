import React from 'react';
import { LoginPage } from '../components/pages/login.page';
import { BaseLayout } from '../components/shared/base-layout';

const App = () => {

  return (
    <BaseLayout>
      <LoginPage />
    </BaseLayout>
  );
}

export default App;
