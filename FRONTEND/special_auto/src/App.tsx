
import { Routes, Route } from "react-router-dom"
import { Sidebar, User } from "./components"
import "./style.css"
import NewUser from "./components/user/NewUser"

const App = () => {
  return (
    <>
       {/* <Navbar/> */}
   
       
       <Sidebar>
        <Routes>
          <Route path="/users" element={<User/>}/>
          <Route path="/users/new" element={<NewUser/>}/>
        </Routes>
       </Sidebar>
    </>
  )
}

export default App