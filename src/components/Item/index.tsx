import { ItemContent } from "@site/src/css/ItemContent";
import { createColorByTeacher } from "@site/src/utils/create-color-by-teacher";
import { createURL } from "@site/src/utils/create-url-link";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGridArea } from "../../utils/create-grid-area";
import { ClassesProps, Timetable } from "../Timetable";

export function Item(props: {timetable: ClassesProps}) {
  let colorItem = props.timetable.color.split(',')
    
  const theme = {
    teacherBackground: `hsl(${colorItem[0]} ${Number(colorItem[1]) * 100}% 50%)`,
  }

  return (
    <ThemeProvider theme={theme}>
      <ItemContent>
        <span className="subject" title={props.timetable.subject}>{props.timetable.subject}</span>
        {
          props.timetable.link.map(a => {
            return (
              <a title={a.title} href={a.url} key={a.url}>{a.title}</a>
            )
          })
        }
      </ItemContent>
    </ThemeProvider>
  )
}