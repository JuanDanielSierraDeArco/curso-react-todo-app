import './TasksLoading.css'

const TasksLoading = () => {
    return (
        <div className='LoadingTask-container'>
            <span 
                className='LoadingTask-completeIcon'>
            </span>
            <p className='LoadingTask-text'></p>
            <span
            className='LoadingTask-deleteIcon'></span>
        </div>
    );
};

export { TasksLoading };