import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const navRef = useRef();
    const barRef = useRef();
    const ulRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 20) {
                navRef.current.classList.add("sticky");
            } else {
                navRef.current.classList.remove("sticky");
            }
        };  
        window.addEventListener('scroll', handleScroll);

        barRef.current.addEventListener('click',function(){
            ulRef.current.classList.toggle("slide")
        })

        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Navbar">
            <header id="header" ref={navRef}>
            <h1 className="logo">CuyBot</h1>
            <div className="burger-menu">
                <input type="checkbox" className="bar" ref={barRef} ></input>
                <span><i className="fa-solid fa-bars"></i></span>
                <span><i className="fa-solid fa-xmark"></i></span>
            </div>
            <nav>
                <ul className={"navbar slide"} ref={ulRef}>
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