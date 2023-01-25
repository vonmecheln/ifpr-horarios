import styled from "styled-components";

export const Container = styled.header`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;

  border: 1px solid var(--border-cell);
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  margin-bottom: 1px;

  color: var(--text-cell);  
  background-color: var(--background-cell);

  font-family: 'Poppins', sans-serif;
  font-size: var(--font-size-base);
  font-weight: 300;
`