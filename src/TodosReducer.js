export default function todosReducer(todos, action) {

  switch (action.type) {
    case 'deleted': {
      return todos.filter(todo => todo.id !== action.id);
    }
    case 'toggledIsDone': {
      return todos.map(todo => {
        if (todo.id === action.id) {
          todo.isDone = !todo.isDone;
        } 
        return todo;
      })
    }
    default: return state;
  }
}