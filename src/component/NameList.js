import { Header } from '../styles/Header.styled';
import { Form } from '../styles/Form.styled';
import { Button, PlusBtn } from '../styles/Buttons.styled';

function NameList({ nameList, setNameList, readTodos, selectedTheme }) {

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
                <input type="text" className="titleInput todo-input" placeholder="escribe el nombre de la lista" onChange={inputHandler} value={nameList} style={{ background: (selectedTheme.name === "light-theme") ? "#fff" : "#fff5e2" }} />
                {/* <Button onClick={nameSubmitHandler}>
                    <span className="material-symbols-outlined btn">&#xe145;</span>
                </Button> */}
                <PlusBtn onClick={nameSubmitHandler}>&#xe145;</PlusBtn>
            </Form>
        </Header>
    )
}
export default NameList;