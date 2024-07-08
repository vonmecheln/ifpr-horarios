import React, { useContext } from 'react'
import { GridContext } from '../Grid'
import { HeaderContainer } from './styles'

export function Header() {
  const { title } = useContext(GridContext)

  return (
    <HeaderContainer>
      <strong>{title}</strong>
    </HeaderContainer>
  )
}
