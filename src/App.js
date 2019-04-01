import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.dispatch({ type: "ADD_TODO", task: e.target.task.value });
    e.target.reset();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Task" name="task" />
          <input type="submit" />
        </form>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(mapStateToProps)(App);
