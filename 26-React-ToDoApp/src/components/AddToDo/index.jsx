import { useState } from "react"
import { nanoid } from 'nanoid'
import RenderList from "../RenderList"
import DeleteAll from "../DeleteAll"

const AddToDo = () => {

  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddToDo = (e) => {
        e.preventDefault();
        if (inputValue.length == 0) {
          setInputValue("")
            alert("pls enter a task")
            return
        }

        const newToDo = {   
            id: nanoid(12),
            text: inputValue,
            isCompleted: false
        }
        setTodos ([...todos, newToDo])
        setInputValue("")
    }


  return (
    <div className="container">
      <h1>Best To Do App in PF102</h1>
        <DeleteAll setTodos={setTodos}/>
        
        <br /><br />
      <form className="todo-form">
        <input 
        onChange={handleChange} 
        type="text"
        value={inputValue}
        className="todo-input" 
        placeholder="Add a new task..." 
        required 
        />
        <button onClick={handleAddToDo} type="submit" className="todo-submit">Add</button>
      </form>
      <ul className="todo-list">
       <RenderList todos={todos} setTodos={setTodos} />
      </ul>
    </div>
  )
}

export default AddToDo