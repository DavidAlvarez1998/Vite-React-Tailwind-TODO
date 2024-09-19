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
        <>
            <form onSubmit={handleSubmitAddTodo} className="transition-all duration-700 dark:bg-gray-800 flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 ">
                <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                <input type="text"
                    placeholder="Crear Tarea"
                    className="transition-all duration-700 w-full text-gray-400 outline-none dark:bg-gray-800"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </form>


        </>
    )
}


export default TodoCreate;