// This function has the purpose of updating the data of the config in the Local Storage

interface Props {
  isMenuFixed: boolean;
  timetableView: string;
}

export function updateLocalStorage({ isMenuFixed, timetableView }: Props) {
  const settings = {
    isMenuFixed,
    timetableView
  }
  localStorage.setItem('settings-of-time', JSON.stringify(settings))
}