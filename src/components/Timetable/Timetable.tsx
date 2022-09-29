import React from 'react';
import { Box, Cell } from '../../css/Cell'

export interface ClassesProps {
  subject: string;
  size: number;
  teacher?: string;
  classroom?: string;
  students?: string;
  x: number;
  y: number;
  nickname?: string;
}

const or = 2 //OFFSET ROW
const oc = 1 //OFFSET COL
let count = 0
let boxes

function createURL(obj: string) {
  return obj.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(' ', '_')
}

function formatComponent(props: ClassesProps, title: string) {
  if (title === props.teacher) {
    return <><a  title={props.classroom} href={`../Sala/${createURL(props.classroom)}`}>{`${props.classroom}`}</a><a href={`../Turma/${createURL(props.students)}`}>{`${props.students}`}</a></>
  }

  else if (title === props.students) {
    return <><a title={props.classroom} href={`../Sala/${createURL(props.classroom)}`}>{`${props.classroom}`}</a><a title={props.teacher} href={`../Professor/${createURL(props.teacher)}`}>{`${props.teacher}`}</a></>
  }

  else {
    return <><a title={props.classroom} href={`../Turma/${createURL(props.students)}`}>{`${props.students}`}</a><a title={props.teacher} href={`../Professor/${createURL(props.teacher)}`}>{`${props.teacher}`}</a></>
  }
}

function generateEmptyCells(cols: number, rows: number) {
  boxes = []
  let row = 1
  let col = 0
  
  for (let index = 0; index < 90; index++) {
    if ( col < cols ) 
      col++
    else if (row < rows){ 
      col = 1
      row+=1
    }
    boxes.push({
      title: (row + or) === 5 ||
             (row + or) ===  9 ||
             (row + or) ===  12 ||
             (row + or) === 15 ||
             (row + or) === 18
             ? 'Intervalo' : '',
      ga: `${or + row} / ${oc + col} / ${or + row + 1} / ${oc + col + 1}`,
      className: `empty ${((col + oc) === 2 && (row + or) === 9) ? 'break-here' : ''}`
    })
  }
}

export default function TableTime(props: {listClasses: Array<ClassesProps>, rows: number, cols: number, title: string}) {
  generateEmptyCells(props.cols, props.rows)
  
  return (
    <>
      {
        boxes.map(box => {
          return <Box gridArea={box.ga} className={box.className} key={count++}><span>{box.title}</span></Box>
        })
      }
      {
        props.listClasses.map((el) => {
          let ga = `${or+el.x} / ${oc+el.y} / ${or + el.size + el.x} / ${oc + 1 + el.y}`
          return <Cell key={count++} gridArea={ga}>
            <div>
              <span className='subject' title={el.subject}>{`${el.subject}`}</span>
              <span className='nickname' title={el.subject}>{`${el.nickname}`}</span>
              {formatComponent(el, props.title)}
            </div>
          </Cell>
          // return <Cell key={el.subject} gridArea={ga}>{`${el.subject} (${row}, ${col}) ${ga}`}</Cell>
        })
      }
    </>
  )
}
