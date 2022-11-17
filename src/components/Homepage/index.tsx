import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { Grid } from '../Grid'
import { ItemGroup, SlideCell, SlidePage } from '../Timetable/styles'
import { Container } from './styles'
import { useKeenSlider } from 'keen-slider/react';

export function Homepage() {
const [sliderRef, instanceRef] = useKeenSlider({  
  breakpoints: {
    "(max-width: 594px)": {
      slides: {
        perView: 1,
        spacing: 1,
      },
    },
    "(min-width: 595px) and (max-width: 695px)":{
      slides: {
        perView: 2,
        spacing: 1,
      }
    },
    "(min-width: 696px) and (max-width: 796px)":{
      slides: {
        perView: 3,
        spacing: 1,
      }
    },
    "(min-width: 797px) and (max-width: 896px)":{
      slides: {
        perView: 4,
        spacing: 1,
      }
    },
    "(min-width: 897px) and (max-width: 996px)":{
      slides: {
        perView: 5,
        spacing: 1,
      }
    },
    "(min-width: 997px) and (max-width: 1096px)":{
      slides: {
        perView: 3,
        spacing: 1,
      }
    },
    "(min-width: 1097px) and (max-width: 1196px)":{
      slides: {
        perView: 4,
        spacing: 1,
      }
    },
    "(min-width: 1197px)":{
      slides: {
        perView: 5,
        spacing: 1,
      }, 
    }
  }
})

return (
  <Container ref={sliderRef}>
    <SlidePage className={`keen-slider__slide number-slide1`}>
      <SlideCell rowsSize='1fr' className="teste">
        <ItemGroup gridArea='1 / 1 / 2 / 2' className='day'>
          aside
        </ItemGroup>
        <ItemGroup gridArea='2 / 1 / 3 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='3 / 1 / 4 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='4 / 1 / 6 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='6 / 1 / 7 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='7 / 1 / 8 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='8 / 1 / 9 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='9 / 1 / 10 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='11 / 1 / 12 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='12 / 1 / 13 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='13 / 1 / 14 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='14 / 1 / 15 / 2' className=''>
          Content
        </ItemGroup>
      </SlideCell>
    </SlidePage><SlidePage className={`keen-slider__slide number-slide2`}>
      <SlideCell rowsSize='1fr' className="teste">
        <ItemGroup gridArea='1 / 1 / 2 / 2' className='day'>
          aside
        </ItemGroup>
        <ItemGroup gridArea='2 / 1 / 3 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='3 / 1 / 4 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='4 / 1 / 6 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='6 / 1 / 7 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='7 / 1 / 8 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='8 / 1 / 9 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='9 / 1 / 10 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='11 / 1 / 12 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='12 / 1 / 13 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='13 / 1 / 14 / 2' className=''>
          Content
        </ItemGroup>
        <ItemGroup gridArea='14 / 1 / 15 / 2' className=''>
          Content
        </ItemGroup>
      </SlideCell>
    </SlidePage>
  </Container>
)
  // return (
  //   <Container>
  //     <h1>Para visualizar o novo horário:</h1>
  //     <button>
  //       <a href="docs/intro/">Clique aqui</a>
  //     </button>
  //   </Container>
  // )
}