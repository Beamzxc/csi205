import { useState } from "react"
import RadixCounter from "../components/RadixCounter"
import Value from "../components/Value"
import Adder from "../components/Adder"
import Timer from "../components/Timer"
import Temperature from "../components/Temperature" 

const Components = () => {
    const [counter, setCounter] = useState(0);
    return ( 
    <>
      <Value name={"COUNTER"} value={counter} setValue={setCounter} />
      <Adder />
      <Temperature value={counter} setValue={setCounter} /> {/* แก้เป็น Temperature */}
      <Timer />
      <p className="text-center fw-bold mt-3"></p>
    </> 
    )
}
export default Components