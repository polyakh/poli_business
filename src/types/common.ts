import { ElementType } from "react"

export interface WithAsProps<As extends ElementType | string = ElementType> {
   readonly as?: As;
}