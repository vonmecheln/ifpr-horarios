import { ItemContent } from '@site/src/css/ItemContent'
import { Classes } from '@site/src/interfaces/interfaces'
import { createColorByTeacher } from '@site/src/utils/create-color-by-teacher'
import { createURL } from '@site/src/utils/create-url-link'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGridArea } from '../../utils/create-grid-area'
import Link from '@docusaurus/Link'

export function Item(props: { timetable: Classes }) {
  const colorItem = props.timetable.color.split(',')

  const theme = {
    teacherBackground: `hsl(${colorItem[0]} ${
      Number(colorItem[1]) * 100
    }% 50%)`,
  }

  return (
    <ThemeProvider theme={theme}>
      <ItemContent>
        <strong className="subject" title={props.timetable.subject}>
          {props.timetable.subject}
        </strong>
        {props.timetable.links.map((a) => {
          return (
            <Link title={a.title} to={a.url} key={a.url}>
              {a.title}
            </Link>
          )
        })}
      </ItemContent>
    </ThemeProvider>
  )
}
