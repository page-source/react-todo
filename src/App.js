import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      toDoList: [
        "Need to bring umbrealla",
        "Review code of reg-6678",
        "Do some groceries"
      ]
    }
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(evt){
    var newList = this.state.toDoList;
    this.state.toDoList.filter((item,index) => {
      if(evt.target.dataset.id*1 === index*1){
        newList.splice(evt.target.dataset.id, 1)
        this.setState({toDoList: newList});
      }
    })
  }
  getToDoList(){
    return this.state.toDoList.map((item,index) =>{
      return (
        <li key={index}> {item} 
        <button data-id={index} onClick={this.removeItem}>Delete</button>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Here is my to do list </h1>
          <ul>
            {this.getToDoList()}
          </ul>
      </div>
    );
  }
}

export default App;
