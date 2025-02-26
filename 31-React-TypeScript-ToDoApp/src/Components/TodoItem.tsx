import { Todo } from "../types/type";

interface TodoItemProps {
    todo: Todo;
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
    return (
      <div className="flex justify-between items-center border p-2 rounded mt-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 cursor-pointer">Delete</button>
      </div>
    );
  };
  
  export default TodoItem;
  