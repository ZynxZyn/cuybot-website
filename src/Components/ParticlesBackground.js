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
            <Particles options={particlesOptions} init={particlesInit}/>
            <div className="test"></div>
        </div>
    )
}

export default ParticlesBackground;