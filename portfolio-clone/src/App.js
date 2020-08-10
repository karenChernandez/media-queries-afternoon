import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      dropDownVisible: false 
    }
  }
  toggleDropDown=()=>{
    this.setState({dropDownVisible:!this.state.dropDownVisible})
  }
  render(){
  return (
    <div className="App">
      <body>

     <header>
       <div className='logo'>
         <h1>Start Bootstrap</h1>
       </div>
       <nav className='desktop-menu'>
         <span>SERVICES</span>
         <span>PORTFOLIO</span>
         <span>ABOUT</span>
         <span>TEAM</span>
         <span>CONTACT</span>
       </nav>
          <div className='dropdown' onClick={this.toggleDropDown}>Menu &equiv;</div>
       {this.state.dropDownVisible ? (
          <nav className='mobile-menu'>
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
       ): null }

     </header>
     <div className='body'>
       <h1 className='subheading'>Welcome To Our Studio!</h1>
       <h1 className='title'>IT'S NICE TO MEET YOU</h1>
       <button className='button'>TELL ME MORE</button>
     </div>
      </body>
      
    </div>
  );
}
}
export default App;
