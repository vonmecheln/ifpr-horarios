import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 480px;
    height: 300px;
    transform: translate(-50%, -50%);

    padding: 0.8rem 1rem;

    background-color: green;
    border-radius: 0.5rem;
`

export const DialogTrigger = styled(Dialog.Trigger)`
  background: transparent;
  border: none;
  color: green;

  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9);
  }
`