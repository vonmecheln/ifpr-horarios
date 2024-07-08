import React from 'react'
import { Container } from './styles'

interface FooterProps {
  textFooter: string
}

export function Footer({ textFooter }: FooterProps) {
  return (
    <Container>
      <p>{textFooter}</p>
    </Container>
  )
}
