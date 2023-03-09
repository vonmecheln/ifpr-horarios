import styled from 'styled-components'

export const GridContainer = styled.div<{
  gridRows: string
}>`
  display: grid;
  grid-template-columns: 10fr 90fr;
  grid-template-rows: ${(props) => props.gridRows};
  font-size: calc(var(--font-size-base) / 16 * 1rem);

  border: 1px solid var(--border-grid);
  border-radius: 5px;

  margin: 1rem 0.3rem;

  position: relative;

  @media print {
    width: 100vw;
    margin: 0px;

    border: 1px solid black;

    div span,
    div a {
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
