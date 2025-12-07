import React from 'react';
import { useLocalStorage } from './useLocalStorage'
import './app.css'
import { AppUI } from './appUI';

function App() {
  const [tareas, saveTasks] = useLocalStorage('TAREAS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = tareas.filter(todo => !!todo.completed).length;
  const totalTareas = tareas.length

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
    <AppUI
      completedTodos = { completedTodos }
      totalTareas = { totalTareas }
      searchValue = { searchValue }
      setSearchValue = { setSearchValue }
      searchedTodos = { searchedTodos }
      completeTodo = { completeTodo }
      deleteTodo = { deleteTodo }
    />
  )
};

export default App;
