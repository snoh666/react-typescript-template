import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path='/'>
            <Main />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
