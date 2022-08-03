import { createGlobalStyle } from 'styled-components';
import { devices } from './functions/func';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media ${devices.laptop} {
    html {
      font-size: 93.75%;
    }
  }

  @media ${devices.tablet} {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
