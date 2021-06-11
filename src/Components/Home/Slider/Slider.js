import React from 'react';

const Slider = () => {
    return (
        <div class="w-4/5 mx-auto my-20 bg-gray-700">
        <div id="slider" class="swiper-container w-full">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-cover bg-center shadow-lg">
                    <div class="container mx-auto px-6 md:px-20 py-6">
                        <div class="w-full md:w-1/2">
                            <div class="md:border border-gray-100 md:p-10">
                                <h3 class="text-5xl leading-tight">Welcome To </h3>
                                <h2 class="font-bold leading-tight text-6xl">Web2Tailwind</h2>
                                <p class="text-xl mt-10 font-light">Use complete html components in your projects.
                                </p>
                            </div>
                            <div class="my-10 md:mx-10 md:-mt-2"><a href="#appointment"
                                    class="bg-pink-500  ease-linear hover:bg-blue-600 text-white px-6 py-4 rounded-full">USE
                                    TEMPLATE</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-pink-500"></div>
            <div class="hidden md:flex swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-pink-500"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    );
};

export default Slider;