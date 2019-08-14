import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background:transparent;
    border: 0.05rem solid var(--buttonCol);
    border-color: var(--buttonCol);
    color: var(--buttonCol);
    border-radius: 0.3rem;  
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        box-shadow: 2px 3px var(--hoverCol); 
    background: var(--buttonCol);
    color: var(--hoverCol);
    }
    &:focus{
    outline: none;
    }
`;