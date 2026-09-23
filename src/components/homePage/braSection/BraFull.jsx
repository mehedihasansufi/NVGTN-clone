import React,{use} from 'react';
import ProductCard from '../Product-card/ProductCard';

const BraFull = ({BraSectionPromise}) => {
    const datas=use(BraSectionPromise)
    return (
        <div>
            <div className=' lg:block'>
                <HeroLarge ></HeroLarge>
                <BraCollection datas={datas}></BraCollection>
            </div>


        </div>
    );
};



const HeroLarge = () => {
    return (
        <div>
            <div className='mt-10 w-full overflow-hidden relative h-[800px] lg:h-[900px] lg:flex'>

                {/* mobile img */}
                <img className='lg:hidden h-full  object-cover transition-transform duration-100 ' src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FSIOIebF51ovqen8CYJheN%2F201c25316dd44153358fb215f2262678%2FHomepage_Cards_-_27287535.jpeg&w=1920&q=95" alt="" />


                <img className=' h-full lg:block w-1/2 hidden' src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FSIOIebF51ovqen8CYJheN%2F201c25316dd44153358fb215f2262678%2FHomepage_Cards_-_27287535.jpeg&w=1920&q=95" alt="" />


                <img className=' h-full lg:block w-1/2  hidden' src="https://cdn.shopify.com/s/files/1/1367/5207/files/TrainingCampusEditCottonSportsBraGSHeavyBlueB6C5G_UCTN_0610_c223cecb-a231-4652-ab65-7e1acc47da87_1920x.jpg?v=1785235327" alt="" />

                <div className='absolute inset-x-0 bottom-0 h-1/5  bg-gradient-to-t from-black/60 to-transparent'></div>

                <div className='absolute lg:bottom-8 bottom-6 text-white text-center w-full'>
                    <h3>Heatwabe essentials</h3>
                    <h1 className='lg:text-3xl text-lg font-bold'>TOO HOT TO HANDLE</h1>
                    <button className='border-b border-white'>Shop now</button>
                </div>
            </div>
        </div>
    )

}

const BraCollection=({datas})=>{
    return (
        <div className='lg:mt-8 mt-4'>
            <div className='lg:mx-8 mx-4'>
                <h2 className='lg:text-3xl  font-bold '>Hotness with Bra</h2>
                <p className='border-b inline-block lg:mt-2 mt-1 text-sm lg:text-base text-gray-700 hover:text-black cursor-pointer'>Shop</p>
            </div>

            <div className='flex lg:grid items-start overflow-x-auto lg:overflow-hidden lg:grid-cols-3 lg:gap-x-1 gap-2 lg:gap-8 lg:mt-12 mt-6 no-scrollbar scroll-smooth'>
                {
                    datas.map(data => (
                        
                        <div
                            key={data.id}
                            className='min-w-[350px] max-w-[220px] flex-shrink-0 lg:min-w-0 lg:max-w-full lg:w-auto lg:flex-shrink '
                        >
                            <ProductCard data={data}></ProductCard>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default BraFull