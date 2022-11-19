import styled, { keyframes } from "styled-components"


const animationHeader = keyframes`
from{
    opacity: 0;
}

to{
    opacity: 1;
}

`

export const HeaderContainer = styled.header`
    width: 30vw;
    height: 100vh;
    background-color: #020557;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animationHeader} .5s;

    box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.75);  
    
    @media screen and (min-width: 1024px) {
        width: 300px;
    }

    @media screen and (max-width: 950px) {
        position: fixed;
    }

    @media screen and (max-width: 750px) {
    width: 55px;
    }
    
    .logo{
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 20px;
        

        
        h1{
            font-weight: bolder;
            font-size: 40px;
            @media screen and (max-width: 750px) {
                display: none;
            } 
             
        }
        

        img{
            width: 80px;
            @media screen and (max-width: 750px) {
            width: 40px;
    }
        }
    }

    .container-logout {
        display: flex;
        align-items: center;

        max-width: 100%;
        height: 3.5rem;
        gap: 10px;
        padding-left: 10%;

        color: white;

        transition: 0.3s;
        border-right: 4px solid transparent;
        cursor: pointer;

        @media screen and (max-width: 750px) {
                justify-content: center;
            } 
            
        &:hover{
        border-right: 4px solid white;
        
        }

        svg{
        fill: white;
        }
        h3{
            font-weight: 500;
            @media screen and (max-width: 750px) {
                display: none;
            }  
        }
    }
`

export const Navigation = styled.nav`

margin-top: -350px;

ul {

    li{
    display: flex;
    align-items: center;
    padding-left: 10%;

    max-width: 100%;
    height: 3.5rem;
        
    gap: 10px;

    color: white;
    cursor: pointer;

    border-right: 4px solid transparent;
    transition: 0.3s;

    @media screen and (max-width: 750px) {
        justify-content: center;
    } 

    &:hover{
    border-right: 4px solid white;

    }

        h3{
            font-weight: 500;
            @media screen and (max-width: 750px) {
                display: none;
            }  
        }
    }   
}
`