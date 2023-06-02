import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodosArr, setFilteredTodosArr }) {
    //console.log({ todos })
    //console.log({ filteredTodosArr });

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodosArr.map(todo => (
                        <Todo key={todo.id} todo={todo} todos={todos} filteredTodosArr={filteredTodosArr} setTodos={setTodos} setFilteredTodosArr={setFilteredTodosArr} />
                    ))}
            </ul>
        </div>
    );
}
export default TodoList;