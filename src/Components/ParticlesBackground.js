import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particlesOptions.json";

function ParticlesBackground(){
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="ParticlesBackground">
            <Particles className='wrapper' options={particlesOptions} init={particlesInit}/>
        </div>
    )
}

export default ParticlesBackground;