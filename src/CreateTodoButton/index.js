import "./CreateTodoButton.css";

const CreateTodoButton = ({ setOpenModal }) => (
  <div className="container">
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >+</button>
  </div>
);

export { CreateTodoButton };
