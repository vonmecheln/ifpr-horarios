import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const DialogTrigger = styled(Dialog.Trigger)`
  background: transparent;
  border: none;
  color: var(--ifm-color-primary);
  
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    
    width: min(30rem, 80%);
    height: 25rem;

    transform: translate(-50%, -50%);

    padding: 0.8rem 1rem;

    background: #52c234; 
    background: -webkit-linear-gradient(to right, #06170080, #52c23480);  
    background: linear-gradient(to right, #06170080, #52c23480);
    backdrop-filter: blur(20px);
    color: #fff;
    
    box-shadow: 0px 0px 10px #000000, inset 0px 0px 2px rgba(255, 255, 255, 0.25);


    border-radius: 0.5rem;

    header, footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      * {
        margin: 0;
      }

      p {
        color: #D9D9D9;
        font-size: 0.9rem;
        text-shadow: 0px 0px 2px #00000025;
      }
    }

    hr {
      margin: 0px;
      box-shadow: 0px 0px 2px #00000050;
    }

    footer {
      height: 4rem;
    }

    
`
export const DialogClose = styled(Dialog.Close)`
  background: transparent;
  color: red;
  
  padding: 0;

  outline: none;
  border: none;

  cursor: pointer;
  
  transition: filter .4s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const SettingsContainer = styled.main`
  height: 200px;
  padding: 1rem 2rem;
  margin-top: 0.25rem;

  font-size: 0.8rem;
  
  display: grid;
  align-items: center;
  grid-template: repeat(2, 1fr) / repeat(2, minmax(max-content, 100%));
  /* grid-template-areas: 
    ""; */

  .menuFixed {
    display: flex;
    align-items: center;
    grid-area: 1 / 1 / 2 / 2;
    gap: .5rem;

    button {
      all: unset;

      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 1.2rem;
      height: 1.2rem;
      border-radius: .2rem;

      box-shadow: 0px 0px 2px #00000080;

      background-color: #fff;
      color: var(--ifm-color-primary);

      cursor: pointer;

      svg {
        display: block;
      }
    }
  }

  .radioContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    grid-area: 1 / 2 / 2 / 3;
  }

  @media (max-width: 550px) {
    grid-template: repeat(2, minmax(max-content, 100%)) / 1fr;

    .radioContainer {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
`

export const ScreenshotButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 100%;
  outline: none;

  cursor: pointer;

  background-color: #fff;
  color: var(--ifm-color-primary);

  transition: filter 0.4s;
  
  box-shadow: 0px 0px 2px #00000080;

  &:hover {
    filter: brightness(0.9);
  }
`
