import { useState } from "react"
import { Navbar, User } from "./components"

const App = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Hello world </h1>
      <User/>
      <Navbar/>
      <p> { count } </p>
      <button onClick={() => setCount(prev => prev+1)}> Increment </button>
    </div>
  )
}

export default App