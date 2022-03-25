import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR';
    }

    #root{
        position: relative;
        font-size: 12px;
        a, button{
            cursor: pointer;
        }
    }

`;

export default GlobalStyle;
