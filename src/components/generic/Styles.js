import styled, { createGlobalStyle } from 'styled-components';
import Colors from '../../theme/Colors';
import Typography from '../../theme/Colors';
import Spacing from '../../theme/Spacing';

const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
}

* {
    box-sizing: border-box;
}

body {
    background-image: ${Colors.gradient};
    height: 100vh;
    overflow: auto;
    color: ${Colors.white};
    font-family: 'Inconsolata', monospace;
}
`;




export default GlobalStyle;