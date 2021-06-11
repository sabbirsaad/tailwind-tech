import React from 'react';
import XiaomiProductList from './XiaomiProductList';
import note8pro from '../../../Images/Xiaomi_Redmi_Note_8_Pro.png';
import note10pro from '../../../Images/Xiaomi_Redmi_Note_10_Pro.png';
import note9pro from '../../../Images/Xiaomi Redmi Note 9 Pro.jpeg';

const Xiaomi = () => {
    const products =[{
        "id": 1,
        "name": "Xiaomi Redmi Note 8 pro",
        "img": note8pro
      }, {
        "id": 2,
        "name": "Xiaomi Redmi Note 10 Pro",
        "img": note10pro
    
      }, {
        "id": 3,
        "name": "Xiaomi Redmi Note 9 Pro",
        "img": note9pro
      }, 
      ] 
    return (
        <div className="py-10 bg-gray-100">
            <h1 className="font-bold text-4xl text-red-400 text-center mb-14">XIAOMI</h1>
            <div className="flex flex-wrap gap-10 w-3/4 mx-auto">
            {
               products.map(product=><XiaomiProductList product={product}></XiaomiProductList>)
            }
            </div>
        </div>
    );
};

export default Xiaomi;