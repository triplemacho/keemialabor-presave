import React from 'react'
import styled from 'styled-components'

const Noise = styled.div`
    z-index: -2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    opacity: .06;
    z-index: 20;
    pointer-events: none;
    background: url("https://raw.githubusercontent.com/taimoorshahzada/Film-Grain-Noise-Effect-on-Background-in-Website-using-Pure-CSS/main/noise.gif");
`;

function NoiseBackground() {
    return (<Noise/>)
}

export default NoiseBackground
    