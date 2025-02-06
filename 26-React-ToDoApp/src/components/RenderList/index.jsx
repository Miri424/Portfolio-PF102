import ListElements from "../../ListElements"

const RenderList = ({ todos, setTodos }) => {
    return (
    <>
    {
     todos.map((todo) => ( 
        <ListElements todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
     ))
    }
    </>
)
}

export default RenderList