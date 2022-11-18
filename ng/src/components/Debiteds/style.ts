import styled from 'styled-components'



export const Container = styled.section`

width: 430px;
height: 500px;
border-radius: 10px;
box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.25); 
display: flex;
flex-direction: column;
gap: 30px;

div{
    display: flex;
    justify-content: space-between;
    padding: 15px;

    h2{
        font-size: 30px;
    }
    
 
}

ul{
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 7px;
    }

    &::-webkit-scrollbar-track{
        width: 10px;
    }
    
    
    &::-webkit-scrollbar-thumb{
        background-color: #c1c1c1;
        border-radius: 20px;
    }
    
    li{
        display: flex;
        width: 90%;
        min-height: 20%;
        
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 10px;
        justify-content: space-around;
        align-items: center;
        
        
        background-color: var(--red-ligth);
    }
}
    
`

