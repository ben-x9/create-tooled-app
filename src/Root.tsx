import {React, AnyAction, Dispatcher} from "react-tooling"
import moize from "moize"
import {Route, RouteType, home} from "routes"
import * as initReactFastclick from "react-fastclick"
import "font-awesome-webpack"
import * as NotFound from "NotFound"
import * as Home from "Home"

initReactFastclick()

// STATE

export interface State {
  route: Route
  count: number
}
export const make: State = {
  route: home,
  count: 0
}

// UPDATE

export enum ActionType {
  Increment = "Increment",
  Decrement = "Decrement"
}

export interface Increment {
  type: ActionType.Increment
}
export const Increment: Increment = {
  type: ActionType.Increment
}

export interface Decrement {
  type: ActionType.Decrement
}
export const Decrement: Decrement = {
  type: ActionType.Decrement
}

export type Action =
  Increment |
  Decrement

export const reactsTo = (action: AnyAction): action is Action => {
  switch (action.type) {
    case ActionType.Increment:
    case ActionType.Decrement:
      return true
    default:
      return false
  }
}

export const update = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.Increment:
      return {...state, count: state.count + 1}
    case ActionType.Decrement:
      return {...state, count: state.count - 1}
  }
}

// VIEW

import "normalize.css"
import "./root.scss"

const Root = ({route, count, dispatch}: State & Dispatcher) => {
  switch (route.type) {
    case RouteType.NotFound:
      return <NotFound.View />
    case RouteType.Home:
      return <Home.View count={count} dispatch={dispatch} />
  }
}

export const View = moize.reactSimple(Root)
