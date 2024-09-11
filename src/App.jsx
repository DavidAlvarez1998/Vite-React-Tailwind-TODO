
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useState } from 'react';

const initialStateTodos = [
  {
    id: 1,
    title: "Este es un Titulo  👽 (^///^)",
    complete: true
  },
  {
    id: 2,
    title: "un Titulo mas 👽 ",
    complete: false
  },
  {
    id: 3,
    title: "Y otro👽 ",
    complete: false
  },
  {
    id: 4,
    title: "Otro mas👽 ",
    complete: false
  }
]



function App() {

  const [todos, setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      complete: false
    }
    setTodos([newTodo, ...todos])

  }

  const deleteTodo = (title) => {
    const newList = todos.filter(todo => title !== todo.title);
    return setTodos(newList)
  }


  return (


    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300
    min-h-screen">

      <Header />
      <main className="container mx-auto mt-8 px-4 ">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <TodoComputed />
      </main>
      <TodoFilter />
      <footer className="mt-8 text-center"> drag and drop </footer>

    </div >
  )
}

export default App
