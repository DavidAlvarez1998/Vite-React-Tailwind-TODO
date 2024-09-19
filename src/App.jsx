import { DragDropContext } from '@hello-pangea/dnd';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useEffect, useState } from 'react';

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []


const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}




function App() {



  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

  const countComputed = {
    all: todos.length,
    pendientes: todos.filter(todo => !todo.complete).length,
    completados: todos.filter(todo => todo.complete).length

  }

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


  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    console.log("por aqui mijo")

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };





  return (


    <div className="transition-all duration-700 bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain bg-gray-300
    min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]
    " >
      <Header />
      <main className="container mx-auto mt-8 px-4 ">
        <TodoCreate
          createTodo={createTodo}
        />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filterTodos()}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>
        <TodoComputed
          countComputed={countComputed}
          clearComplete={clearComplete}
          filter={filter}
        />
        <TodoFilter
          ChangeFilter={ChangeFilter}
          filter={filter}
        />
      </main>




      <footer className="transition-all duration-700 mt-8 text-center dark:text-gray-300"> drag and drop </footer>

    </div >
  )
}


export default App;
