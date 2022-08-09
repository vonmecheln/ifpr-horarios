import styled from "styled-components"

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  
  padding: 0.4rem 0.8rem;
  
  border: 1px solid var(--border-cell);
  border-radius: 5px;
  color: #000;  
  background-color: var(--background-cell);

  box-shadow: 0px 0px 1px 1px var(--shadow);

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

export const Box = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  
  padding: 0.4rem 0.8rem;
  
  border: 1px dotted var(--border-box);
  border-radius: 5px;

  text-align: center;
  font-size: .8rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  color: var(--text-interval);

  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='%239C92AC' fill-opacity='.4' fill-rule='evenodd'/%3E%3C/svg%3E");

  span {
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: .2rem;
  }
`