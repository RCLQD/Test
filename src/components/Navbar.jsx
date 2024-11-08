import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = ({ onScrollTo }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsOpen(false);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 py-4 px-5 lg:px-20 flex justify-between items-center transition-all ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex items-center">
                <img 
                    src="/logo/Logo.png" 
                    alt="Logo" 
                    className={`transition-all duration-300 cursor-pointer ${scrolled ? 'w-24 h-auto' : 'w-32 h-auto'}`} 
                    onClick={() => onScrollTo("home")} 
                />
            </div>
            <div className="lg:hidden">
                {isOpen ? (
                    <X className="h-6 w-6 text-[#4528B6] cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <Menu className="h-6 w-6 text-[#4528B6] cursor-pointer" onClick={toggleMenu} />
                )}
            </div>
            <div className={`flex-col absolute left-0 top-16 lg:flex lg:flex-row lg:static w-full lg:w-auto ${isOpen ? 'flex' : 'hidden'} items-center gap-y-4 gap-x-10 px-8 lg:px-0 py-4 lg:py-0 ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
                <ul className="font-dhyana flex flex-col lg:flex-row gap-y-4 lg:gap-x-10">
                    <li className="text-sm">
                        <button onClick={() => { onScrollTo("casestudy"); setIsOpen(false); }}>
                            CASE STUDIES
                        </button>
                    </li>
                    <li className="text-sm">
                        <button onClick={() => { onScrollTo("whatwedo"); setIsOpen(false); }}>
                            WHAT WE DO
                        </button>
                    </li>
                    <li className="text-sm">
                        <button onClick={() => { onScrollTo("ourprocess"); setIsOpen(false); }}>
                            OUR PROCESS
                        </button>
                    </li>
                    <li className="text-sm">
                        <button onClick={() => { onScrollTo("faq"); setIsOpen(false); }}>
                            FAQ
                        </button>
                    </li>
                </ul>
                <button 
                    className="text-sm text-white bg-[#4528B6] border-[1.5px] rounded-full py-2 px-5 hover:bg-transparent hover:border-[#4528B6] hover:text-[#4528B6] mt-4 lg:mt-0" 
                    onClick={() => { onScrollTo("home"); setIsOpen(false); }}
                >
                    INCREASE MY REVENUE
                </button>
            </div>
        </nav>
    );
};

export default Navbar;