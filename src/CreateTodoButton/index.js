import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal}) => (
    <button className="CreateTodoButton"
    onClick={() => {
        setOpenModal(state => !state)
    }}>+</button>
)

export { CreateTodoButton };