import React from 'react';

const IphoneProductList = (props) => {
    const { id, name, img } = props.product;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
      <img className="w-full" src={img} alt=" " />
      <div className="px-6 py-4">
        <div className="font-bold text-xl my-5">{name}</div>
        <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded">BUY NOW</button>
      </div>
    </div>
    );
};

export default IphoneProductList;