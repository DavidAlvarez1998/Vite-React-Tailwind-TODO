import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";


const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {
                (droppableProvided) => (

                    <div ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        className='rounded-t-md bg-white mt-8 overflow-hidden dark:bg-gray-800 transition-all duration-700'>
                        {todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {
                                    (draggableProvided) => (
                                        <TodoItem
                                            todo={todo}
                                            deleteTodo={deleteTodo}
                                            updateTodo={updateTodo}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            {...draggableProvided.draggableProps}
                                        />

                                    )
                                }
                            </Draggable>

                        ))}
                        {droppableProvided.placeholder}
                    </div>

                )
            }
        </Droppable >
    )
}

export default TodoList;