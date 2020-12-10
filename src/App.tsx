import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import Header from '@components/Header';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
    </div>
  </ThemeProvider>
);

export default App;
