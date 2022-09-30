import React from "react";
import { Cell } from "../css/Cell";

export function Slide(props: {gridArea: string}) {
  return (
    <Cell gridArea={props.gridArea}/>
  )
}