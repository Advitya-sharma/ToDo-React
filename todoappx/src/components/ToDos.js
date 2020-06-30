import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

class ToDos extends Component {
  render() {
    return this.props.todos.map(item => (
      <ToDoItem
        key={item.id}
        todo={item}
        markComplete={this.props.markComplete}
        delToDo={this.props.delToDo}
      />
    ));
  }
}

ToDos.prototypes = {
  todos: PropTypes.array.isRequired,
  markComplete :PropTypes.func.isRequired,
  delToDo: PropTypes.func.isRequired
};

export default ToDos;
