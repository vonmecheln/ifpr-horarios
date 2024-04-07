import styled from 'styled-components'

export const Cell = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-align: center;

  padding: 0.4em;

  /* border: 1px solid var(--border-cell); */
  border-radius: 0px;

  color: var(--text-cell);
  background-color: var(--background-cell);

  /* box-shadow: 0px 0px 1px 1px var(--shadow); */

  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  font-weight: 300;

  &.sidebar ~ &.sidebar:not(&.sidebar:nth-of-type(25)) {
    border-radius: 0px;
  }

  &:nth-of-type(7) {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &.sidebar:nth-of-type(25) {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
`
