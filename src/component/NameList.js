import { Header } from '../styles/Header';
import { Form } from '../styles/Form';

function NameList({ nameList, setNameList, readTodos }) {

    const inputHandler = (e) => {
        setNameList(e.target.value);
    }

    const nameSubmitHandler = (e) => {
        if (nameList === undefined) {
            setNameList("");
        } else {
            //not refresh the page
            if (nameList.trim() !== "") {
                e.preventDefault();
                readTodos();
            }
        }

    }

    return (
        <Header>
            <div className="title">
                Mi lista de: <strong>
                    {nameList}</strong>
            </div>

            <Form>

                <span className="material-symbols-outlined titleIcon ">&#xf88d;</span>
                <input type="text" className="titleInput todo-input" placeholder="escribe el nombre de la lista" onChange={inputHandler} value={nameList} />
                <button onClick={nameSubmitHandler}>
                    <span className="material-symbols-outlined btn">&#xe145;</span>
                </button>
            </Form>
        </Header>
    )
}
export default NameList;