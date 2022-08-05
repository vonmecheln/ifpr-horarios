import styled from "styled-components"

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #000;  
  padding: 0 1rem;

  span {
    display: block;
  }

  a {
    cursor: pointer;
    color: #666;
    transition: all 0.4s;
  }

  a:hover {
    color: #2ca202
  }
`