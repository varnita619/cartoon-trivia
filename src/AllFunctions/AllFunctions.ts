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

export const signupFunction = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            email,
        })
        return response
    } catch (error) {
        console.error(error)
    }
}


export const logout = () => {
    signOut(auth);
};
