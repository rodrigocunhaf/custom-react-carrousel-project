import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';

const PageGlobalConfig = createGlobalStyle`

  @font-face {
    font-family: montserrat-regular;
    src: url(${MontserratRegular});
  }

  html {
    font-size:100%;
  }

  html, body , #root {
    height:100%;
  }

  body{
    background-color: #545863;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

export default PageGlobalConfig;
