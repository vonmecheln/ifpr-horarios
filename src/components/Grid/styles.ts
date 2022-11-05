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

  /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='%239C92AC' fill-opacity='.4' fill-rule='evenodd'/%3E%3C/svg%3E"); */

  /* column-gap: 1px; */

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

