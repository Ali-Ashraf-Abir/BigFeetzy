import React, { useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut } from "firebase/auth";
import auth from '../Firebase/firebase';
import { updateProfile } from "firebase/auth";
import { Authcontext } from '../ContextApi/ContextApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const {register,setRegister}=useContext(Authcontext)

    const navigate=useNavigate()

    const onRegister = (event) => {

        event.preventDefault()

        const form = event.target
        const name=form.name.value
        const email = form.email.value
        const password = form.password.value


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                  }).then(() => {
                    // Profile updated!
                    setRegister(true)
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                // ...
                signOut(auth).then(() => {
                    // Sign-out successful.
                    navigate("/login")

                  }).catch((error) => {
                    // An error happened.
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        



    }

    return (
        <div>
            <div className="h-[100%] w-[100%]">
                <div className="banner bg-[url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[100vh] w-[100%] bg-no-repeat bg-cover sm:bg-center lg:bg-right">
                    <div className="bg-[rgb(0,0,0,0.5)] w-[100%] h-[100vh] flex justify-center items-center font-nunito">

                        <div className="bg-[rgb(0,0,0,0.8)] px-6 lg:px-[10vh] py-[5vh] rounded-lg flex-col justify-center items-center ">
                            <p className='text-center text-[7vh] text-white'>Please Register</p>
                            <form onSubmit={onRegister} className='my-[2vh]' action="">
                                <div className="my-[2vh]">
                                    <input className="pl-[2vh] pr-[6vh] py-[2vh] text-[3vh] rounded-lg border-none" type="text" name="name" id="name" placeholder='Enter your name' />
                                </div>
                                <div className="my-[2vh]">
                                    <input className="pl-[2vh] pr-[6vh] py-[2vh] text-[3vh] rounded-lg border-none" type="text" name="email" id="email" placeholder='Enter your email' />
                                </div>
                                <div className="my-[2vh]">
                                    <input className="pl-[2vh] pr-[6vh] py-[2vh] text-[3vh] rounded-lg border-none" type="password" name="password" id="password" placeholder='Enter your password' />
                                </div>

                                <div className="my-[2vh] text-center">
                                    <button type="submit" className="px-[5vh] py-[2vh] text-[3vh] rounded-lg border-none bg-orange-600 font-semi-bold text-white">Register</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;