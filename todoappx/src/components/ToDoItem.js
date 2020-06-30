import React, { Component } from "react";
import PropTypes from "prop-types";

class ToDoItem extends Component {
  getStyle = () => {
    return {
      background: "blue",
      padding: "10px",
      borderBottom: "3px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {"  "}
          {title}{" "}
          <button onClick={this.props.delToDo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "pink",
  color: "red",
  padding: "5px 9px",
  borderRadius: "10px",
  float: "right"
};

ToDoItem.prototypes = {
  todos: PropTypes.object.isRequired
};

export default ToDoItem;
