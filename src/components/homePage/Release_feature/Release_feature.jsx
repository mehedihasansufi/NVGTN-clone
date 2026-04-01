import React, { use } from 'react';
import ProductCard from '../Product-card/ProductCard';

const Release_feature = ({ NewReleasePromise }) => {
    const datas = use(NewReleasePromise)
    return (
        <div className='lg:mt-8 mt-4'>
            <div className='lg:mx-8 mx-4'>
                <h2 className='lg:text-3xl  font-bold '>Featured New Releases</h2>
                <p className='border-b inline-block lg:mt-2 mt-1 text-sm lg:text-base text-gray-700 hover:text-black cursor-pointer'>Shop</p>
            </div>

            <div className='grid lg:grid-cols-5 grid-cols-2 gap-x-1 mt-6 gap-y-8'>
                {
                    datas.map(data=>{
                        return <ProductCard key={data.id} data={data}></ProductCard>
                    })
                }
            </div>
        </div>
    );
};

export default Release_feature;