import { useContext } from 'react'
import { Days } from '../interfaces/interfaces'
// Find all the positions Y used and return a array with two positions:
// position one -> Positions used by slide
// position two -> All positions used

export function findPositionsUsed(weekClasses: Days[]) {
  const positionsUsed = []
  let positionY = []

  weekClasses.forEach(({ dayClasses }) => {
    dayClasses.forEach((cell) => {
      positionY = []
      positionY.push(cell.positionY - 2)

      if (cell.size > 1) {
        for (let i = 1; i < cell.size; i++) {
          positionY.push(cell.positionY - 2 + i)
        }
      }

      positionsUsed.push(...positionY)
    })
  })

  return positionsUsed
}
