import ColorHash from 'color-hash'

export function createColorByTeacher(teacherName: string) {
  return `${new ColorHash().hsl(teacherName)}`
}