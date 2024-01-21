import React from 'react';

const AddProduct = () => {


    const productData=(event)=>{

        event.preventDefault()
        const form=event.target;
        const imgUrl=form.url.value
        const productName=form.productname.value;
        const description=form.description.value;
        const productValue=form.productvalue.value;

        const productInfo={
            productName,description,productValue,imgUrl
        }

        console.log(productInfo)

        // fetch("http://localhost:5000/products",{
        //     method:'POST',
        //     headers:{'content-type':'application/json'},
        //     body: JSON.stringify(productInfo),

        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })

        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(productInfo),
        })
        .then(res=>res.json())
        .then(data=>{

        })

        form.reset()
        alert("successfully added!")

    }

    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh] bg-gray-800'>
            <form onSubmit={productData} className='border-2'> 
                <input className='text-[2vh] lg:text-[4vh] rounded-lg m-4 p-4' type="text" name="productname" placeholder='Enter Product name' /><br></br>
                <input className='text-[2vh] lg:text-[4vh] rounded-lg m-4 p-4' type="text" name="url" placeholder='Enter Product Image url' /><br></br>
                <input className='text-[2vh] lg:text-[4vh] rounded-lg m-4 p-4' type="number" name="productvalue" placeholder='Enter Product value'/><br></br>
                <input className='text-[2vh] lg:text-[4vh] rounded-lg m-4 p-4' type="text" name="description" placeholder='Enter Description'/><br></br>
                <div className="w-[40%] mx-auto">
                <button className='btn bg-gray-500 text-center m-4 w-[80%]' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;