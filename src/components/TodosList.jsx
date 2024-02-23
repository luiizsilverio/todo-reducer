import { useContext } from 'react';
import { TodosContext } from '../TodosContext.js';
import Todo from './Todo.jsx';

function TodosList() {
  const store = useContext(TodosContext);

  function deleteHandler(id) {
    if (confirm('Confirma exclusão da tarefa?')) {
      store.dispatch({ type: 'deleted', id });
    }
  }

  function toggleIsDoneHandler(id) {
    store.dispatch({ type: 'toggledIsDone', id });
  }

  return (
    <>
        <div className="todos">

          {store.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={(id) => deleteHandler(id)}
              toggleIsDone={(id) => toggleIsDoneHandler(id)}
            />
          ))}

        </div>
    </>
  )
}

export default TodosList