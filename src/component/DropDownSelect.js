import { useEffect, useState } from "react";
import { getItemsByColName } from '../application/api';
import Option from './Option';
import { light } from "../styles/Theme.styled";


const DropDownSelect = ({ nameList, setNameList, lista, readTodos, setListaExists, listaExists, selectedTheme }) => {
    const [selectedList, setSelectedList] = useState();
    const [arrLista, setArrLista] = useState([]);

    useEffect(() => {
        getArrLista();
    }, [nameList, listaExists]);

    useEffect(() => {
        setNameList(selectedList);
        readTodos();
    }, [selectedList]);


    /*  */
    const getArrLista = async () => {
        const arr = await getItemsByColName(lista);
        setArrLista(arr);
    }

    const namesAliasList = arrLista.map(listItem =>

        <Option Option key={listItem.altID} value={listItem.aliasList} > {listItem.aliasList}</Option >
    )
    //  console.log({ arrLista }, { namesAliasList });


    const selHandler = (e) => {
        setSelectedList(e.target.value);
        setNameList(e.target.value);
        setListaExists(true);
    }

    // console.log(selectedTheme.name)

    return (
        <div className="select selectDropDownNames">
            <select name="NamesOfLista" className="filter-todo filterTodoDrop  tSel" onChange={selHandler} style={{ background: (selectedTheme.name === "light-theme") ? "#fff" : "#fff5e2" }} >
                <option defaultValue hidden>Elige una lista existente ...</option>
                {namesAliasList}
            </select>
        </div >
    )
}
export default DropDownSelect;