import styled from "styled-components";


export const Section = styled.section`

width: 100vw;
height: 100vh;

display: none;
justify-content: center;
align-items: center;

background-color: rgba(0, 0, 0, 0.25);
position: fixed;
z-index: 5;

div{
    width: 350px;
    height: 250px;
    background-color: white;
    border-radius: 15px;



    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 25%;

        h2{
            margin-left: 15px;

        }

        button{
            margin-right: 10px;
            border: unset;
            background-color: unset;
            color: red;
        }
    }


    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        margin-top: 30px;

        input{
            width: 80%;
            height: 25px;
            border: unset;
            border-bottom: solid 2px rgba(0, 0, 0, 0.35);


            &:focus{
                outline: 0;
            }
        }

        button{
            padding: 10px;
            margin-top: 10px;
            border: unset;
            border-radius: 10px;
            color: white;
            background-color: var(--blue-primary);
        }

        .message-error{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 12px;
        color: red;
        margin: -10px 0;
    }
    }
}

`