import './Features.css';
import gameSVG from '../Svg/gamepad-solid.svg';
import generalSVG from '../Svg/gear-solid.svg';
import moderationSVG from '../Svg/eye-solid.svg';
import funSVG from '../Svg/face-laugh-beam-solid.svg';
import react, { useRef, useEffect } from 'react';

function Features(){
    const featuresRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 200) {
                featuresRef.current.style.transform = "translateY(0)";
                featuresRef.current.style.opacity = "1";
            } else {
                featuresRef.current.style.opacity = "0";
                featuresRef.current.style.transform = "translateY(20vh)";
            }
        };  
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Features">
            <section id='features'>
                <div className="features-content" ref={featuresRef}>
                    <h1 className='features-title'>Features<br></br>_____________</h1>
                    <ul class="cards">
                    <li>
                        <a class="card">
                            <img src={gameSVG} class="card__image" alt="" />
                            <div class="card__overlay">
                                <div class="card__header">                   
                                    <img class="card__thumb" src="../logo.png" alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">Game</h3>            
                                    </div>
                                </div>
                                <p class="card__description">Coming Soon..</p>
                            </div>
                        </a>      
                    </li>
                    <li>
                        <a class="card">
                            <img src={generalSVG} class="card__image" alt="" />
                            <div class="card__overlay">        
                                <div class="card__header">              
                                    <img class="card__thumb" src="../logo.png" alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">General</h3>
                                    </div>
                                </div>
                                <p class="card__description">I have so many general commands that u can use, and very simple to use</p>
                            </div>
                        </a>
                    </li>
                    <li>
                    <a class="card">
                        <img src={funSVG} class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">             
                                <img class="card__thumb" src="../logo.png" alt="" />
                                <div class="card__header-text">
                                    <h3 class="card__title">Fun</h3>
                                </div>          
                            </div>
                            <p class="card__description">You can laugh with your friend with this bot using fun commands</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a class="card">
                        <img src={moderationSVG} class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">               
                                <img class="card__thumb" src="../logo.png" alt="" />
                                <div class="card__header-text">
                                    <h3 class="card__title">Moderation</h3>
                                </div>          
                            </div>
                            <p class="card__description">You can moderation your server and your channel using this bot</p>
                        </div>
                        </a>
                    </li>    
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Features;