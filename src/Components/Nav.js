import React from 'react';
import CustomLink from './CustomLink';
import useFirebase from './Hooks/useFirebase';

const Nav = () => {
    const {user , handleSignOut} = useFirebase()
    return (
        <div>
            <ul className={`flex justify-center w-full`}>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/">Home</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/products/">Products</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/orders/">Orders</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/register/">Register</CustomLink>
                <span className=' rounded bg-green-400 hover:text-white'> {user?.displayName && user.displayName}</span>
                {
                    user?.uid 
                    ? 
                    <button onClick={handleSignOut} className='border-2 mx-1 rounded border-zinc-700 px-2 hover:bg-gray-400 hover:text-white'>Log Out</button>
                    :
                    <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/login">Login</CustomLink>
                }
                
            </ul>
        </div>
    );
};

export default Nav;