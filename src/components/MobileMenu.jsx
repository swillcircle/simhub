import React, { useState, useEffect, useRef } from 'react';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up
        setMenuOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav role="navigation" className="relative lg:hidden">
            <div id="menuToggle" className={`relative z-10 ${menuOpen ? 'open' : ''}`} ref={menuRef}>
                <input type="checkbox" onChange={toggleMenu} checked={menuOpen} />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu" className={`absolute shadow-2xl bg-white/95 w-[110vw] border-2 border-teal-700 rounded-lg ${menuOpen ? 'open' : ''}`}>
                    <a href="#about" className='text-black hover:text-teal-500'><li>About SimHub</li></a>
                    <a href="#download" className='text-black hover:text-teal-500'><li>Download</li></a>
                    <a href="#license" className='text-black hover:text-teal-500'><li>Get a license</li></a>
                    <a href="#resources" className='text-black hover:text-teal-500'><li>Motion</li></a>
                    <a href="#help" className='text-black hover:text-teal-500'><li>Help</li></a>
                    <a href="#contact" className='text-black hover:text-teal-500'><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    );
};

export default MobileMenu;
