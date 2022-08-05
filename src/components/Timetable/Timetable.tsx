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

function formatComponent(props: ClassesProps, title: string) {
  if (title === props.teacher) {
    return <><a href={`../sala/${props.classroom.toLowerCase().replace(' ', '_')}`}>{`${props.classroom}`}</a><a href={`../turma/${props.students.toLowerCase().replace(' ', '_')}`}>{`${props.students}`}</a></>
  }

  else if (title === props.students) {
    return <><a href={`../sala/${props.classroom.toLowerCase().replace(' ', '_')}`}>{`${props.classroom}`}</a><a href={`../professores/${props.teacher.toLowerCase().replace(' ', '_')}`}>{`${props.teacher}`}</a></>
  }

  else {
    return <><a href={`../students/${props.classroom.toLowerCase().replace(' ', '_')}`}>{`${props.students}`}</a><a href={`../professores/${props.teacher.toLowerCase().replace(' ', '_')}`}>{`${props.teacher}`}</a></>
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
          return <Cell key={el.subject} gridArea={ga}>
            <span>{`${el.subject}`}</span>
            {formatComponent(el, props.title)}
          </Cell>
          // return <Cell key={el.subject} gridArea={ga}>{`${el.subject} (${row}, ${col}) ${ga}`}</Cell>
        })
      }
    </>
  )
}