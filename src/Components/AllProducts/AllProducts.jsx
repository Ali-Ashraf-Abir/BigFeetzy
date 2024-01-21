import React, { useContext, useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { Authcontext } from '../ContextApi/ContextApi';

const AllProducts = () => {

    const [deleted,setDeleted]=useState([false])
    const [productData,setProductData]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            setProductData(data)
        })
        setDeleted(false)
    },[deleted])


    const onRemove=(id)=>{

        fetch(`http://localhost:5000/products/${id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        setDeleted(true)

    }


    const {user}=useContext(Authcontext)

    return (
            <div className="font-nunito bg-gray-800 mx-auto p-8">
                <div className="text-center text-[5vh] lg:text-[10vh] pt-[20vh] text-white ">All Our Products</div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 pt-[5vh] gap-[3vh] w-[100%] p-2 '>
            {
                productData.map(product=> <div className="card w-[100%] lg:h-[100%] h-[100%] lg:w-[100%] bg-gray-500 shadow-xl text-2vh lg:text-5vh">
                <figure><img className='w-[400px] h-[200px] lg:w-[50vh] lg:h-[50vh] p-0 lg:p-6 rounded-lg' src={product.imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[4vh]">{product.productName}</h2>
                    <p className='text-[2vh]'>{product.description}</p>
                    <p className='text-white font-bold text-[3vh]'>Price: {product.productValue} $</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-[2vh]">Buy Now</button>
                        {user?.email=="admin@gmail.com"?<button onClick={()=>onRemove(product._id)} className="btn btn-primary bg-red-500 text-[2vh]">Remove Shoe</button>:""}
                    </div>
                </div>
            </div>)
            }
        </div>
            </div>
    );
};

export default AllProducts;