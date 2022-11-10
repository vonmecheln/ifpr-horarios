import styled from "styled-components";

export const Container = styled.section`
  grid-area: 2 / 2 / 4 / 3;
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const SlidePage = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template: 1fr / 1fr;
`

export const ItemGroup = styled.div<{gridArea: string}>`
  grid-area: ${props => props.gridArea};
  display: flex;
`

export const SlideCell = styled.section<{rowsSize: string}>`
  grid-area: 1 / 1 / 2 / 2;
  height: 100%; 
  width: 100%; 
  display: grid; 
  grid-template-rows: 50px${props => props.rowsSize}; 
  grid-template-columns: 100%;
  row-gap: 1px;
`


