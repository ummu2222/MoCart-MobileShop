import styled from 'styled-components';


export const ButtonContainer = styled.button`

    text-transform : capitalize;
    font-size : 1.4rem;
    background : transparent;
    border: 0.08rem solid var(--lightBlue);

    border-color:${props =>props.cart?"var(--mainYellow)":"white" };

    color: ${prop => prop.cart?"var(--mainYellow)":"white" } ;
    
    border-radius:0.5rem;
    padding : 0.2rem 0.5rem;
    cursor :pointer;
    margin : 0.2rem 0.5rem 0.2rem 0;
    transition:all 0.1s ease-in-out;

    &:hover{


        background: ${prop => prop.cart?"var(--mainYellow)":"white" };
        color:var(--mainBlue); 
    }

    &:focus{
        outline:none;
    }

`;
