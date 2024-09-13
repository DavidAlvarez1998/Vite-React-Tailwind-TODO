




const TodoComputed = ({ countComputed, clearComplete, filter }) => {

    let messages = {}

    const countDisplay = () => {
        switch (filter) {
            case 'All':
                messages = {
                    sin: "pendientes",
                    singular: "pendiente",
                    plural: "pendientes"

                }
                return countComputed.pendientes;
            case 'Active':
                messages = {
                    sin: "pendientes",
                    singular: "pendiente",
                    plural: "pendientes"

                }
                return countComputed.pendientes;
            case 'Complete':
                messages = {
                    sin: "completadas",
                    singular: "completada",
                    plural: "completadas"

                }
                return countComputed.completados;
            default:
                return 0;
        }
    }








    return (
        <section className='transition-all duration-700 dark:bg-gray-800 flex justify-between py-4 px-4 bg-white rounded-b-md'>
            <div className="flex flex-col">
                <span className='transition-all duration-700 dark:text-gray-300 text-gray-600 '>
                    <div className="flex space-x-2">
                        <p>
                            {countDisplay() > 0 && countDisplay()}
                        </p>
                        <p>
                            {countDisplay() === 0 ? `Sin tareas ${messages.sin}.` : countDisplay() === 1 ? `Una tarea ${messages.singular}.` : `Tareas ${messages.plural}.`}
                        </p>
                    </div>
                </span>
            </div>
            <button
                className='transition-all duration-700 dark:text-gray-300 dark:hover:text-gray-100 text-gray-600 hover:text-gray-900'
                onClick={clearComplete}
            >
                Limpiar completados
            </button>
        </section>

    )
}

export default TodoComputed;