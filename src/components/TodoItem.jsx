import CrossIcon from "./icons/CrossIcon";



const TodoItem = ({ todo, deleteTodo }) => {

    const handleClickDeleteTodo = () => {
        console.log("Tarea Elimia - " + todo.title)
        deleteTodo(todo.title)

    }


    return (
        <article className='flex gap-4 border-b border-b-gray-400 py-4 px-4'>
            <button className='inline-block h-5 w-5 rounded-full border-2'></button>
            <p className="text-gray-600 grow">{todo.title}</p>
            <button onClick={handleClickDeleteTodo} className='flex-none'>
                <CrossIcon />
            </button>
        </article>

    )
}

export default TodoItem;
