import React from 'react';
import { Cell } from '../../css/Cell'

export interface ClassesProps {
  subject: string;
  size: number;
  teacher?: string;
  classroom?: string;
  students?: string;
  x: number;
  y: number;
}

function createURL(obj: string) {
  return obj.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(' ', '_')
}

function formatComponent(props: ClassesProps, title: string) {
  if (title === props.teacher) {
    return <><a href={`../Sala/${createURL(props.classroom)}`}>{`${props.classroom}`}</a><a href={`../Turma/${createURL(props.students)}`}>{`${props.students}`}</a></>
  }

  else if (title === props.students) {
    return <><a href={`../Sala/${createURL(props.classroom)}`}>{`${props.classroom}`}</a><a href={`../Professor/${createURL(props.teacher)}`}>{`${props.teacher}`}</a></>
  }

  else {
    return <><a href={`../Turma/${createURL(props.classroom)}`}>{`${props.students}`}</a><a href={`../Professor/${createURL(props.teacher)}`}>{`${props.teacher}`}</a></>
  }
}

export default function TableTime(props: {listClasses: Array<ClassesProps>, rows: number, cols: number, title: string}) {
  let row = 1
  let col = 0
  const or = 2 //OFFSET ROW
  const oc = 1 //OFFSET COL
  let count = 0

  return (
    <>
      {
        props.listClasses.map((el) => {

          if ( col < props.cols ) 
            col++
          else { 
            col = 1
            row+=1
          }

          let ga = `${or+el.x} / ${oc+el.y} / ${or + el.size + el.x} / ${oc + 1 + el.y}`
          return <Cell key={count++} gridArea={ga}>
            <span>{`${el.subject}`}</span>
            {formatComponent(el, props.title)}
          </Cell>
          // return <Cell key={el.subject} gridArea={ga}>{`${el.subject} (${row}, ${col}) ${ga}`}</Cell>
        })
      }
    </>
  )
}
