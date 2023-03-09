import { Days, Time } from '../interfaces/interfaces'
// Analyse the time of the class and add a value to the property 'y' based on index of the time

export function findPositionY(props: { weekClasses: Days[]; time: Time[] }) {
  const weekClassesFormatted = props.weekClasses.map((week) => {
    return {
      dayClasses: week.dayClasses.map((el) => {
        el.positionY =
          props.time.findIndex((timeItem) => timeItem.time === el.time) + 2
        return el
      }),
      ...week,
    }
  })
  return weekClassesFormatted
}
