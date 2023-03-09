import styled from 'styled-components'

export const EmptyItem = styled.div`
  border: 1px dotted var(--border-empty-box);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='%239C92AC' fill-opacity='.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-color: transparent;
  width: 100%;
  height: 100%;
`

export const Container = styled.div<{ gridArea: string }>`
  display: flex;
  grid-area: ${(props) => props.gridArea};
`
