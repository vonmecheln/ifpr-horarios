import { Cell } from "@site/src/css/Cell";
import { SlideItemModel } from "@site/src/css/SlideItemModel";
import { createURL } from "@site/src/utils/create-url-link";
import React from "react";
import { createGridArea } from "../../utils/create-grid-area";
import { ClassesProps } from "../Timetable";


function formatComponent({classroom, teacher, students}: ClassesProps, title: string) {
  if (title === teacher) {
    return <><a  title={classroom} href={`../Sala/${createURL(classroom)}`}>{`${classroom}`}</a><a href={`../Turma/${createURL(students)}`}>{`${students}`}</a></>
  }

  else if (title === students) {
    return <><a title={classroom} href={`../Sala/${createURL(classroom)}`}>{`${classroom}`}</a><a title={teacher} href={`../Professor/${createURL(teacher)}`}>{`${teacher}`}</a></>
  }

  else {
    return <><a title={classroom} href={`../Turma/${createURL(students)}`}>{`${students}`}</a><a title={teacher} href={`../Professor/${createURL(teacher)}`}>{`${teacher}`}</a></>
  }
}

export function SlideItem(props: {timetable: ClassesProps, timetableName: string}) {
  return (
    <SlideItemModel>
      <span className="subject" title={props.timetable.subject}>{props.timetable.subject}</span>
      {/* {formatComponent(props.timetable, props.timetableName)} */}
    </SlideItemModel>
  )
}