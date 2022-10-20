import styled from "styled-components";

export const EmptyCell = styled.div<{ gridArea: string }>`
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
  background-color: transparent;

  span {
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-size: .7rem;
    white-space: nowrap;
  }
`