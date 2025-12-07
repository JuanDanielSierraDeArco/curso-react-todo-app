import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoBusqueda } from '../TodoBusqueda';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton/index';


const AppUI = ({completedTodos, totalTareas, searchValue,
     setSearchValue, searchedTodos, completeTodo, deleteTodo}) => {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTareas} />
            <TodoBusqueda searchValue={searchValue}
            setSearchValue={setSearchValue} />

            <TodoList>
                {searchedTodos.map(elemento => (
                    <TodoItem key={elemento.text} 
                    text={elemento.text} 
                    completed={elemento.completed}
                    onComplete={() => completeTodo(elemento.text)}
                    onDelete={() => deleteTodo(elemento.text)}/>
                ))}
            </TodoList>

            <CreateTodoButton />
     </>
    )
};

export { AppUI };




