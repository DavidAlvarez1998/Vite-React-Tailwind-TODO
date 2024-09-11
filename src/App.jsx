import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';



function App() {


  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-container bg-gray-300
    min-h-screen">

      <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between">
          <h1 className="uppercase text-3xl text-white font-semibold tracking-[0.5em]">Todo</h1>
          <button>
            <MoonIcon fill={"#555"} />
          </button>
        </div>

        <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input type="text"
            placeholder="Crear Tarea"
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4 ">

        <div className='rounded-md bg-white'>

          <article className='flex gap-4 border-b border-b-gray-400 py-4 px-4'>
            <button className='inline-block h-5 w-5 rounded-full border-2'></button>
            <p className="text-gray-600 grow">complete online JavaScrip Curse</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>

        </div>

        <section className='flex justify-between py-4 px-4'>
          <span className='text-gray-400'>5 items left</span>
          <button className='text-gray-400'>clear complete</button>
        </section>

      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className='bg-white p-4 rounded-md flex justify-center gap-4'>
          <button className='text-blue-600 hover:text-red-600'>All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>

      </section>

      <section className="mt-8 text-center"> drag and drop </section>






    </div >
  )
}

export default App
