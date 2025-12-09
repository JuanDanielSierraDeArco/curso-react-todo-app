import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoBusqueda } from '../TodoBusqueda';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmtyTasks } from '../EmtyTasks';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from "../Modal";
import { TasksForm } from '../TasksForm';
import { TodoContext } from '../TodoContext';

const AppUI = () => {
    const {loading, error, searchedTodos, completeTodo, deleteTodo, openmodal, setOpenModal} = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoBusqueda />
            <TodoList>
            {loading && (
                <>
                <TasksLoading />
                <TasksLoading />
                <TasksLoading />
                <TasksLoading />
                </>
            )}
            {error && <TasksError/>}
            {(!loading && searchedTodos.length === 0) && <EmtyTasks/>}

            {searchedTodos.map(({text, completed}) => (
                <TodoItem key={text} 
                text={text} 
                completed={completed}
                onComplete={() => completeTodo(text)}
                onDelete={() => deleteTodo(text)}/>
            ))}
        </TodoList>
        <CreateTodoButton setOpenModal = {setOpenModal}/>
        { openmodal && (
            <Modal>
                <TasksForm />
            </Modal>
            )
        }
     </>
    )
};

export { AppUI };