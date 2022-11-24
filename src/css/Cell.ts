import styled from "styled-components"

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  
  text-align: center;
  
  padding: 0.4rem;
  
  /* border: 1px solid var(--border-cell); */
  border-radius: 5px;

  color: var(--text-cell);  
  background-color: var(--background-cell);

  /* box-shadow: 0px 0px 1px 1px var(--shadow); */

  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;

  div {
    width: 100%;
    max-width: 10rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span.text-time, span.text-day {
    font-weight: 400;
  }

  transition: filter .4s;

  strong {
    font-size: 1rem;
  }

  a {
    cursor: pointer;

    transition: all 0.4s;

    font-weight: 400;
    
    color: var(--text-link);
    text-decoration: none;
  }

  div span, div a {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a:hover {
    color: var(--text-link-hover);
  }

  &.sidebar ~ &.sidebar:not(&.sidebar:nth-of-type(25)) {
    border-radius: 0px;
  }

  &:nth-of-type(7) {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &.sidebar:nth-of-type(25) {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }

  &.sidebar {
    font-size: 0.8rem;
  }
`