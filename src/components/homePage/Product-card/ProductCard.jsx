import React from 'react';

const ProductCard = ({ data }) => {
    return (
        <div className='cursor-pointer group'>
            <div className='relative overflow-hidden'>
                <img src={data.image_link} alt="" />
                <img
                    src={data.image_hover}
                    alt={data.name}
                    className="absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                />
            </div>

            {/* size show */}
            <div className='lg:hidden '>
                <div className='mt-2 flex w-full justify-center  '>
                    {
                        data.size?.map(size => (
                            <div className='border border-gray-300 px-3 py-1 flex text-sm text-gray-500 justify-center items-center'>
                                {size}
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='text-center mt-2'>
                <h3 className='font-bold text-base'>{data.name}</h3>
                <p className={`mt-2 ${data.price === 'Sold out' ? `text-red-500 font-semibold` : " "}`}>{data.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;