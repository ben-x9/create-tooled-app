import {Dispatcher, React} from "react-tooling"
import {plus, minus} from "icons"

import "./home.scss"
import {Increment, Decrement} from "Root"

export const View = ({count, dispatch}: {count: number} & Dispatcher) => (
  <div className="home">
    <div className="count">{count}</div>
    <div className="icon" onClick={() => dispatch(Decrement)}>
      {minus}
    </div>
    <div className="icon" onClick={() => dispatch(Increment)}>
      {plus}
    </div>
  </div>
)
