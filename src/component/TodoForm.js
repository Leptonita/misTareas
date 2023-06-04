import { Form } from '../styles/Form';

function TodoForm({ inputText, setInputText, todos, setTodos, setSeeing }) {

    const inputHandler = (e) => {
        setInputText(e.target.value);
    }

    const todoSubmitHandler = (e) => {
        //not refresh the page
        e.preventDefault();
        /*  acumular los datos en array 'todo' 
        y después del submit queremos que el inputText empiece de cero
        */

        if (inputText === undefined) {
            setInputText("");
        }

        if (inputText.trim() !== "") {
            setTodos([
                ...todos, { text: inputText, completed: false, id: Date.now() }]
            );
        }
        setInputText("");

    }

    const seeingHandler = (e) => {
        setSeeing(e.target.value);
    }

    /* &#xE8B6;    &#xf756;    */
    return (
        <Form>
            <span className="material-symbols-outlined">&#xf849;</span>
            <input type="text" className="todo-input" placeholder="describe y añade cada tarea" onChange={inputHandler} value={inputText} />
            <button onClick={todoSubmitHandler}>
                <span className="material-symbols-outlined btn">&#xe145;</span>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={seeingHandler}>
                    <option value="all">Ver todas las tareas</option>
                    <option value="completed">Tareas completadas</option>
                    <option value="uncompleted">Tareas pendientes</option>
                </select>
            </div>
        </Form>

    )
}
export default TodoForm;