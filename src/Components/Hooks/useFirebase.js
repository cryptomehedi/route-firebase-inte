import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user , setUser] = useState({})


    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(results =>{
            const user = results.user
            setUser(user)
            console.log(user)
        })
    }

    return { user, singInWithGoogle }
}

export default useFirebase;