import React, { useContext } from 'react';
import Banner from '../Home/Banner';
import { onLog } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ContextApi, { Authcontext } from '../ContextApi/ContextApi';
import auth from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {register}=useContext(Authcontext)


    const navigate=useNavigate()


    const onLogin = (event) => {

   



        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        const loginData = {
            email: email,
            password: password
        }

        console.log(loginData)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }



    return (
        <div>
            <div className="h-[100%] w-[100%]">
                <div className="banner bg-[url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[100vh] w-[100%] bg-no-repeat bg-cover sm:bg-center lg:bg-right">
                    <div className="bg-[rgb(0,0,0,0.5)] w-[100%] h-[100vh] flex justify-center items-center font-nunito">

                        <div className="bg-[rgb(0,0,0,0.8)] px-6 lg:px-[10vh] py-[5vh] rounded-lg flex-col justify-center items-center ">
                            {register?<span className='text-green-600 text-[2vh] text-center'>Register successful please login</span>:""}
                            <p className='text-center text-[7vh] text-white'>Please Login</p>
                            <form onSubmit={onLogin} className='my-[2vh]' action="">
                                <div className="my-[2vh]">
                                    <input className="pl-[2vh] pr-[6vh] py-[2vh] text-[3vh] rounded-lg border-none" type="text" name="email" id="email" placeholder='Enter your email' />
                                </div>
                                <div className="my-[2vh]">
                                    <input className="pl-[2vh] pr-[6vh] py-[2vh] text-[3vh] rounded-lg border-none" type="password" name="password" id="password" placeholder='Enter your password' />
                                </div>

                                <div className="my-[2vh] text-center">
                                    <button type="submit" className="px-[5vh] py-[2vh] text-[3vh] rounded-lg border-none bg-orange-600 font-semi-bold text-white">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;