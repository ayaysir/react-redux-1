import './App.css';
import NavContainer from './containers/NavContainer';
import HeaderContainer from './containers/HeaderContainer';
import ControlContainer from './containers/ControlContainer';
import ReadContainer from './containers/ReadContainer';

function App() {
  return (
    <div className="App">
      
      <HeaderContainer />

      <NavContainer />

      <ControlContainer />

      <ReadContainer />
    </div>
  );
}

export default App;
