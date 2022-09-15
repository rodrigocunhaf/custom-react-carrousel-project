import { createGlobalStyle } from 'styled-components';
import Courgette from 'url:../assets/fonts/Courgette-Regular.ttf';

const PageGlobalConfig = createGlobalStyle`
  @font-face {
    font-family: Courgette;
    src: url(${Courgette});
  }

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
