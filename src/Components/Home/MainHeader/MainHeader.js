import React from 'react';
import galaxy21 from '../../../Images/samsung-galaxy-s21-ultra.png';

const MainHeader = () => {
    return (
        <div className="bg-gray-100 flex flex-col-reverse md:flex-row justify-evenly items-center py-10 px-40">
            {/* left */}
             
              <div className=" mr-10"> 
                <h1 className="mt-5 font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">SAMSUNG GALAXY S21 ULTRA</h1>
                <p className="text-gray-500 w-2/3 my-5">Designed to be epic in every way, with a revolutionary camera experience and powerful performance.</p>
                <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded">BUY NOW</button>
              </div>
              
            {/* right */}
              <div>
                <img src={galaxy21} alt="" className="w-4/5 rounded"/>
              </div>
        </div>
    );
};

export default MainHeader;