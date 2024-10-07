import "../components/home.css"

import Home from '../components/home'
import Todo_list from "../components/todo_list"
import UI from "../components/todo_list_ui"
import Createcontext from "../public/craete_context"
import { useContext, useState } from "react"
function App() {

  // const [count, setCount] = useState(0)
  const [jivalue , Setvalue] = useState("lofi")


  return (
    <>
     <div className='main-home'>
      {/* <Createcontext.Provider logginuser={{jivalue , Setvalue }}> */}

     <Home />
     <Todo_list/>
     {/* </Createcontext.Provider> */}
     {/* <UI/> */}
     
     </div>
    </>
  )
}

export default App
