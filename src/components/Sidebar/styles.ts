import styled from "styled-components";

export const Container = styled.aside<{rows: string}>`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: ${props => props.rows};
  grid-area: 1 / 1 / 4 / 2;
  /* gap: .1rem; */
`