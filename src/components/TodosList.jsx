import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';

function TodosList() {
  const store = useTodos();

  return (
    <>
        <div className="todos">

          {store.filteredTodos().length ? 
            store.filteredTodos().map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
              />
            )) 
            : (
                <span>Nenhuma tarefa a ser exibida. Tente limpar o filtro.</span>
              )
          }

        </div>
    </>
  )
}

export default TodosList