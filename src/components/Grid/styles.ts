import styled from "styled-components"

export const Container = styled.div<{columns: string, rows: string, size: number}>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};

  width: 1400px;
  height: ${props => props.size * 1.6}px;
  gap: 0;

  border: 1px solid #D9D9D9;
  border-radius: 5px;

  margin: 1rem 0;
`

