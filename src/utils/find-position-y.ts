import { Days, Time } from '../interfaces/interfaces'
// Analyse the time of the class and add a value to the property 'y' based on index of the time

interface FindPositionYProps {
  weekClasses: Days[]
  time: Time[]
}

export function findPositionY({ weekClasses, time }: FindPositionYProps) {
  const weekClassesFormatted = weekClasses.map((week) => {
    return {
      dayClasses: week.dayClasses.map((el) => {
        el.positionY =
          time.findIndex((timeItem) => timeItem.time === el.time) + 2
        return el
      }),
      ...week,
    }
  })
  return weekClassesFormatted
}
