import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    font-size: 16px;
  }

  body {
  }
`;

export default GlobalStyles;
