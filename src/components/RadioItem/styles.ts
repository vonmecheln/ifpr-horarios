import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;

  background-color: #fff;
  box-shadow: 0px 0px 2px #00000080;

  width: 1.2rem;
  height: 1.2rem;

  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  cursor: pointer;
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: var(--ifm-color-primary);
  }
`
