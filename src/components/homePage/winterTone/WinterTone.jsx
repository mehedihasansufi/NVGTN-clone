import React, { use } from 'react';
import ProductCard from '../Product-card/ProductCard';

const WinterTone = ({WinterCollectionPromise}) => {
    const datas=use(WinterCollectionPromise)
    return (
        <div>
            <div className='mt-8 relative w-full overflow-hidden h-[800px] lg:h-[900px]'>

                {/* mobile img */}
                <img className='lg:hidden h-full object-cover' src="https://nvgtn.com/cdn/shop/files/DSC00497M2.jpg?v=1769855931" alt="" />

                <img className='hidden lg:block w-full h-full' src="https://nvgtn.com/cdn/shop/files/DSC00497D2.jpg?v=1769855829" alt="" />


                <div className='absolute inset-x-0 bottom-0 h-1/5  bg-gradient-to-t from-black/60 to-transparent'></div>


                <div className='absolute bottom-6 lg:bottom-8 text-white text-center w-full'>
                    <h3>Winter Tones.</h3>
                    <h1 className='lg:text-3xl texy-lg font-bold'>MADE TO MATCH</h1>
                    <button className='border-b border-white'>Shop Now</button>
                </div>
            </div>


            <WinterFavourite datas={datas}></WinterFavourite>
        </div>
    );
};




const WinterFavourite=({datas})=>{
    return (
        <div className='lg:mt-8 mt-4'>
            <div className='lg:mx-8 mx-4'>
                <h2 className='lg:text-3xl  font-bold '>Winter Favorites</h2>
                <p className='border-b inline-block lg:mt-2 mt-1 text-sm lg:text-base text-gray-700 hover:text-black cursor-pointer'>Shop</p>
            </div>

            <div className='grid lg:grid-cols-5 grid-cols-2 gap-x-1 mt-6 gap-y-8'>
                {
                    datas.map(data=> {
                        return <ProductCard key={data.id} data={data}></ProductCard>
                    })
                }
            </div>
        </div>
    )
}

export default WinterTone;