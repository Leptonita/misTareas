import { GlobalStyles } from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import { light, dark, happy } from '../styles/Theme.styled';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';
import NameList from '../component/NameList';
import { useMyContext } from '../application/Provider';
import DropDownSelect from '../component/DropDownSelect';
//import { createItem, getItemsByCondition, updateItem, deleteItem } from '../application/api'
import { Button, CrudBtn, ImpBtn, ThemeBtn } from '../styles/Buttons.styled';
import useTasks from '../hook/useTasks';
import useTheme from '../hook/useTheme';

function TasksPublic() {

  const [state, setState] = useMyContext();
  const { inputText, setInputText, todos, setTodos, seeing, setSeeing, filteredTodosArr, setFilteredTodosArr, nameList, setNameList, lista, setLista, listaExists, setListaExists, message, setMessage, readTodos, newTodos, updateTodos, deleteList, saveTodos } = useTasks("Lista");
  const { selectedTheme, setSelectedTheme, toggleTheme } = useTheme(light)


  //console.log({ state });
  // console.log({ nameList });

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <div className='rightAlign'>
        <ThemeBtn onClick={() => toggleTheme()}>
          {(selectedTheme === light)
            ? (<span className="material-symbols-outlined themeIcon">light_mode</span>)
            : (selectedTheme === dark)
              ? (<span className="material-symbols-outlined themeIcon">dark_mode</span>)
              : (<span className="material-symbols-outlined themeIcon">mood</span>)}
        </ThemeBtn>
      </div>

      <div className='todo-container'>
        {/* elegir listas existentes */}
        < DropDownSelect nameList={nameList} setNameList={setNameList} lista={lista} readTodos={readTodos} listaExists={listaExists} setListaExists={setListaExists} selectedTheme={selectedTheme} />
      </div>
      {/* nombrar la lista de tareas */}
      <div className='todo-container'>
        <NameList nameList={nameList} setNameList={setNameList} readTodos={readTodos} lista={lista} selectedTheme={selectedTheme} setListaExists={setListaExists} listaExists={listaExists} />
      </div>

      <div className='todo-container'>
        {/* nombrar tarea */}
        <TodoForm
          inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setSeeing={setSeeing} selectedTheme={selectedTheme} />

        {/* listado de tareas */}
        <TodoList
          inputText={inputText} todos={todos} setTodos={setTodos} seeing={seeing} filteredTodosArr={filteredTodosArr} setFilteredTodosArr={setFilteredTodosArr} />
      </div>

      <div className='todo-container'>
        {message}
      </div>
      <div className='crud-container'>
        <CrudBtn className='crudBtn' onClick={newTodos}>Nueva lista</CrudBtn>
        {listaExists
          ? (<><ImpBtn className='crudBtn importantBtn' onClick={updateTodos}>Actualizar lista</ImpBtn>

            <CrudBtn className='crudBtn' onClick={readTodos}>Recuperar lista</CrudBtn>
            <CrudBtn className='crudBtn' onClick={deleteList}>Borrar lista</CrudBtn>
          </>)
          :
          (nameList !== "") && <ImpBtn className='crudBtn importantBtn' onClick={saveTodos}>Guardar lista</ImpBtn>
        }




      </div>

    </ThemeProvider>
  );
}

export default TasksPublic;
