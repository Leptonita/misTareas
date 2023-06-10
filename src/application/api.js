import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';


// CREATE
export const createItem = async (colName, obj) => {
    const colRef = collection(db, colName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (colName, id, obj) => {
    const docRef = doc(db, colName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getItems = async (colName) => {
    const colRef = collection(db, colName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getItemsByColName = async (colName) => {
    const colRef = collection(db, colName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (colName, conditionName, value) => {
    const colRef = collection(db, colName);
    const result = await getDocs(query(colRef, where(conditionName, '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (colName, id) => {
    const docRef = doc(db, colName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// DELETE
export const deleteItem = async (colName, idDocu) => {
    const docRef = doc(db, colName, idDocu);
    await deleteDoc(docRef);
}


const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
} 