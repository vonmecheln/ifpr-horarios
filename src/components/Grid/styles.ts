import styled from "styled-components"

export const Container = styled.div<{gridColumns: string, gridRows: string}>`
  display: grid;
  grid-template-columns: ${props => props.gridColumns};
  grid-template-rows: ${props => props.gridRows};

  border: 1px solid var(--border-grid);
  border-radius: 5px;

  margin: 1rem 0.3rem;

  position: relative;

  @media print {
    width: 100vw;
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

