import { useEffect, useState } from "react";
import { createItem, getItemsByCondition, updateItem, deleteItem } from '../application/api'



const useTasks = (collectionName) => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [seeing, setSeeing] = useState("all");
  const [filteredTodosArr, setFilteredTodosArr] = useState([]);
  const [nameList, setNameList] = useState("");
  const [lista, setLista] = useState(collectionName);
  const [listaExists, setListaExists] = useState(false);
  const [message, setMessage] = useState(" ");


  useEffect(() => {
    setFilteredTodosArr(() => {
      if (seeing === "completed") {
        return todos.filter(todo => todo.completed);
      } else if (seeing === "uncompleted") {
        return todos.filter(todo => !todo.completed);
      } else {
        return todos;
      }
    });
  }, [todos, seeing])

  useEffect(() => {
    const listExist = async () => {
      await readTodos();
    }

  }, [nameList, todos]);  /* */

  const newTodos = () => {
    setListaExists(false);
    setNameList("");
    setTodos([]);
    setInputText("");
    setMessage("");
  }
  const saveTodos = async () => {
    setMessage("");

    //debugger;
    if (nameList === undefined || nameList.trim() === "") {
      setMessage("Ups, escribe un nombre para esta lista de tareas");
      setListaExists(false);
    } else {
      if (nameList.trim() !== "") {
        const res = await getItemsByCondition(lista, nameList);

        if (res.length === 0) {
          const d = new Date();
          let ms = d.valueOf();

          const codeIdList = createItem(lista, { aliasList: nameList, altID: ms, dataList: todos });

          /*       const namesListToSelect = createItem("listadoNombresdeLista", { aliasListado: nameList }); */
        } else {
          setMessage("esta lista ya existe.");
        }
        setListaExists(true);
      }
    }

  }

  const readTodos = async () => {
    setMessage("");
    if (nameList !== "") {
      const res = await getItemsByCondition(lista, nameList);
      if (res.length > 0) {
        setListaExists(true)
        //get the last doc with the name nameList on the lista collection
        const resObj = res[res.length - 1];
        // console.log(typeof resObj, resObj, resObj.id);
        const resObjName = resObj['nameList'];
        setTodos(resObj.dataList);
      } else {
        setListaExists(false);
        setMessage("");
        setTodos([]);
      }
      //Nombre válido, puedes escribir las tareas para esta lista y cuando acabes guárdalas
    }
  }

  const updateTodos = async () => {
    setMessage(" ");
    if (nameList !== "") {
      const res = await getItemsByCondition(lista, nameList);

      if (res.length > 0) {
        const idDoc = res[0].id.toString();
        console.log(idDoc);
        updateItem(lista, idDoc, { aliasList: nameList, dataList: todos });
        setMessage("lista actualizada");
      } else {
        setMessage("no existe una lista con este nombre");
      }
    }
  }

  const deleteList = async () => {
    setMessage(" ");
    if (nameList !== "") {
      const res = await getItemsByCondition(lista, nameList);

      if (res.length > 0) {
        const idDoc = res[0].id.toString();
        if (window.confirm('¿Estás seguro que quieres borrar la lista: " ' + nameList + '" ?')) {
          deleteItem(lista, idDoc);
          setNameList("");
          readTodos();
        } else {
          return null;
        }

      } else {
        setMessage("no existe una lista con este nombre");
      }
    }
  }

  //console.log({ nameList });

  return {
    inputText, setInputText, todos, setTodos, seeing, setSeeing, filteredTodosArr, setFilteredTodosArr, nameList, setNameList, lista, setLista, listaExists, setListaExists, message, setMessage,
    readTodos, newTodos, updateTodos, deleteList, saveTodos
  };
}

export default useTasks;
