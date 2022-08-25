import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

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
            <div class="nav"ref={navRef}>
                <input type="checkbox" id="nav-check"></input>
                <div class="nav-header">
                    <h1 className='nav-title'>CUYBOT</h1>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#">Commands</a>
                    <a href="#">Developers</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;