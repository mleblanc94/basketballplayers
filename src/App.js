import React, { Component } from 'react';
import NbaCardList from './NbaCardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { NbaPlayersList } from './NbaPlayersList';
import './App.css';

class App extends Component {
	constructor() {
		super() 
		this.state = {
			players: NbaPlayersList,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

render() { 
 const { players, searchfield } = this.state;
 const filteredPlayers = players.filter(player => {
 	return player.name.toLowerCase().includes(searchfield.toLowerCase());
   })
   return !players.length ?
   <h1>Loading Players</h1> :
   (
  <div className='tc'>
    <h1 className='f1'>NBA Players</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
      <NbaCardList players={filteredPlayers} />
    </Scroll>
    </div>
    );
}
}

export default App;
