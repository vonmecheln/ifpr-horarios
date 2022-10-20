import React from 'react'
import { Container } from './styles';

interface WeekProps{
  title: string;
}

export function Header(props: WeekProps) {
  return (
    <Container>
      <strong>{props.title}</strong>
    </Container>
  ) 
}