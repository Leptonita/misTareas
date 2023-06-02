
function NameList({ nameList, setNameList, readTodos }) {

    const inputHandler = (e) => {
        setNameList(e.target.value);
    }

    const nameSubmitHandler = (e) => {
        //not refresh the page
        e.preventDefault();
        readTodos();
    }

    return (
        <header>
            <div className="title">
                Mi lista de: <strong>
                    {nameList}</strong>
            </div>

            <form>

                <span className="material-symbols-outlined titleIcon ">&#xf88d;</span>
                <input type="text" className="titleInput todo-input" placeholder="escribe el nombre de la lista" onChange={inputHandler} value={nameList} />
                <button onClick={nameSubmitHandler}>
                    <span className="material-symbols-outlined btn">&#xe145;</span>
                </button>
            </form>
            <hr />
        </header>
    )
}
export default NameList;