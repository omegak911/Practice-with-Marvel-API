import React from 'react';
import axios from 'axios';
import Login from './Login';
import MainDisplay from './MainDisplay';
import InventoryList from './InventoryList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayCharacter: '',
      inventory: [],
    }

    this.addNewCharacter = this.addNewCharacter.bind(this);
    this.requestCharacterFromServer = this.requestCharacterFromServer.bind(this);
    this.searchInventory = this.searchInventory.bind(this);
    this.login = this.login.bind(this);
  }

  addNewCharacter(characterInfo) {
    axios.post('/addNewCharacter', characterInfo)
    .then( result => {
      console.log(result)
    })
    .catch( err => {
      console.log(err)
    })
    //saves to current inventory
  }

  searchInventory(query) {
    console.log('Query is: ', query)
    let found = false;
    this.state.inventory.forEach( character => {
      if (character.name === query) {
        this.setState({displayCharacter: character});
        found = true;
      }
    })

    if (!found) {
      console.log('sending query to server')
      this.requestCharacterFromServer(query);
    }
  }

  requestCharacterFromServer(query) {
    let context = this;
    axios.get('/findCharacterInDB', { params: { name: query}})
      .then( ({data}) => {
        console.log(data);
        context.setState({inventory: [...this.state.inventory, ...data]})
      })
      .catch( err => {
        console.log(err);
      })
  }

  login(params) {
    axios.get('/login', params)
      .then( res => {
        console.log(res);
        // if (res === '404') {
        //   //notify user incorrect
        // } else {
        //   //setState user inventory
        // }
      })
      .catch( err => {
        console.log(err);
      })
  }



  render() {
    let {displayCharacter, inventory} = this.state;

    return (
      <div>
        Hello from App
        <Login login={this.login}/>

        <br/>
        <br/>
        <MainDisplay addNewCharacter={this.addNewCharacter} searchInventory={this.searchInventory}/>
        <br/>
        <InventoryList inventory={inventory} />
      </div>
    )
  }
}

export default App;