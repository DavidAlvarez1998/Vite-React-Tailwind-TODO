
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
    complete: false
  },
  {
    id: 2,
    title: "un Titulo mas 👽 ",
    complete: false
  },
  {
    id: 3,
    title: "Y otro👽 ",
    complete: true
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

  const deleteTodo = (id) => {
    return setTodos(todos.filter(todo => id !== todo.id))
  }

  const updateTodo = (id) => {
    return setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo))
  }

  const countTodosIncomplete = todos.filter(todo => !todo.complete).length

  const clearComplete = () => {
    return setTodos(todos.filter(todo => todo.complete !== true))
  }

  const [filter, setFilter] = useState("All")

  const ChangeFilter = (filter) => {
    console.log(filter)
    setFilter(filter)
  }

  const filterTodos = () => {
    switch (filter) {
      case "All":
        return todos;
      case "Active":
        return todos.filter(todo => todo.complete !== true);
      case "Complete":
        return todos.filter(todo => todo.complete === true);
      default:
        return todos
    }
  }





  return (


    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300
    min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]" >

      <Header />



      <main className="container mx-auto mt-8 px-4 ">



        <TodoCreate
          createTodo={createTodo}
        />

        <TodoList
          todos={filterTodos()}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed
          countTodosIncomplete={countTodosIncomplete} clearComplete={clearComplete} />
        <TodoFilter
          ChangeFilter={ChangeFilter}
          filter={filter}
        />
      </main>




      <footer className="mt-8 text-center dark:text-gray-300"> drag and drop </footer>

    </div >
  )
}


export default App;
