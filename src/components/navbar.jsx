import React from 'react';
import { AiOutlineShoppingCart, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-around items-center">
                {/* Left Side: Logo */}
                <div className="text-2xl font-bold">
                    <a href="#home">Logo</a>
                </div>

                {/* Middle: Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-red-500 hover:text-red-600">Home</a>
                    <a href="#menu" className="hover:text-yellow-400">Menu</a>
                    <a href="#services" className="hover:text-yellow-400">Services</a>
                    <a href="#offers" className="hover:text-yellow-400">Offers</a>
                </div>

                {/* Right Side: Search bar, Cart, Contact */}
                <div className="flex items-center space-x-2">
                    {/* Search Icon */}
                    <div className="relative">
                        <AiOutlineSearch size={24} className="hover:text-yellow-400 cursor-pointer" />
                    </div>

                    {/* Cart Icon */}
                    <div className="relative">
                        <AiOutlineShoppingCart size={24} className="hover:text-yellow-400 cursor-pointer" />
                    </div>

                    {/* Contact Us Button */}
                    <a href="tel:+1234567890" className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                        <AiOutlinePhone className="mr-2" />
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
