import { TodoDiv } from '../styles/Todo.styled';
import { TaskTrashBtn, TaskCompletehBtn, TaskUpdatehBtn } from '../styles/Buttons.styled';
import { useMyContext } from '../application/Provider';
import { useState } from 'react';
import { Input } from './Login-styled';
import { getItemsByCondition, updateItem, deleteItem } from '../application/api'

const Todo = ({ dataListIndex, todo, todos, setTodos, filteredTodosArr, setFilteredTodosArr }) => {
    const [state, setState] = useMyContext();
    const [updateIsClicked, setUpdateIsClicked] = useState(false);
    const [newInputTxt, setNewInputTxt] = useState(todo.text);

    //events
    const deleteHandler = () => {
        setTodos(todos.filter(item => todo.id !== item.id));
        setFilteredTodosArr(filteredTodosArr.filter(item => todo.id !== item.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item =>
            (item.id === todo.id)
                ? { ...item, completed: !item.completed }
                : { ...item, completed: item.completed })
        )
    }
    const updateClickHandler = () => {
        setUpdateIsClicked(!updateIsClicked);
    }

    const updateTaskHandler = (e) => {
        let newTodos = [];
        setNewInputTxt(e.target.value);
        //debugger;
        if (e.target.value !== "") {
            newTodos = todos.map((itemTodos, index) => {
                if (index === dataListIndex) {
                    todo.text = e.target.value;
                    return { ...itemTodos, text: itemTodos.text }
                } else {
                    return { ...itemTodos }
                }
            });
            setTodos(newTodos);
        }
    }

    //console.log(todos);
    //console.log({ state });
    //console.log(state.nameList);
    return (
        <>
            <TodoDiv>
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{/* {todo.id} -  */}{todo.text}</li>

                <TaskCompletehBtn onClick={completeHandler}><i className="fas fa-check"></i></TaskCompletehBtn>
                <TaskTrashBtn onClick={deleteHandler} ><i className="fas fa-trash"></i></TaskTrashBtn>
                <TaskUpdatehBtn onClick={updateClickHandler} >
                    <span>
                        stylus_note
                    </span>
                </TaskUpdatehBtn>

            </TodoDiv >
            {updateIsClicked &&
                <input type="text" name='updatingTask' className="todo-input-update" placeholder="modificar descripción" onChange={updateTaskHandler} />
            }

        </>
    )
}
export default Todo;