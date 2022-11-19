import styled from 'styled-components'



export const Container = styled.section`

width: 430px;
height: 500px;
border-radius: 10px;
box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.25); 
display: flex;
flex-direction: column;
gap: 30px;

@media screen and (max-width: 1230px) {

width: 300px;
height: 370px;
}

div{
    display: flex;
    justify-content: space-between;
    padding: 15px;

    h2{
        font-size: 30px;
    }
    
    button{
        border: unset;
        border-radius: 10px;
        background-color: var(--blue-primary);
        display: flex;
        font-weight: Bolder;
        color: white;
        svg{
            margin: auto;
            
            path{
                stroke-width: 3;
                stroke: white;
            }
        }
    }
}

ul{
    height: 90%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 10px;

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
        border-radius: 10px;
        justify-content: space-around;
        align-items: center;
        
        
        background-color: var(--green-ligth);

        div{
            display: flex;
            flex-direction: column;

        }
    }
}
    
`

