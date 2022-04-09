import React from 'react';
import useFirebase from './Hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase()
    return (
        <div>
            <h2>please login</h2>
                <button onClick={singInWithGoogle} className='border-2 mx-1 rounded border-zinc-700 px-2 hover:bg-gray-400 hover:text-white'>Google Login</button>
                <form>
                    <div className="my-2">
                    <label>Your Email :</label>
                    <input required className="border-2 mx-1 rounded border-zinc-700 px-2" type="email" name="" id="" />
                    </div>
                    <div className="my-2">
                    <label>Your Password :</label>
                    <input required className="border-2 mx-1 rounded border-zinc-700 px-2" type="password" name="" id="" />
                    </div>
                    <input onClick={singInWithGoogle} className="border-2 mx-1 rounded border-zinc-700 px-1 hover:bg-gray-400 hover:text-white" type="button" value="Login" />
                </form>
        </div>
    );
};

export default Login;