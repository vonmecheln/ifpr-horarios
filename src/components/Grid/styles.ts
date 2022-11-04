import styled from "styled-components"

export const Container = styled.div<{columns: string, size: number}>`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: 50px 50px 1fr;

  width: 100%;
  /* height: ${props => props.size * 2.6}px; */

  border: 1px solid var(--border-grid);
  border-radius: 5px;

  overflow: hidden;
  margin: 1rem 0;

  column-gap: 1px;

  @media print {
    width: 100vw;
    height: ${props => props.size * 2.2}px;
    margin: 0px;

    border: 1px solid black;

    div span, div a {
      display: block;
      text-overflow: inherit;
      overflow: auto;
      white-space: normal;
    }

    .subject {
      display: none;
    }

    .nickname {
      display: block;
    }

    .empty {
      border: none;
    }
  }
`

