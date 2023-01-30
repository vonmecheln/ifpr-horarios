import { DayProps } from "../components/Timetable";
import { createURL } from "./create-url-link";
// Passar uma lita de strings
// Para cada string, eu crio um objeto {title, url}
// Qual entidade pertence a string????

function createLink(title: string, entity: string) {
  return {
    title,
    url: `../${entity}/${createURL(title)}`
  }
}

export function createLinkToTheCell(props: {weekClasses: DayProps[], title: string}) {
  
  props.weekClasses.forEach(dayClass => {
    dayClass.dayClasses.forEach(el => {
      el.links = []
      if (props.title === el.students) {
        el.links = [(createLink(el.classroom, 'Sala'))]
      }

      else if (props.title === el.classroom) {
        el.links = [(createLink(el.students, 'Turma'))]
      }

      el.teachers.map(teacher => {
        if (props.title === teacher) {
          el.links = [(createLink(el.classroom, 'Sala')), createLink(el.students, 'Turma')]
        }
  
        else if (props.title === el.students) {
          el.links.push(createLink(teacher, 'Professor'))
        }
  
        else if (props.title === el.classroom){
          el.links.push(createLink(teacher, 'Professor'))
        }
      })
    })
  })
}