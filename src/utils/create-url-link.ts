// This function receive a string and replace all spaces for "_"
export function createURL(obj: string) {
  return obj
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('/', '_')
    .replaceAll('(', '_')
    .replaceAll(')', '_')
}
