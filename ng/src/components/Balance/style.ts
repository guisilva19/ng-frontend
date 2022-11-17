import styled from "styled-components";


export const Container = styled.div`
width: 400px;
height: 150px;
box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.25);  
border-radius: 10px;
padding: 15px;
display: flex;
flex-direction: column;
gap: 10px;


h2{
    font-weight: bolder;
    font-size: 35px;
}
span{
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    font-size: 20px;
    color: #6E00FA;

    p{
    font-size: 30px;
    }
}
`