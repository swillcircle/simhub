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
                <ul id="menu" className={`absolute ${menuOpen ? 'open' : ''}`}>
                    <a href="#home" className='text-black hover:text-teal-500'><li>Downloads</li></a>
                    <a href="#about" className='text-black hover:text-teal-500'><li>Get a license</li></a>
                    <a href="#services" className='text-black hover:text-teal-500'><li>Resources</li></a>
                    <a href="#community" className='text-black hover:text-teal-500'><li>Help and Community</li></a>
                    <a href="#contact" className='text-black hover:text-teal-500'><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    );
};

export default MobileMenu;
