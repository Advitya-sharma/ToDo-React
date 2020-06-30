import React, { Component } from "react";
import "./styles.css";
import ToDos from "./components/ToDos";
import Submit from "./components/Submit";
import Header from "./components/header/header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "first",
        completed: false
      },
      {
        id: 2,
        title: "second",
        completed: false
      },
      {
        id: 3,
        title: "third",
        completed: false
      }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delToDo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addToDo = title => {
    const newToDo={
      id:4,
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newToDo]});
  };

  render() {
    return (
      <div className="App">
        <div className="container" style={containerStyle}>
          <Header />
          <Submit addToDo={this.addToDo} />
          <ToDos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delToDo={this.delToDo}
          />
        </div>
      </div>
    );
  }
}

const containerStyle = {
  padding: "0 1rem"
};

export default App;
