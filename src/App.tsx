import { SetStateAction, useState } from "react";
import Button from "./components/Buttons";
import Statistics from "./components/Statistics";

const Total = ({ value }: { value: number}) => {
  return value !== 0 ? (
    <p className="font-light italic">
      Total Feedbacks ( {value} )
    </p>

  ) : (
    <p className="font-light italic">
      No feedbacks given
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState({ value : 0, isHovered : false })
  const [neutral, setNeutral] = useState({ value : 0, isHovered : false })
  const [bad, setBad] = useState({ value : 0, isHovered : false })

  const increment = (state: { value: any; isHovered?: boolean; }, setState: { (value: SetStateAction<{ value: number; isHovered: boolean; }>): void; (value: SetStateAction<{ value: number; isHovered: boolean; }>): void; (value: SetStateAction<{ value: number; isHovered: boolean; }>): void; (arg0: any): any; }) => () => setState({ ...state, value : state.value + 1 })

  const total = good.value + neutral.value + bad.value

  return (
    <div id="parentCtn" className="w-screen h-screen text-center">
      <h1 className="text-5xl self-center">Give feedback</h1>

      <div id="contentCtn" className="grid place-content-center ">
        <div id="btnCtn" className="grid h-96 place-content-center gap-10">
          <Button 
            text = 'Great! 😃'
            value = {good.value}
            onMouseEnter = {() => setGood({ ...good, isHovered : true })}
            onMouseLeave = {() => setGood({ ...good, isHovered : false })}
            isHovered = {good.isHovered} 
            onClick = {increment(good, setGood)}
          />

          <Button 
            text = 'neutral 😐'
            value = {neutral.value}
            onMouseEnter = {() => setNeutral({ ...neutral, isHovered : true })}
            onMouseLeave = {() => setNeutral({ ...neutral, isHovered : false })}
            isHovered = {neutral.isHovered} 
            onClick = {increment(neutral, setNeutral)}
          />

          <Button 
            text = 'Bad 🥲'
            value = {bad.value}
            onMouseEnter = {() => setBad({ ...bad, isHovered : true })}
            onMouseLeave = {() => setBad({ ...bad, isHovered : false })}
            isHovered = {bad.isHovered} 
            onClick = {increment(bad, setBad)}
          />
        </div>

        <Total value = {total} />
      </div>

      <Statistics good = {good.value}  neutral = {neutral.value}  bad = {bad.value} />
    </div>
  )
}

export default App