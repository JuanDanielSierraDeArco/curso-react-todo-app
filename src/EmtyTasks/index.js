import './EmtyTasks.css'

const EmtyTasks = () => {
    return (
        <div className="empty-tasks-container">
            <h2 className="empty-tasks-title">¡No tienes tareas aún!</h2>
            <p className="empty-tasks-subtitle">
                Crea tu primera tarea y empieza a organizar tu día 😊
            </p>
        </div>
    );
};

export { EmtyTasks };