import { createGridArea } from '@site/src/utils/create-grid-area'
import React from 'react'
import { Container, EmptyItem } from './styles'

export function EmptyCell(props: { timeLength: number }) {
  const ArrayOfEmptyItems = []
  for (let i = 0; i < props.timeLength; i++) {
    ArrayOfEmptyItems.push(i)
  }

  return (
    <>
      {ArrayOfEmptyItems.map((el) => (
        <Container gridArea={createGridArea({ y: el, x: 1 }, 1)} key={el}>
          <EmptyItem></EmptyItem>
        </Container>
      ))}
    </>
  )
}
