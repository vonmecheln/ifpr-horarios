import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { Container } from './styles'

export function Homepage() {
  return (
    <Container>
      <h1>Para visualizar o novo horário:</h1>
      <button>
        <a href="docs/intro/">Clique aqui</a>
      </button>
    </Container>
  )
}