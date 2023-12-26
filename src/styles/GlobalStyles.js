import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: 'YourPreferredFont', sans-serif; /* Set your preferred font */
  }

  @media screen and (max-width: 600px) {
    /* Adjust styles for smaller screens, e.g., mobile phones */
    body {
      font-size: 14px; /* Adjust font size */
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    /* Adjust styles for medium-sized screens, e.g., tablets */
    body {
      font-size: 16px; /* Adjust font size */
    }
  }
`;
