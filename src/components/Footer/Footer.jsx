import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-50 text-black pt-12 lg:px-12 px-4 mt-10 border-t border-gray-200'>
            
            {/* Newsletter Section */}
            <div className='max-w-xl mx-auto text-center pb-12 mb-10 border-b border-gray-300'>
                <h3 className='text-xl lg:text-2xl font-bold tracking-wide mb-2'>
                    10% OFF YOUR FIRST ORDER
                </h3>
                <p className='text-gray-600 text-sm mb-6'>
                    It’s nice to be first - sign up for our newsletter!
                </p>
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col sm:flex-row gap-2 justify-center'>
                    <input 
                        type='email' 
                        placeholder='Enter your email address' 
                        className='px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black text-sm w-full sm:w-72 bg-white'
                        required 
                    />
                    <button 
                        type='submit' 
                        className='bg-black text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition'
                    >
                        Sign Up
                    </button>
                </form>
            </div>

            {/* Top Section: Links & Columns */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300'>
                {/* Column 1: Help */}
                <div>
                    <h4 className='font-bold text-lg mb-4 tracking-wide'>HELP</h4>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li><a href='#' className='hover:text-black transition'>FAQ</a></li>
                        <li><a href='#' className='hover:text-black transition'>Delivery Information</a></li>
                        <li><a href='#' className='hover:text-black transition'>Returns Policy</a></li>
                        <li><a href='#' className='hover:text-black transition'>Track Your Order</a></li>
                        <li><a href='#' className='hover:text-black transition'>Orders & Payment</a></li>
                    </ul>
                </div>

                {/* Column 2: About Us */}
                <div>
                    <h4 className='font-bold text-lg mb-4 tracking-wide'>MY ACCOUNT</h4>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li><a href='#' className='hover:text-black transition'>Login</a></li>
                        <li><a href='#' className='hover:text-black transition'>Register</a></li>
                        <li><a href='#' className='hover:text-black transition'>Account Settings</a></li>
                    </ul>
                </div>

                {/* Column 3: Pages */}
                <div>
                    <h4 className='font-bold text-lg mb-4 tracking-wide'>PAGES</h4>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li><a href='#' className='hover:text-black transition'>New Releases</a></li>
                        <li><a href='#' className='hover:text-black transition'>Winter Collection</a></li>
                        <li><a href='#' className='hover:text-black transition'>Lift Seamless</a></li>
                        <li><a href='#' className='hover:text-black transition'>Bra Collection</a></li>
                    </ul>
                </div>

                {/* Column 4: Social */}
                <div>
                    <h4 className='font-bold text-lg mb-4 tracking-wide'>FOLLOW US</h4>
                    <div className='flex flex-wrap gap-3 mb-6 text-sm text-gray-600'>
                        <a href='#' className='hover:text-black transition'>Facebook</a>
                        <a href='#' className='hover:text-black transition'>Instagram</a>
                        <a href='#' className='hover:text-black transition'>Twitter</a>
                        <a href='#' className='hover:text-black transition'>YouTube</a>
                    </div>
                    <p className='text-gray-600 text-xs'>
                        Join our community for exclusive drops, offers and workouts.
                    </p>
                </div>
            </div>

            {/* Bottom Section: Copyright & Legal */}
            <div className='flex flex-col md:flex-row justify-between items-center pt-6 text-gray-500 text-xs space-y-4 md:space-y-0'>
                <p>&copy; 2026 | All Rights Reserved.</p>
                <div className='flex space-x-6'>
                    <a href='#' className='hover:text-black transition'>Privacy Policy</a>
                    <a href='#' className='hover:text-black transition'>Terms & Conditions</a>
                    <a href='#' className='hover:text-black transition'>Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;