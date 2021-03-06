import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login'
import Rings from './component/rings/Rings'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:null,
      password:null
    }
    //bind function so we can use 'this' in the bind function
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
   login() {
    fetch("http://localhost:3030/signin",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      mode:'CORS',
      body:JSON.stringify( {username:this.state.username,password:this.state.password})
    })
    .then(res=> res.json())
    .then(data=> this.setState({user:data}))
    .catch(e=> console.log(e))
    
  }
  onChange(event){
    this.setState({ [event.target.id]:event.target.value});  
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rings</h1>
        </header>
       {
         this.state.user ? <Rings user={this.state.user} /> : 
                           <Login onSubmit={this.login} 
                                  onChange={this.onChange} />
       }
    
      </div>
    );
  }
}

export default App;
