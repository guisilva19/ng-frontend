import styled from "styled-components";

export const Container = styled.div`

width: 100vw;
height: 100vh;
background-color: #D5EEFF;
display: flex;
align-items: center;
justify-content: center;

section{
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
            border-radius: 0 20px 20px 0;
        
            img{
            width: 100%;
            border-radius: 0 20px 20px 0;

        }
    }
}


`



export const ContainerRegister = styled.div`

background-color: white;

border-radius: 20px 0 0 20px;

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
    
       input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
       }
    }

    .message-error{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 12px;
        color: red;
        margin: -10px 0;
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

