
import { CheckCheckIcon, ChevronRight, Menu, Search, ShoppingBag, User } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Navfirst></Navfirst>


            <div className='lg:py-8 py-3 lg:px-12 px-8 flex justify-between items-center  border-b-2 border-gray-100'>
                {/* loga section */}
                <div className='w-30'>
                    <img src="https://nvgtn.com/cdn/shop/files/test_logo1_180x.png?v=1625352351" alt="" />
                </div>

                <div className='lg:flex gap-4 uppercase font-bold text-[15] hidden'>
                    <h3>Women's</h3>
                    <h3>Men's</h3>
                </div>

                {/* icon */}

                <div className='flex lg:gap-6 gap-4 lg:pr-4'>
                    <Search strokeWidth={2.50}></Search>
                    <User strokeWidth={2.50}></User>
                    <ShoppingBag strokeWidth={2.50}></ShoppingBag>

                    <div className='lg:hidden'>
                        <Menu strokeWidth={2.50}></Menu>
                    </div>
                </div>

            </div>

            <div className='lg:hidden '>
                <PhoneMenu></PhoneMenu>
            </div>

        </div>
    );
};

export default Navbar;



const PhoneMenu = () => {
    return (
        <div className=''>
            <div className='flex justify-between pl-8 pr-6 py-4 items-center  border-b-2 border-gray-100'>
                <h2 className='border-b inline-block'>WOMEN'S</h2>
                <ChevronRight strokeWidth={2.50}></ChevronRight>
            </div>

            <div className='pl-8 pr-6 py-4 flex items-center  '>
                <h2 className='inline-block'>MEN'S</h2>
            </div>


            {/* currency select option */}

            <div className='pl-8 pr-8 py-4 bg-gray-100 text-xs flex items-center'>
                <label className=''>CURRENCY</label>
                <select className=' pl-2 font-bold w-full' name="" id="">
                    <option className='pl-2' value="BDT">BDT</option>
                    <option value="USD">USD </option>
                    <option value="GBP">GBP </option>
                    <option value="EUR">EUR </option>
                    <option value="AUD">AUD </option>
                    <option value="CAD">CAD </option>
                </select>
            </div>
        </div>
    )
}


const Navfirst = () => {
    return (
        <div>
            <h1 className='bg-gray-800 text-white py-1.5 flex justify-center items-center px-4 text-sm'>Free shipping to Bangladesh on all orders above Tk18498</h1>
        </div>
    )
}