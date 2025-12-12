import React from "react";
import './TaskForm.css'

const TasksForm = ({setOpenModal, addTask}) => {
    const [newTaskValue, setNewTaskValue] = React.useState('');



    const onSubmit = (event) => {
        event.preventDefault();

        const cleaned = newTaskValue.trim();

        if (cleaned) {
            addTask(cleaned);
            setOpenModal(false);
        }
        
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Añadir una actividad</label>
            <textarea
            value={newTaskValue}
            onChange={onChange}
            placeholder="Actividad">
            </textarea>
            <div className="taskForm-buttonContainer">
                <button type="button" onClick={onCancel} className="tasksForm-button tasksForm-button--cancel">Cancelar</button>
                <button type="submit" className="tasksForm-button tasksForm-button--add">Agregar</button>
            </div>
        </form>
    )
}

export { TasksForm };