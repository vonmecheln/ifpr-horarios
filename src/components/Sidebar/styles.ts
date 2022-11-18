import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Container = styled.aside<{rows: string}>`
  display: grid;
  grid-template-columns: minmax(max-content, 100%);
  grid-template-rows: ${props => props.rows};
  grid-area: 1 / 1 / 3 / 2;
  row-gap: 1px;

  .sidebar:nth-child(1) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`

