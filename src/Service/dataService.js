import app from "../Config/firebaseConfig";
import { getDatabase, ref ,get, set} from "firebase/database"


// export const getData = async (path) => {
//     const database = getDatabase(app) // getDatabase 
//     const dataRef = ref(database, `/users/${path}`)
//     const snapshot = await get(dataRef)
//     return snapshot.exists() ? snapshot.val() : {};
// }

// export const writeData = async ({value ,path}) => {
//     const database = getDatabase(app)
//     const dataRef = ref(database, `/users/${path}`)
//     try {
//         await set(dataRef, value);
//         console.log("Success")
//       } catch (error) {
//         console.error("Error writing to database:", error);
//     }
// }


export const getUsersData = async (path='') => {
    const database = getDatabase(app) // getDatabase 
    const dataRef = ref(database, `/users/${path}`)
    const snapshot = await get(dataRef)
    return snapshot.exists() ? snapshot.val() : {};
}

export const writeUsersData = async ({value ,path}) => {
    const database = getDatabase(app)
    const dataRef = ref(database, `/users/${path}`)
    try {
        await set(dataRef, value);
        console.log("Success")
      } catch (error) {
        console.error("Error writing to database:", error);
    }
}