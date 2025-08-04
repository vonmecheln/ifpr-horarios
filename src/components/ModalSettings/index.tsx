import React, { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Slider from '@radix-ui/react-slider'
import {
  DialogClose,
  DialogContent,
  DialogTrigger,
  ScreenshotButton,
  SettingsContainer,
} from './styles'
import { Gear, X, Check, Camera } from 'phosphor-react'
import { RadioItem } from '../RadioItem'
import { GridContext } from '../Grid'
import { TimetableViewType, TimetableColorType} from '@site/src/reducers/settings/reducer'

export interface ModalSettingsProps {
  downloadScreenshot: () => any
}

export function ModalSettings({ downloadScreenshot }: ModalSettingsProps) {
  const { isMenuFixed, modifyMenu, timetableView, reduceGrid, timetableColor, colorizeGrid } =
    useContext(GridContext)

  function handleChangeMenu() {
    modifyMenu(!isMenuFixed)
  }

  function handleChangeTimetableView(newView: TimetableViewType) {
    reduceGrid(newView)
  }

  function handleChangeTimetableColor(newColor: TimetableColorType) {
    colorizeGrid(newColor)
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <Gear size={'2rem'} />
      </DialogTrigger>
      <Dialog.Portal>
        <DialogContent>
          <header>
            <div>
              <Dialog.Title>Configurações</Dialog.Title>
              <Dialog.Description>
                Configure o horário da maneira como quiser
              </Dialog.Description>
            </div>

            <DialogClose type="button">
              <X size={'1.5rem'} />
            </DialogClose>
          </header>

          <hr />

          <SettingsContainer>
            <div className="menuFixed">
              <Checkbox.Root
                id="menuFixed"
                defaultChecked={isMenuFixed}
                onCheckedChange={handleChangeMenu}
              >
                <Checkbox.Indicator>
                  <Check size={'1rem'} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="menuFixed">Menu fixo</label>
            </div>

            <RadioGroup.Root
              className="radioContainer"
              defaultValue={timetableView}
              onValueChange={(value: TimetableViewType) =>
                handleChangeTimetableView(value)
              }
            >
              <RadioItem title="Horário Completo" value="completed" />
              <RadioItem title="Horário Condensado" value="condensed" />
              <RadioItem
                title="Horário Super Condensado"
                value="superCondensed"
              />
            </RadioGroup.Root>

            {/* <RadioGroup.Root
              className="radioColor"
              defaultValue={timetableColor}
              onValueChange={(value: TimetableColorType) =>
                handleChangeTimetableColor(value)
              }
            >
              <RadioItem title="Sem cores" value="noColor" />
              <RadioItem title="Cores por Professor" value="teacherColor" />
              <RadioItem title="Cores por Componente" value="subjectColor" />
              <RadioItem title="Cores por Turma" value="studentsColor" />
              <RadioItem title="Cores por Sala" value="roomColor" />
              <RadioItem title="Cores por Turma, Professor, Componente e Sala" value="allColor" />
              
            </RadioGroup.Root> */}

            {/* <div className="sliderContainer">
              <span>Tamanho da fonte</span>
              <Slider.Root 
                className="slider" 
                defaultValue={[14.4]} 
                min={8} 
                max={30} 
                step={1} 
                aria-label="Tamanho da fonte"
              >
                <Slider.Track className="sliderTrack">
                  <Slider.Range className="sliderRange" />
                </Slider.Track>
                <Slider.Thumb className="sliderThumb" />
              </Slider.Root>
            </div> */}


          </SettingsContainer>

          <hr />
          <footer>
            <Dialog.Description>
              Caso queira ter o horário como uma imagem
            </Dialog.Description>
            <ScreenshotButton
              onClick={downloadScreenshot}
              title="Download do horário como imagem"
            >
              <Camera size={25} />
            </ScreenshotButton>
          </footer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
