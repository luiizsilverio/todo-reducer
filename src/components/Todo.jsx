import './Todo.scss';


function Todo({ todo, deleteTodo, toggleIsDone }) {

  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
            <button className="erase" onClick={() => deleteTodo(todo.id)}>x erase</button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                <input 
                    type="checkbox" 
                    defaultChecked={todo.isDone} 
                    onChange={() => toggleIsDone(todo.id)} 
                    id={`task-check-${todo.id}`}
                />
                <label htmlFor={`task-check-${todo.id}`}>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo