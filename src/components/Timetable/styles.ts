import styled from 'styled-components'

export const Container = styled.section<{ isMenuFixed: boolean }>`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  width: 100%;
  overflow: ${(props) => (props.isMenuFixed === true ? 'visible' : 'hidden')};

  .day {
    z-index: 10;
    position: sticky;
    top: ${(props) => (props.isMenuFixed === true ? '3.5rem' : '0')};
  }
`

export const SlidePage = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
`

export const SlideCell = styled.section<{ rowsSize: string }>`
  width: 100%;

  display: grid;
  grid-area: 1 / 1 / 2 / 2;
  grid-template-rows: 50px ${(props) => props.rowsSize};
  grid-template-columns: 100%;
  row-gap: 1px;
`

export const ItemGroup = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  display: flex;
`
