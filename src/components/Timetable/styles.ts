import styled from "styled-components";

export const Container = styled.section`
  grid-area: 2 / 2 / 4 / 3;
  /* background-color: green; */
  display: flex;
  overflow: hidden;
`

export const Slide = styled.div<{rowsSize: string}>`
  display: grid;
  width: 100%;
  grid-template-rows: 50px${props => props.rowsSize};
  grid-template-columns: 100%;
  /* gap: .1rem; */
`

export const SlideItemContainer = styled.div<{gridArea: string}>`
  grid-area: ${props => props.gridArea};
  display: flex;
`
