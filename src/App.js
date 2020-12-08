import './App.css';
import NavContainer from './containers/NavContainer';
import HeaderContainer from './containers/HeaderContainer';
import ControlContainer from './containers/ControlContainer';
import ReadContainer from './containers/ReadContainer';
import { connect } from 'react-redux';
import { Component } from 'react';
import CreateContainer from './containers/CreateContainer';
import UpdateContainer from './containers/UpdateContainer';

class App extends Component {

  render() {
    return (
      <div className="App">

        <HeaderContainer />

        <NavContainer />

        <ControlContainer />

        {(this.props.mode === 'READ' || this.props.mode === 'WELCOME') && <ReadContainer />}
        {this.props.mode === 'CREATE' && <CreateContainer />}
        {this.props.mode === 'UPDATE' && <UpdateContainer />}
      </div>
    )
  }

}

// export default App;

export default connect(
  state => ({
    mode: state.mode
  })
)(App);
