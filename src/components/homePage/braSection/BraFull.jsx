import React from 'react';

const BraFull = () => {
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
            <div className='mt-10 w-full overflow-hidden relative h-[800px] lg:h-[900px] lg:flex'>

                {/* mobile img */}
                <img className='lg:hidden h-full  object-cover transition-transform duration-100 ' src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FSIOIebF51ovqen8CYJheN%2F201c25316dd44153358fb215f2262678%2FHomepage_Cards_-_27287535.jpeg&w=1920&q=95" alt="" />


                <img className=' h-full lg:block w-1/2 hidden' src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FSIOIebF51ovqen8CYJheN%2F201c25316dd44153358fb215f2262678%2FHomepage_Cards_-_27287535.jpeg&w=1920&q=95" alt="" />


                <img className=' h-full lg:block w-1/2  hidden' src="https://cdn.shopify.com/s/files/1/1367/5207/files/TrainingCampusEditCottonSportsBraGSHeavyBlueB6C5G_UCTN_0610_c223cecb-a231-4652-ab65-7e1acc47da87_1920x.jpg?v=1785235327" alt="" />

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
export default BraFull