import styled from "styled-components";

export const Container = styled.header<{rowEnd: string, columns: string}>`
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;
  
  padding: 0.4rem;
  
  border: 1px solid var(--border-cell);
  border-radius: 5px;

  color: #000;  
  background-color: var(--background-cell);

  box-shadow: 0px 0px 1px 1px var(--shadow);

  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
`