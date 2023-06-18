import { Children, createContext, useEffect, useState } from "react";
import app from "../firebase'/firebase.config";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

 export const  AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
        setLoading(true);
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth,currentUser => {
            console.log('user-observing');
            setUser(currentUser);
            setLoading(false);


        });
        return () => unsubscribe();
    })
    const authInfo = {
        createUser,signIn,user,logOut,updateUser,loading,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}


        </AuthContext.Provider>
    )
}
export default AuthProvider;
