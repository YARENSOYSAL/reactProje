import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';
import AddUser from './components/AddUser';





class App extends Component {
  render() {
    return (
      
        <div className="App">
        <h1 style={{ color: 'red' }}>Merhaba React</h1>
        <h1 style={{ color: 'red' }}>Projeme Hoşgeldin</h1>
        <h1>1+1={1 + 1}</h1>
        <h1>8*9={8 * 9}</h1>
        <h4 style={{ color: 'blue' }}>Merhaba</h4>
        <Navbar title="çalışanlar" />
        <hr />
        <AddUser />
        <Users />
        
        </div>
      

      
    );
  }
}

export default App;
