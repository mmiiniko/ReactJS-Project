import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {  
    constructor() { 
        super()         
        this.state = {  
            infos: [],
            searchfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ infos: users}));
}

 onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}
    render() {  {/* Class always have render function */}
        const { infos,searchfield } = this.state; 
        const filteredInfos = infos.filter(info =>{
            return info.name.toLowerCase().includes(searchfield.toLowerCase()); {/* includes does the comparison between infos.name to state.searchfield*/}
        })
         return !infos.length ? 
         <h1>Loading</h1> :
        (
            <div className='tc'> 
                <h1 className='f1'>Andrei and Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/> {/* calls the searcChange function everytime the onSearchChange event triggers */}
                <Scroll>
                    <CardList infos = {filteredInfos}/> {/* displays the filtered user in the search box */}
                </Scroll>
            </div>
        );
    }
}

export default App;

{/* Line 7 declare the state inside the constructor */}
{/* Line 8 in order to use 'this', use super() to call the constructor of Component */}
{/* Line 9 "state" are the things that can change and affect the app, state usually lives in the parent component 'App.js' */}
{/* Line 21 if the name in infos includes in the searchfield Filter the name that is true */}
{/* Line 30 Using ternary operator if the lenght of user is empty, display loading if not return the cardlist */}
