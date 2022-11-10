import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogContent, DialogTrigger } from './styles'
import { Gear, X} from 'phosphor-react'

export function ModalEdit() {
  return (
    <Dialog.Root>
      <DialogTrigger>
        <Gear size={32}/>
      </DialogTrigger>
      <Dialog.Portal>
        <DialogContent>
          <Dialog.Title>Edite seu horário</Dialog.Title>
          Testando
          <Dialog.Description />
          <Dialog.Close
            type="button"
          >
            <X size={32}/>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}