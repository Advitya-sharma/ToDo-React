import React, { Component } from "react";
import PropTypes from "prop-types";

class Submit extends Component {
  state = {
    title: ""
  };
  onChange = e => this.setState({ title: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", color: "red", margin: "5px,0px,100px,0px" }}
      >
        <input
          type="text"
          placeholder="Add ToDo"
          style={{ padding: "5px", flex: "1" }}
          onChange={this.onChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

Submit.prototypes = {
  Submit: PropTypes.func.isRequired
};

export default Submit;
