
import AppBarComponent from './components/AppBarComponent';
import { StyledRootBox, StyledRootGrid } from './styles/Styles';

function App() {
  return (<StyledRootGrid>
    <StyledRootBox>
      <AppBarComponent />
    </StyledRootBox>
  </StyledRootGrid>);
}

export default App;
