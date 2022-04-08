import React from 'react';
import CustomLink from './CustomLink';

const Nav = () => {
    return (
        <div>
            <ul className={`md:flex justify-center absolute md:static w-full duration-500 ease-in`}>
                <CustomLink  className="mr-9" to="/">Home</CustomLink>
                <CustomLink  className="mr-9" to="/login">Login</CustomLink>
                {/* <CustomLink  className="mr-9" to="/posts">Posts</CustomLink>
                <CustomLink  className="mr-9" to="/about">About</CustomLink>
                <CustomLink  className="mr-9" to="/name">Name</CustomLink> */}
                
            </ul>
        </div>
    );
};

export default Nav;