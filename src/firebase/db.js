import { collection, getFirestore,getDocs, query } from "firebase/firestore"
import {app } from './config'

const db = getFirestore(app)

export const getProducts = async () = {
    const querySnapshot = await getDocs(collection(db, "items"))
    querySnapshot.forEach((doc) => {
        console.log(`{doc.id} => ${doc.date()}`)
    })

} 

