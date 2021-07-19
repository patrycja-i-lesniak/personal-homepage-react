import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html  {
    box-sizing: border-box;

  }
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    margin: 0;
    font-size: 18px;
    background: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
    letter-spacing: 0.05em;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      padding-bottom: 32px;
    }
  }
`;