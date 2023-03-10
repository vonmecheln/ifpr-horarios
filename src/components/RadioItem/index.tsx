import React from 'react'
import { Container, RadioGroupIndicator, RadioGroupItem } from './styles'

interface RadioItemProps {
  title: string
  value: string
}

export function RadioItem({ title, value }: RadioItemProps) {
  return (
    <Container>
      <RadioGroupItem value={value} id={value}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <label htmlFor={value}>{title}</label>
    </Container>
  )
}
