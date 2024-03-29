import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        monsters:[],
        searchField:''
      };
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({monsters: users}))
  }
  render(){
    const {monsters,searchField}= this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">

     
        <SearchBox 
          placeholder = 'searchMonsters'
          handleChange = {e=>{this.setState({ searchField: e.target.value},console.log(searchField))} }
        />
        <CardList 
        monsters = {filteredMonsters}
        />
       
        
        
       
      </div>  
    )
  }    
}

export default App;
