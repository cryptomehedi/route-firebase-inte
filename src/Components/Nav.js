import React from 'react';
import CustomLink from './CustomLink';
import useFirebase from './Hooks/useFirebase';

const Nav = () => {
    const {user} = useFirebase()
    return (
        <div>
            <ul className={`flex justify-center w-full`}>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/">Home</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/products/">Products</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/orders/">Orders</CustomLink>
                <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/register/">Register</CustomLink>
                {
                    user.uid 
                    ? 
                    <button>Log Out</button>
                    :
                    <CustomLink  className="mx-2 md:mx-5 hover:text-white" to="/login">Login</CustomLink>
                }
                
            </ul>
        </div>
    );
};

export default Nav;