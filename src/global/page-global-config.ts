import { createGlobalStyle } from 'styled-components';

const PageGlobalConfig = createGlobalStyle`

  html {
    font-size:100%;
  }

  html, body , #root {
    height:100%;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

export default PageGlobalConfig;
