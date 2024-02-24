import { createContext, useContext, useReducer, useState } from "react";
import todosReducer from "./TodosReducer";

export const TodosContext = createContext();

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

export function TodosProvider({children}) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <main>
        <TodosContext.Provider value={{ todos, dispatch, modalOpen, setModalOpen }}>
          {children}
        </TodosContext.Provider>
      </main>
    </>
  )
}

export function useTodos() {
  return useContext(TodosContext);
}