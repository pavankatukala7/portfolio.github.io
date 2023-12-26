import AppBarComponent from "./components/AppBarComponent";
import { StyledRootBox, StyledRootGrid } from "./styles/Styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledRootGrid>
        <StyledRootBox>
          <AppBarComponent />
        </StyledRootBox>
      </StyledRootGrid>
    </ThemeProvider>
  );
}

export default App;
