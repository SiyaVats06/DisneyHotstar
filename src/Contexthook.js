import { createUserWithEmailAndPassword ,signInWithCustomToken} from "firebase/auth";
import { createContext, useContext ,useState} from "react";
import {auth} from "./firebase"


export const user = createContext();


export function UseUserContextProvider({ children }) {

    function Signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function Login(email,password){
        return signInWithCustomToken(auth,email,password)
    }
    const [name, setname] = useState("LOGIN");
    const [login, setlogin] = useState(false)
    const [signup, setsignup] = useState(false)
    return <user.Provider value={{name,setname,Signup,login,setlogin,signup,setsignup,Login}}>{children}</user.Provider>
    
}


export function useUserContext() {
    const { name, setname ,Signup,login,setlogin,signup,setsignup,Login} = useContext(user);
    return { name, setname ,Signup,login,setlogin,signup,setsignup,Login};
}