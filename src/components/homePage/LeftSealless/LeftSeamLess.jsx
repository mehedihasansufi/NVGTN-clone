import React, { use } from 'react';
import ProductCard from '../Product-card/ProductCard';
import '../../../../src/index.css'

const LeftSeamLess = ({ LeftSeallessPromise }) => {
    const datas = use(LeftSeallessPromise)
    return (
        <div>
            <div className='mt-8 relative w-full overflow-hidden h-[800px] lg:h-[900px]'>

                {/* mobile img */}
                <img className='lg:hidden h-full object-cover' src="https://nvgtn.com/cdn/shop/files/DSC00280M3.jpg?v=1769856466" alt="" />

                <img className='hidden lg:block w-full h-full' src="https://nvgtn.com/cdn/shop/files/DSC00280D3.jpg?v=1769856412" alt="" />


                <div className='absolute inset-x-0 bottom-0 h-1/5  bg-gradient-to-t from-black/60 to-transparent'></div>


                <div className='absolute bottom-6 lg:bottom-8 text-white text-center w-full'>
                    <h3>Absolutely snatched.</h3>
                    <h1 className='lg:text-3xl texy-lg font-bold'>LIFT SEAMLESS</h1>
                    <button className='border-b border-white'>Shop Now</button>
                </div>
            </div>


            <Seamless datas={datas}></Seamless>
        </div>
    );
};


const Seamless = ({ datas }) => {
    return (
        <div className='lg:mt-8 mt-4'>
            <div className='lg:mx-8 mx-4'>
                <h2 className='lg:text-3xl  font-bold '>LIFT SEAMLESS</h2>

            </div>

            <div className='flex items-start overflow-x-auto gap-2 lg:gap-2 lg:mt-12 mt-6 no-scrollbar scroll-smooth'>
                {
                    datas.map(data => (
                        /* ল্যাপটপের জন্য মাত্র ১৪০ পিক্সেল (140px) উইডথ ব্যবহার করুন */
                        <div
                            key={data.id}
                            className='min-w-[350px] lg:min-w-[350px] max-w-[220px] flex-shrink-0 '
                        >
                            <ProductCard data={data}></ProductCard>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LeftSeamLess;