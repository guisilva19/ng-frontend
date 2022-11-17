import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 30vw;
    height: 100vh;
    background-color: #020557;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.75);  
    
    @media screen and (min-width: 1024px) {
        width: 300px;
    }
    
    .logo{
        display: flex;
        color: white;
        align-items: center;
        padding: 20px;
        gap: 20px;
        

        
        h1{
            font-weight: bolder;
            font-size: 40px;
        }
        

        img{
            width: 80px;
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
        &:hover{
        border-right: 4px solid white;
        
        }

        svg{
        fill: white;
        }
        h3{
            font-weight: 500;
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
    &:hover{
    border-right: 4px solid white;

    }

        h3{
            font-weight: 500;
        }
    }   
}
`