import styled from "styled-components";

export const ButtonContainer = styled.div`
    z-index: 3;      
`

export const Button = styled.button`
    background-color: #F3FA16;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    width: 280px;
    height: 8vh;
    border: 2px solid #000;
    border-radius: 50px;
    padding: 5px 25px 5px 25px;
    box-shadow: 3px 6px #000;

    @media (min-width: 768px) {
        height: 6vh;
    }

    @media (min-width: 1025px) {
        margin-top: 15vh;
        height: 8vh;
        z-index: 5;
        cursor: pointer;
    }
    
    
`

export const SpotifyIcon = styled.img`
    width: 10px;
    height: 10px;
`

export const ButtonText = styled.p`
    
`