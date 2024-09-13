const TodoComputed = ({ countTodosIncomplete, clearComplete }) => {
    return (
        <section className=' dark:bg-gray-800 flex justify-between py-4 px-4 bg-white rounded-b-md'>
            <span className='dark:text-gray-300 text-gray-600'>
                {countTodosIncomplete > 0 && countTodosIncomplete} {countTodosIncomplete === 0 ? "Sin Tareas pendientes."
                    : countTodosIncomplete === 1 ? "tarea pendiente." : "tareas pendientes."}
            </span>
            <button
                className=' dark:text-gray-300 dark:hover:text-gray-100 text-gray-600'
                onClick={clearComplete}
            >
                Limpiar completados
            </button>
        </section>

    )
}

export default TodoComputed;