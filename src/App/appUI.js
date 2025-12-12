import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoBusqueda } from "../TodoBusqueda";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TasksLoading } from "../TasksLoading";
import { TasksError } from "../TasksError";
import { EmtyTasks } from "../EmtyTasks";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { Modal } from "../Modal";
import { TasksForm } from "../TasksForm";
import { TodoContext } from "../TodoContext";
import { TodoHeader } from "../TodoHeader";
import "./app.css";

const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    searchValue,
    completeTodo,
    deleteTodo,
    openmodal,
    setOpenModal,
    totalTareas,
    completedTodos,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <>
      <div className="container">
        <TodoHeader>
          <TodoCounter  totalTareas = {totalTareas} completedTodos={completedTodos}/>
          <TodoBusqueda searchValue = {searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>
        <TodoList>
          {loading && (
            <>
              <TasksLoading />
              <TasksLoading />
              <TasksLoading />
              <TasksLoading />
            </>
          )}
          {error && <TasksError />}
          {(!loading && !error) && searchedTodos.length === 0 && <EmtyTasks />}

          {searchedTodos.map(({ text, completed }) => (
            <TodoItem
              key={text}
              text={text}
              completed={completed}
              onComplete={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}
            />
          ))}
        </TodoList>
        { (!loading && !error) && <CreateTodoButton setOpenModal={setOpenModal}/>}
        {openmodal && (
          <Modal>
            <TasksForm />
          </Modal>
        )}
      </div>
    </>
  );
};

export { AppUI };
