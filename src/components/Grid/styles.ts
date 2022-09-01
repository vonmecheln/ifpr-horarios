import styled from "styled-components"

export const Container = styled.div<{columns: string, rows: string, size: number}>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};

  width: 100%;
  height: ${props => props.size * 2.6}px;
  gap: 2px;

  border: 1px solid var(--border-grid);
  border-radius: 5px;

  margin: 1rem 0;
`

