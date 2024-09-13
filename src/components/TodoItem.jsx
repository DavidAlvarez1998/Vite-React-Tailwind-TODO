import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";



const TodoItem = ({ todo, deleteTodo, updateTodo }) => {

    const handleClickDeleteTodo = () => {
        console.log("Tarea Elimia - " + todo.title)
        deleteTodo(todo.id)
    }

    const handleClickComplete = () => {
        console.log("Tarea Actualizada - " + todo.title)
        updateTodo(todo.id)
    }
    const complete = todo.complete
    const clasNameTrue = ' h-5 w-5 rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'
    const clasNamefalse = 'inline-block h-5 w-5 rounded-full border-2 flex-none'

    return (
        <article className='flex gap-4 border-b border-b-gray-400 py-4 px-4 dark:bg-gray-800'>

            <button
                className={complete ? clasNameTrue : clasNamefalse}
                onClick={handleClickComplete}
            >
                {complete && <IconCheck />}
            </button>



            <p className={`dark:text-gray-300 text-gray-600 grow ${complete && "line-through"}`}>{todo.title}</p>


            <button
                className='flex-none '
                onClick={handleClickDeleteTodo}
            >
                <IconCross />
            </button>
        </article>

    )
}

export default TodoItem;
