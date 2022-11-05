import styled from "styled-components";

export const Container = styled.section`
  grid-area: 2 / 2 / 4 / 3;
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const Slide = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
`

export const SlideItemContainer = styled.div<{gridArea: string}>`
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

export const EmptyCell = styled.div`
  border: 1px dotted #ededed;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='%239C92AC' fill-opacity='.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-color: transparent; 
  width: 100%; 
  height: 100%;
`
