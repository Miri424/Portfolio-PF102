import { Todo } from "../types/type";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
    clearTodos: () => void;
  }
  
  const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, clearTodos }) => {
    return (
      <div>
        {todos.length === 0 ? (
          <p className="text-gray-500">No tasks available</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))
        )}
          <button onClick={clearTodos} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Clear All
          </button>
      </div>
    );
  };


  export default TodoList;