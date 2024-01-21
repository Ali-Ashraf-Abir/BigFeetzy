import React, { useContext } from 'react';
import Banner from './Banner';
import { Authcontext } from '../ContextApi/ContextApi';
import Products from '../Products/Products';

const Homebody = () => {

    const {user}=useContext(Authcontext)
    console.log(user)
    return (
        <div>
            <Banner data={user}></Banner>
            <Products></Products>
        </div>
    );
};

export default Homebody;