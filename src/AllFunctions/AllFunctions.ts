import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore'
import { auth, db} from "../Config/firebaseConfig";


export const loginFunction = async (email: string, password: string) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response
    } catch (error) {
        console.error(error)
    }
}

export const signupFunction = async (name: string, email: string, password: string) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            email,
        })
        return response
        
    } catch (error) {
        console.error(error)
        throw Error ("something went wrong")
    }
}


export const logout = () => {
    signOut(auth);
    localStorage.removeItem("user")
    localStorage.removeItem("uid")
};
