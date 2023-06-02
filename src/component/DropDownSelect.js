import { useEffect, useState } from "react";
import { getItemsByColName } from '../application/api';
import Option from './Option';

const DropDownSelect = ({ nameList, setNameList, lista, readTodos, setListaExists, listaExists }) => {
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

    return (
        <div className="select selectDropDownNames" >
            <select name="NamesOfLista" className="filter-todo filterTodoDrop" onChange={selHandler}>
                <option selected hidden>Elige una lista existente ...</option>
                {namesAliasList}
            </select>
        </div >
    )
}
export default DropDownSelect;