import { createContext, useContext, useEffect, useReducer, useState } from "react";
import todosReducer from "./TodosReducer";

export const TodosContext = createContext();

const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

export function TodosProvider({children}) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState('');

  function filteredTodos() {
    switch(filter) {
      case 'todo':
        return todos.filter(todo => !todo.isDone);
      case 'done':
        return todos.filter(todo => todo.isDone);
      default:
        return todos;
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
     <main>
        <TodosContext.Provider value={{ 
          todos, 
          dispatch, 
          modalOpen, 
          setModalOpen,
          filter,
          setFilter,
          filteredTodos
        }}>
          {children}
        </TodosContext.Provider>
      </main>
    </>
  )
}

export function useTodos() {
  return useContext(TodosContext);
}