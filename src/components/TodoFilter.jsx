const TodoFilter = ({ ChangeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 ">
            <div className='transition-all duration-700 dark:bg-gray-800 bg-white p-4 rounded-md flex justify-center gap-4'>
                <button
                    className={filter == "All" ? 'transition-all duration-700 text-blue-600 dark:text-blue-600 hover:text-gray-400 dark:hover:text-gray-400' : 'transition-all duration-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'}
                    onClick={() => ChangeFilter("All")}
                >
                    Todos
                </button>
                <button
                    className={filter == "Active" ? 'transition-all duration-700 text-blue-600 dark:text-blue-600 hover:text-gray-400 dark:hover:text-gray-400' : 'transition-all duration-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'}
                    onClick={() => ChangeFilter("Active")}
                >
                    Pendientes
                </button>
                <button
                    className={filter == "Complete" ? 'transition-all duration-700 text-blue-600 dark:text-blue-600 hover:text-gray-400 dark:hover:text-gray-400' : 'transition-all duration-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'}
                    onClick={() => ChangeFilter("Complete")}
                >
                    Completados
                </button>
            </div>

        </section >
    )
}
export default TodoFilter;