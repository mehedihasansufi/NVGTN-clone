import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className=' lg:block'>
                <HeroLarge></HeroLarge>
            </div>


        </div>
    );
};




const HeroLarge = () => {
    return (
        <div>
            <div className='mt-10 w-full overflow-hidden relative h-[800px] lg:h-[900px] '>

                {/* mobile img */}
                <img className='lg:hidden h-full object-cover transition-transform duration-100 ' src="https://nvgtn.com/cdn/shop/files/DSC00118M.jpg?v=1769823683" alt="" />

                <img className='w-full h-full lg:block hidden' src="https://nvgtn.com/cdn/shop/files/DSC00118D1.jpg?v=1769823510" alt="" />

                <div className='absolute inset-x-0 bottom-0 h-1/5  bg-gradient-to-t from-black/60 to-transparent'></div>

                <div className='absolute lg:bottom-8 bottom-6 text-white text-center w-full'>
                    <h3>Restock coming soon.</h3>
                    <h1 className='lg:text-3xl text-lg font-bold'>DISCOVER YOUR POTENTIAL</h1>
                    <button className='border-b border-white'>Shop now</button>
                </div>
            </div>
        </div>
    )

}

export default Hero;