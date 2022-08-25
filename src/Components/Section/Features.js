import './Features.css';
import gameSVG from '../Svg/gamepad-solid.svg';
import generalSVG from '../Svg/gear-solid.svg';
import moderationSVG from '../Svg/eye-solid.svg';
import funSVG from '../Svg/face-laugh-beam-solid.svg';

function Features(){
    return (
        <div className="Features">
            <section id='features'>
                <div className="features-content">
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
                                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
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
                                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
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
                            <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
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
                            <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
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