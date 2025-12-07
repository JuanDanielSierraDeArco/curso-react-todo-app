import './CreateTodoButton.css';

const CreateTodoButton = () => (
    <button className="CreateTodoButton" 
    onClick={(event) => {
        console.log('Hiciste click')
        console.log(event)
        console.log(event.target)
    }}>+</button>
)

export { CreateTodoButton };