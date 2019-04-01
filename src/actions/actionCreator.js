function addTodo(action, task) {
  return {
    type: "ADD_TODO",
    task: task
  };
}

function removeTodo(action, task) {
  return {
    type: "DELETE_TODO",
    task: task
  };
}
