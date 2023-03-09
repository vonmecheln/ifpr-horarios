import ColorHash from 'color-hash'
// Create a color using HSL function to each teacher based on his name

export function createColorByTeacher(teacherName: string) {
  return `${new ColorHash().hsl(teacherName)}`
}
