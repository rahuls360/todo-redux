const initialState = {
  todos: ["123", "45"]
};
function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.task]
      };
    case "DELETE_TODO":
      return {};
    default:
      return state;
  }
}

export default todo;
