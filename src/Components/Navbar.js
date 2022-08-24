import React, { useState, useRef, useEffect } from 'react';
import './css/style.css';

function Navbar() {
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 20) {
                navRef.current.classList.add("sticky");
            } else {
                navRef.current.classList.remove("sticky");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Navbar">
            <header id="header" ref={navRef}>
            <h1 className="logo">CuyBot</h1>
            <nav>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Commands</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default Navbar;