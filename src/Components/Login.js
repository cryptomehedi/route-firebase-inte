import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../firebase.init';


const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace :true})
        })
    }
    return (
        <div>
            <h2>please login</h2>
                <button onClick={handleGoogleSignIn} className='border-2 mx-1 rounded border-zinc-700 px-2 hover:bg-gray-400 hover:text-white'>Google Login</button>
                <form>
                    <div className="my-2">
                    <label>Your Email :</label>
                    <input required className="border-2 mx-1 rounded border-zinc-700 px-2" type="email" name="" id="" />
                    </div>
                    <div className="my-2">
                    <label>Your Password :</label>
                    <input required className="border-2 mx-1 rounded border-zinc-700 px-2" type="password" name="" id="" />
                    </div>
                    <input  className="border-2 mx-1 rounded border-zinc-700 px-1 hover:bg-gray-400 hover:text-white" type="button" value="Login" />
                </form>
        </div>
    );
};

export default Login;