const TodoFilter = () => {
    return (
        <section className="container mx-auto mt-8">
            <div className='bg-white p-4 rounded-md flex justify-center gap-4'>
                <button className='text-blue-600 hover:text-red-600'>All</button>
                <button className='text-blue-600 hover:text-red-600'>Active</button>
                <button className='text-blue-600 hover:text-red-600'>Completed</button>
            </div>

        </section>
    )
}
export default TodoFilter;