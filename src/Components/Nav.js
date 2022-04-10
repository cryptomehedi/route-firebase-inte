import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
import CustomLink from './CustomLink';

const auth = getAuth(app)
const Nav = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <ul className={`flex justify-center w-full`}>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/">Home</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/products/">Products</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/orders/">Orders</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/register/">Register</CustomLink>
                <span className=' rounded bg-green-400 hover:text-white ' style = {{ padding: user?.displayName ? '3px' : '0px' }} > {user?.displayName && user.displayName}</span>
                {
                    user?.uid 
                    ? 
                    <button onClick={()=>signOut(auth)} className='border-2 mx-1 rounded border-zinc-700 px-2 hover:bg-gray-400 hover:text-white'>Log Out</button>
                    :
                    <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/login">Login</CustomLink>
                }
                
            </ul>
        </div>
    );
};

export default Nav;