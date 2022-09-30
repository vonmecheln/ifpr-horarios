import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Sidebar, { TimeProps } from '../Sidebar'
import TableTime, {  ClassesProps} from '../Timetable'
import { useKeenSlider } from 'keen-slider/react'

interface GridProps {
  title: string;
  weekDays: Array<string>;
  time: Array<TimeProps>;
  listClasses: Array<ClassesProps>;
}
  
const Grid = ({ title, weekDays, time, listClasses}: GridProps) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 5
    },
    breakpoints: {
      "(max-width: 700px)": {
        slides: { perView: 1},
      },
    }
  })
    let rows = ''
    let columns = `10fr 90fr`
    time.forEach(el => {
      rows += ` ${el.size}fr`
    })
    let size = 0;
    time.forEach(el => {
      size += el.size
    })
    return(
    <Container columns={columns} rows={rows} size={size}>
      <Header weekDays={weekDays} title={title}/>
      <Sidebar timeClasses={time} rows={`100px${rows}`}/>
      {/* <TableTime listClasses={listClasses} rows={time.length} cols={weekDays.length} title={title}/> */}
      <div style={{gridArea: "2 / 2 / 4 / 3", backgroundColor: "green", display: "flex", overflow: 'hidden'}} ref={sliderRef} >
        <div style={{display: "grid", width: "100%", gridTemplateRows: `50px${rows}`, gap: "0px"} } className="keen-slider__slide number-slide1">
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
          <div style={{backgroundColor: 'blue', border: '1px solid #fff', padding: '0.4rem'}}></div>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"} } className="keen-slider__slide number-slide2">
          <span>Matemática</span>
          <span>Carla Melli</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"} } className="keen-slider__slide number-slide3">
          <span>Matemática</span>
          <span>Carla Melli</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"} } className="keen-slider__slide number-slide4">
          <span>Matemática</span>
          <span>Carla Melli</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"} } className="keen-slider__slide number-slide5">
          <span>Matemática</span>
          <span>Carla Melli</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
      </div>
    </Container>
  )
}

export default Grid