import React from 'react';

const Banner = () => {


    


    return (

<div className="h-[100%] w-[100%]">
<div className="banner bg-[url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[100vh] w-[100%] bg-no-repeat bg-cover sm:bg-center lg:bg-right">
            <div className="bg-[rgb(0,0,0,0.5)] w-[100%] h-[100vh] flex justify-center items-center">
                <div className="text-center  text-white font-nunito px-5">
                    <p className='lg:text-[15vh] text-[10vh]' >BIG<span className='text-[10vh] text-orange-800 font-bold lg:text-[15vh]'>FEETZY</span></p>
                     <p className='text-[2.5vh] lg:text-[3.5vh]'>The most budget friendly but high quality shoe provider, for your comfort and for durable shoes there is no better option!</p>
                     <button className='bg-gray-800 px-[8vh] py-[5vh] rounded-lg my-[2vh] text-[5vh] sm:text-[3vh] hover:bg-gray-600 duration-1000'>Shop Now</button>
                </div>

            </div>
           </div>
</div>

    );
};

export default Banner;