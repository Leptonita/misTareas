import { TodoDiv } from '../styles/Todo.styled';
import { TaskTrashBtn, TaskCompletehBtn } from '../styles/Buttons.styled';

const Todo = ({ todo, todos, setTodos, filteredTodosArr, setFilteredTodosArr }) => {
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

    //console.log({ todo });
    return (
        <TodoDiv>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{/* {todo.id} -  */}{todo.text}</li>

            <TaskCompletehBtn onClick={completeHandler}><i className="fas fa-check"></i></TaskCompletehBtn>
            <TaskTrashBtn onClick={deleteHandler} ><i className="fas fa-trash"></i></TaskTrashBtn>
        </TodoDiv >
    )
}
export default Todo;