import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/homepage/PersonalHomepage"
import { selectIsDarkTheme } from "../../common/themeSlice";


export const App = () => {
const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};


