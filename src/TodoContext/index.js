import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
    const {item: tareas, saveItem: saveTasks, loading, error} = useLocalStorage('TAREAS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openmodal, setOpenModal] = React.useState(false);

    const completedTodos = tareas.filter(todo => !!todo.completed).length;
    const totalTareas = tareas.length;

    const addTask = (text) => {
        saveTasks([...tareas, {
            text,
            completed:false,}
        ]);
    };

    const searchedTodos = tareas.filter(
    (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        }
    )

    const completeTodo = (texto) => {
    saveTasks(tareas.map(elemento => elemento.text === texto
        ? {...elemento,
        completed: !elemento.completed}
        : elemento
        ))
    }

    const deleteTodo = (texto) => {
        saveTasks(tareas.filter(
        elemento => elemento.text !== texto))
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTareas,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openmodal,
            setOpenModal,
            addTask,
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };

      /* // loading={loading}
      // error={error}
      // completedTodos = { completedTodos }
      // totalTareas = { totalTareas }
      // searchValue = { searchValue }
      // setSearchValue = { setSearchValue }
      // searchedTodos = { searchedTodos }
      // completeTodo = { completeTodo }
      // deleteTodo = { deleteTodo } */