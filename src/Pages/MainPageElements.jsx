import styled from "styled-components";

export const MainHtmlContainer = styled.html`

`

export const MainBody = styled.body`
    width: 100vw;
    height: 100vh;
    margin: -2vw;
`

export const MainContainer = styled.div`
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const TextContainer = styled.div`
    width: 80%;
    height: 60vh;
    padding-top: 10vh;
    margin-bottom: -20px;
    z-index: 5;
    text-align: center;

    @media (max-width: 380px) {
        @media (max-height: 700px) {
            font-size: 20px;
            margin-bottom: -30px;
        }
    }

    @media (min-width: 768px) {
        
    }

    @media (min-width: 1025px) {
        width: 40%;
    } 
`

export const ContentHeader = styled.h3`
    font-size: 40px;
    font-family: JustoSt;
    letter-spacing: 5px;
    text-align: center;
    color: #F3FA16;
    text-shadow: 6px 6px 0px #000,
    2px 2px 0 #000,
  -2px -2px 0 #000,
  2px -2px 0 #000,
  -2px 2px 0 #000,
  0px 2px 0 #000,
  2px 0px 0 #000,
  0px -2px 0 #000,
  -2px 0px 0 #000;;

    @media (max-width: 375px) {
        font-size: 30px;
    }

    @media (min-width: 768px) {
        font-size: 60px;
    }

    @media (min-width: 1025px) {
        font-size: 50px;
        padding: 0 1vw;
    } 
`;

export const ChangingContentText = styled.p`
    font-family: TheyPerished;
    font-weight: normal;
    margin-top: -20px;
    color: #000;
    font-size: 20px;
    padding-bottom: 50px;
    

    @media (max-width: 375px) {
        font-size: 18px;
    }
    
    @media (min-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 1025px) {
        font-size: 30px;
        margin-top: -30px;
    } 
`;

export const SubHeader = styled.p`
    text-decoration: underline;
    margin-bottom: 4px;
`

export const MainTextContainer = styled.div`
    text-align: center;
    justify-content: center;
    width: 80%;
    height: auto;
    margin: 0 auto;
`

export const MainText = styled.p`
    color: #fff;
    font-size: 1.5em;
    text-align: justify;
    text-justify: inter-word;

    @media (max-width: 380px) {
        @media (max-height: 700px) {
            font-size: 20px;
        }
    }
`

export const ButtonLink = styled.a`
    z-index: 1;
`

export const LogoMacho = styled.img`
    width: 200px;
    height: auto;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 3;
`

export const HeinoImg = styled.img`
    width: 150px;
    height: auto;
    position: fixed;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 2;

    @media (max-width: 380px) {
        @media (max-height: 700px) {
            width: 130px;
        }
    }

    @media (min-width: 768px) {
        width: 30vw;
        
    }

    @media (min-width: 1025px) {
        width: 20vw;
        bottom: -10px;
        z-index: 1;
    } 
`
export const BljatImg = styled.img`
    width: 130px;
    height: auto;
    position: fixed;
    bottom: 10vw;
    left: 0;
    transform: rotate(15deg);
    z-index: 2;
    
    @media (max-width: 380px) {
        @media (max-height: 700px) {
            width: 100px;
            left: 10px;
        }
    }

    @media (min-width: 768px) {
        left: 7vw;
        width: 25vw;
        bottom: 3vw;
    }

    @media (min-width: 1025px) {
        width: 15vw;
        left: 7vw;
        bottom: 4vh;
    } 
`

export const RovinImg = styled.img`
    width: 130px;
    height: auto;
    position: fixed;
    bottom: 20vw;
    right: -10px;
    transform: rotate(-20deg);
    z-index: 2;

    @media (max-width: 380px) {
        @media (max-height: 700px) {
            width: 100px;
            right: 10px;
        }
    }

    @media (min-width: 768px) {
        right: 4vw;
        width: 28vw;
        bottom: 8vw;
    }

    @media (min-width: 1025px) {
        width: 17vw;
        right: 6vw;
        bottom: 10vh;
    } 
`