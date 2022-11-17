import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { DialogClose, DialogContent, DialogTrigger, ScreenshotButton, SettingsContainer } from './styles'
import { Gear, X, Check, Camera} from 'phosphor-react'
import { RadioItem } from '../RadioItem';

export interface ModalSettingsProps {
  isMenuFixed: boolean;
  setIsMenuFixed: React.Dispatch<React.SetStateAction<boolean>>
  timetableView: string;
  setTimetableView: React.Dispatch<React.SetStateAction<string>>;
  downloadScreenshot: () => any;
}

export function ModalSettings({ isMenuFixed, setIsMenuFixed, timetableView, setTimetableView, downloadScreenshot}: ModalSettingsProps) {
  return (
    <Dialog.Root>
      <DialogTrigger>
        <Gear size={'2rem'}/>
      </DialogTrigger>
      <Dialog.Portal>
        <DialogContent>
          <header>
            <div>
              <Dialog.Title>Configurações</Dialog.Title>
              <Dialog.Description>Configure o horário da maneira como quiser</Dialog.Description>
            </div>
            
            <DialogClose type="button">
              <X size={'1.5rem'}/>
            </DialogClose>
          </header>
          
          <hr />

          <SettingsContainer>
            <div className='menuFixed'>
              <Checkbox.Root 
                id='menuFixed'
                defaultChecked={isMenuFixed}
                onCheckedChange={() => setIsMenuFixed(!isMenuFixed)}
              >
                <Checkbox.Indicator>
                  <Check size={'1rem'}/>
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="menuFixed">Menu fixo</label>
            </div>

            <RadioGroup.Root
              className='radioContainer'
              defaultValue={timetableView}
              onValueChange={(value) => setTimetableView(value)}
            >
              <RadioItem 
                title="Horário Completo" 
                value='completed'
              />
              <RadioItem 
                title="Horário Condensado" 
                value='condensed'
              />
              <RadioItem 
                title="Horário Super Condensado" 
                value='superCondensed'
              />
            </RadioGroup.Root>


          </SettingsContainer>
          <hr/>
          <footer>
            <Dialog.Description>
              Caso queira ter o horário como uma imagem
            </Dialog.Description>
            <ScreenshotButton
              onClick={downloadScreenshot}
              title="Download do horário como imagem"
            >
              <Camera size={25}/>
            </ScreenshotButton>
          </footer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}