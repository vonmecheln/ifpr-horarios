import styled from "styled-components";

export const Container = styled.header`
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;

  border: 1px solid var(--border-cell);
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  margin-bottom: 1px;

  color: #000;  
  background-color: var(--background-cell);

  box-shadow: 0px 0px 1px 1px var(--shadow);

  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;

  transition: filter .4s;

  &:hover {
    filter: brightness(0.9);
  }
`