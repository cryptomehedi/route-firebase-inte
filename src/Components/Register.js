import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <from>
                <div className="my-2 ">
                <label>Your Name :</label>
                <input  className="border-2 mx-1 rounded border-zinc-700 px-2" type="text" />
                </div>
                <div className="my-2">
                <label>Your Email :</label>
                <input required className="border-2 mx-1 rounded border-zinc-700 px-2" type="email" name="" id="" />
                </div>
                <div className="my-2">
                <label>Your Password :</label>
                <input required className="border-2 mx-1 rounded border-zinc-700 px-2" type="password" name="" id="" />
                </div>
                <input  className="border-2 mx-1 rounded border-zinc-700 px-1" type="button" value="Submit" />
            </from>
        </div>
    );
};

export default Register;