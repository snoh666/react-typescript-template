import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import InitListeners from '@components/InitListeners';
import Main from '@pages/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InitListeners />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
