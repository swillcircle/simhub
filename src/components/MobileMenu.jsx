import React, { useState, useEffect, useRef } from 'react';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className='md:hidden'>
            <button className="menu-button text-white border-none cursor-pointer text-3xl" onClick={toggleMenu}>
                ☰
            </button>
            <nav ref={menuRef} className={`menu ${menuOpen ? 'open' : ''} flex-col bg-white absolute top-[60px] right-0 text-teal-500 text-left z-20`}>
                <a className='py-4 px-12 hover:bg-teal-800 active:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-800' href="#home">Downloads</a>
                <a className='py-4 px-12 hover:bg-teal-800 active:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-800' href="#about">Get a license</a>
                <a className='py-4 px-12 hover:bg-teal-800 active:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-800' href="#services">Resources</a>
                <a className='py-4 px-12 hover:bg-teal-800 active:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-800' href="#services">Help and Community</a>
                <a className='py-4 px-12 hover:bg-teal-800 active:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-800' href="#contact">Contact</a>
            </nav>
            <style jsx>{`
                .menu {
                    display: ${menuOpen ? 'flex' : 'none'};
                }
            `}</style>
        </header>
    );
};

export default MobileMenu;
