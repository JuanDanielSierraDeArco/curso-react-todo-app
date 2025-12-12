import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoBusqueda } from '../TodoBusqueda';
import { TodoList } from '../TodoList';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmtyTasks } from '../EmtyTasks';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TasksForm } from '../TasksForm';
import { TodoItem} from '../TodoItem';
import { useTodos } from './useTodos';

function App() {
    const {
    setOpenModal, 
    addTask,
    loading,
    error,
    searchedTodos,
    searchValue,
    completeTodo,
    deleteTodo,
    openmodal,
    totalTareas,
    completedTodos,
    setSearchValue,
  } = useTodos()

  return (
    <>
      <div className="container">
        <TodoHeader>
          <TodoCounter
            totalTareas={totalTareas}
            completedTodos={completedTodos}
          />
          <TodoBusqueda
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
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
          {!loading && !error && searchedTodos.length === 0 && <EmtyTasks />}

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
        {!loading && !error && <CreateTodoButton setOpenModal={setOpenModal} />}
        {openmodal && (
          <Modal>
            <TasksForm  setOpenModal={setOpenModal} addTask={addTask}/>
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
