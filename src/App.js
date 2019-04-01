import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["123", "45"]
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const todos = this.state.todos;
    todos.push(e.target.task.value);
    this.setState({ todos: todos });
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
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
