import styled, { keyframes } from "styled-components";


const animationLoad = keyframes`

from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
const animationDashboard = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}

`

export const Section = styled.section`

overflow-x: auto;

width: 70vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 30px;

animation: ${animationDashboard} .5s;

 

@media screen and (min-width: 1500px) {
    width: 85vw;
    
}

@media screen and (max-width: 950px) {
    width: 100vw;
    margin: 0 auto;
}

@media screen and (min-width: 1024px) {
width: 80vw;
    
}
`

export const Transactions = styled.div`

display: flex;
gap: 20px;
overflow: auto;
padding: 10px;

@media screen and (max-width: 950px) {
    flex-direction: column;
    margin-left: 40px;
}

`


export const Load = styled.section`

width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

div{
    width: 50px;
    height: 50px;
    border: 13px solid var(--blue-primary);
    border-radius: 50%;
    border-right: solid 13px transparent;

    animation: ${animationLoad} .5s ease-out infinite;
}

`