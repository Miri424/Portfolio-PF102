import React from 'react'

const ListElements = ({todos, todo, setTodos}) => {
    
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    
    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }


  return (
    <div key={todo.id}>
    <input type="checkbox" checked={todo.isCompleted}
     onChange={() => handleToggle(todo.id)}/>
    
       <li className="todo-item-text">{todo.text}</li>

       <button onClick={() => handleDelete(todo.id)} 
       className="todo-item-delete" key={todo.id}>Delete</button>
    </div>
  )
}


export default ListElements