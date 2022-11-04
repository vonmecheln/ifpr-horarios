import { SlideItemModel } from "@site/src/css/SlideItemModel";
import { createColorByTeacher } from "@site/src/utils/create-color-by-teacher";
import { createURL } from "@site/src/utils/create-url-link";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGridArea } from "../../utils/create-grid-area";
import { ClassesProps, Timetable } from "../Timetable";

export function SlideItem(props: {timetable: ClassesProps}) {
  let colorTeacher = createColorByTeacher(props.timetable.teacher).split(',')
    
  const theme = {
    teacherBackground: `hsl(${colorTeacher[0]} ${Number(colorTeacher[1]) * 100}% 50%)`
  }

  return (
    <ThemeProvider theme={theme}>
      <SlideItemModel>
      <span className="subject" title={props.timetable.subject}>{props.timetable.subject}</span>
      {
        props.timetable.link.map(a => {
          return (
            <a title={a.title} href={a.url} key={a.url}>{a.title}</a>
          )
        })
      }
      {/* <span title={props.timetable.teacher}>{props.timetable.teacher}</span> */}
      </SlideItemModel>
    </ThemeProvider>
  )
}