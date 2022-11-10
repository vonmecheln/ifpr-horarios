import { WeekClassesProps } from "../components/Timetable";
import { createURL } from "./create-url-link";
// 

export function createLinkToTheCell(props: {weekClasses: WeekClassesProps[], title: string}) {
  props.weekClasses.forEach(dayClass => {
    dayClass.timetable.forEach(el => {
      if (props.title === el.teacher) {
        el.link= [{
          title: el.classroom,
          url: `../Sala/${createURL(el.classroom)}`
        },
        {
          title: el.students,
          url: `../Turma/${createURL(el.students)}`
        }]
      }

      else if (props.title === el.students) {
        el.link = [{
          title: el.classroom,
          url: `../Sala/${createURL(el.classroom)}`
        },
        {
          title: el.teacher,
          url: `../Professor/${createURL(el.teacher)}`
        }]
      }

      else {
        el.link = [{
          title: el.students,
          url: `../Turma/${createURL(el.students)}`
        },
        {
          title: el.teacher,
          url: `../Professor/${createURL(el.teacher)}`
        }]
      }
    })
  })
}