import styled, { keyframes } from "styled-components";


const animationRegister = keyframes`
0%{
    -webkit-transform:translateY(-500px);
    transform:translateY(-500px);
    -webkit-animation-timing-function:ease-in;
    animation-timing-function:ease-in;
    opacity:0
}
    38%{
        -webkit-transform:translateY(0);
        transform:translateY(0);
        -webkit-animation-timing-function:ease-out;
        animation-timing-function:ease-out;
        opacity:1
        }
        55%{
        -webkit-transform:translateY(-65px);
        transform:translateY(-65px);
        -webkit-animation-timing-function:ease-in;
        animation-timing-function:ease-in
        }
        72%{
        -webkit-transform:translateY(0);
        transform:translateY(0);
        -webkit-animation-timing-function:ease-out;
        animation-timing-function:ease-out
        }
        81%{
          -webkit-transform:translateY(-28px);
          transform:translateY(-28px);
          -webkit-animation-timing-function:ease-in;
          animation-timing-function:ease-in
          }
          90%{
            -webkit-transform:translateY(0);
            transform:translateY(0);
            -webkit-animation-timing-function:ease-out;
            animation-timing-function:ease-out
            }
            95%{
              -webkit-transform:translateY(-8px);
              transform:translateY(-8px);
              -webkit-animation-timing-function:ease-in;
              animation-timing-function:ease-in
              }
              100%{
                -webkit-transform:translateY(0);
                transform:translateY(0);
                -webkit-animation-timing-function:ease-out;
                animation-timing-function:ease-out
                }
`;

export const Container = styled.div`

width: 100vw;
height: 100vh;

background-color: var(--blue-ligth);

display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 700px) {
background-color: var(--blue-primary);
    
section{
    justify-content: center;

    .container-image{
        display: none;
    }

    div{
        min-width: 280px;
        border-radius: 20px;
    }
}
}

section{
  animation: ${animationRegister} 1.1s both;

    display: flex;
    width: 80%;

    @media screen and (min-width: 1024px){
        width: 858px;
    }

    div{
        width: 50%;
    }

    .container-image{
            background-color: #020557;
            border-radius: 20px 0 0 20px;
        
            img{
            width: 100%;
            height: 100%;
            border-radius: 20px 0 0 20px;

        }
    }
}

`


export const ContainerSession = styled.div`

background-color: white;

border-radius: 0 20px 20px 0;

display: flex;
flex-direction: column;

gap: 10px;

h2{
    padding: 50px 0 0 50px;
    font-weight: bolder;

}
.createAccountParaph{
    font-weight: 600;
    opacity: 0.4;
    padding-left: 50px;
}

form{
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 30px auto 20px auto;
    gap: 20px;

    input{
        border: unset;
        border-bottom: solid 2px rgba(0, 0, 0, 0.3);
    
       &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
       }
    }

    button{
        background-color: #020557;
        color: white;
        font-weight: 600;
        margin-top: 20px;
        padding: 15px 0;
        border: unset;
        border-radius: 10px;
    }
}

span{
    display: flex;
    margin: 0 auto;
    opacity: 0.5;
    font-weight: 600;
}

.signParaph{
    display: flex;
    margin: 10px auto;
    opacity: 0.5;
}

`