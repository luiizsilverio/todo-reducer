export default function todosReducer(todos, action) {

  switch (action.type) {
    case 'deleted': {
      if (confirm('Confirma exclusão da tarefa?')) {
        return todos.filter(todo => todo.id !== action.id);
      } else {
        return todos;
      }
    }
    case 'toggledIsDone': {
      return todos.map(todo => {
        if (todo.id === action.id) {
          todo.isDone = !todo.isDone;
        } 
        return todo;
      })
    }
    case 'added': {
      let newTodo = action.newTodo;
      newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
      return [...todos, newTodo];
    }
    default: return todos;
  }
}