import { Classes } from '../interfaces/interfaces'

export function createGroupItems(timetable: Classes[]) {
  const dict = {}
  timetable.forEach((el) => {
    if (!dict[el.time]) {
      dict[el.time] = []
    }
    dict[el.time].push(el)
  })

  return dict
}
