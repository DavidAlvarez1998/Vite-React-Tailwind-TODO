import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState('')


    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle('')
        }
        createTodo(title)
        return setTitle('')
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className=" dark:bg-gray-800 flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 ">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input type="text"
                placeholder="Crear Tarea"
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}


export default TodoCreate;