import styled from "styled-components"

export const Container = styled.div<{columns: string, rows: string, size: number}>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  margin: 1rem auto;
  width: 95vw;
  height: ${props => props.size * 1.3}px;
  border: 1px solid black;
  gap: 0;
  background-color: #E1E1E1;
`

