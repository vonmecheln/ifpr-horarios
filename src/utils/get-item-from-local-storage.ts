interface ItemProps {
  isMenuFixed: boolean;
  timetableView: string;
}

export function getItemFromLocalStorage() {
  const item: ItemProps = JSON.parse(localStorage.getItem('settings-of-time'))
  return item
}