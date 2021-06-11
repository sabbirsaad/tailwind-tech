import React from 'react';
import iphone11Pro from '../../../Images/Iphone 11 Pro.jpg';
import iphoneX from '../../../Images/Iphone-X.jpg';
import iphone12ProMax from '../../../Images/Iphone-12-pro-max.png';
import IphoneProductList from './IphoneProductList';

const Iphone = () => {
    const products =[{
        "id": 1,
        "name": "Iphone 11 pro",
        "img": iphone11Pro
      }, {
        "id": 2,
        "name": "Iphone X",
        "img": iphoneX
    
      }, {
        "id": 3,
        "name": "Iphone 12 Pro Max",
        "img": iphone12ProMax
      }, 
      ] 
    return (
        <div className="py-20">
            <h1 className="font-bold text-4xl text-red-400 text-center mb-14">IPHONE</h1>
            <div className="flex flex-wrap gap-10 w-3/4 mx-auto">
            {
               products.map(product=><IphoneProductList product={product}></IphoneProductList>)
            }
            </div>
        </div>
    );
};

export default Iphone;