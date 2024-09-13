const TodoFilter = ({ ChangeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 ">
            <div className='dark:bg-gray-800 bg-white p-4 rounded-md flex justify-center gap-4'>
                <button
                    className={`${filter == "All" ? 'text-blue-600 dark:text-blue-600 hover:text-gray-400 dark:hover:text-gray-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'}`}
                    onClick={() => ChangeFilter("All")}
                >
                    Todos
                </button>
                <button
                    className={`${filter == "Active" ? 'text-blue-600 dark:text-blue-600 hover:text-gray-400 dark:hover:text-gray-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'}`}
                    onClick={() => ChangeFilter("Active")}
                >
                    Pendientes
                </button>
                <button
                    className={` ${filter == "Complete" ? 'text-blue-600 dark:text-blue-600 hover:text-gray-400 dark:hover:text-gray-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'}`}
                    onClick={() => ChangeFilter("Complete")}
                >
                    Completados
                </button>
            </div>

        </section >
    )
}
export default TodoFilter;