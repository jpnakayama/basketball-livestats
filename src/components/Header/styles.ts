import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['pp-900']};
  padding: 4rem 0 10rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  color: white;
  
  span {    
    color: red;
    border: 4px solid red;
    padding: 0.2rem;
    border-radius : 6px;

    margin-right: 0.2rem
  }

  div {
    display: flex;
    gap: 1rem
  }

`

export const AddInfoButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme['pp-500']};
  color: ${props => props.theme.white};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme['pp-700']};
    transition: background-color 0.2s;
  }
`