import React from 'react';
import Login from './Login';
import MainDisplay from './MainDisplay';
import Inventory from './Inventory';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     inventory: ''
    }
  }



  render() {
    return (
      <div>
        Hello from App
        <div id="login">
        
        </div>
        {/* <Login /> */}

        <MainDisplay />

        <Inventory />
      </div>
    )
  }
}

export default App;