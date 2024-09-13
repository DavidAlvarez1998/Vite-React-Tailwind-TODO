import TodoItem from "./TodoItem";


const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className='rounded-t-md bg-white mt-8 overflow-hidden dark:bg-gray-800'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}


        </div>
    )
}

export default TodoList;