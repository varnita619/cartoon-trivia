import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../Config/firebaseConfig";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";

export const useAuthServices = () => {
  const { setToken } = useAuth();
  const loginFunction = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const signupFunction = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        email,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw Error("something went wrong");
    }
  };

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("uid");
    setToken("");
    toast.success("User Logged out", { position: "top-right" });
  };

  return { loginFunction, signupFunction, logout };
};
