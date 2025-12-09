import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {
    const { completedTodos: completed, totalTareas: total } = React.useContext(TodoContext)
    let mensaje;

    if (total === 0) {
        mensaje = "¡No tienes tareas por hacer!";
    } else if (total === completed) {
        mensaje = <><span>¡Felicidades!</span> Has completado todas tus tareas 🎉</>;
    } else {
        mensaje = <>Has completado <span>{completed}</span> de <span>{total}</span> tareas</>;
    }

    return <h1 className='TodoCounter'>{mensaje}</h1>;
} 

export { TodoCounter };