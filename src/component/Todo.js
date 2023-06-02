
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
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{/* {todo.id} -  */}{todo.text}</li>

            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler} ><i className="fas fa-trash"></i></button>
        </div >
    )
}
export default Todo;