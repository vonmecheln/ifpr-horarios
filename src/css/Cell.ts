import styled from "styled-components"

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  
  padding: 0.4rem 0.8rem;
  
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;  
  background-color: #D9D9D9;

  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;

  span.text-time, span.text-day {
    font-weight: 400;
  }

  transition: filter .4s;

  strong {
    font-size: 1rem;
  }

  a {
    cursor: pointer;
    color: #666;
    transition: all 0.4s;
    font-weight: 400;
    text-decoration: none;
    color: var(--text-link)
  }

  a:hover {
    color: var(--text-link-hover);
  }

  &:hover {
    filter: brightness(0.9);
  }
`