import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import ToDos from "./components/ToDos";
import Submit from "./components/Submit";
import Header from "./components/header/header";
import axios from "axios";
import About from "./components/pages/about";
class App extends Component {
  state = {
    todos: []
  };

  UNSAFE_componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/$(id)`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addToDo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" style={containerStyle}>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Header />
                  <Submit addToDo={this.addToDo} />
                  <ToDos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delToDo={this.delToDo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const containerStyle = {
  padding: "0 1rem"
};

export default App;
