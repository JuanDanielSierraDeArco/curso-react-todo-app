import './TasksError.css'

const TasksError = () => {
    return (
    <div className="ErrorTask-container">
      <span className="ErrorTask-icon">⚠️</span>
      <p className="ErrorTask-text">Ocurrió un error al cargar las tareas</p>
    </div>
    );
};

export { TasksError };