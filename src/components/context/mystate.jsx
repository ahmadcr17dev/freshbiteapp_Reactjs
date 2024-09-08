import MyContext from "./mycontext"
import { useState } from "react"

function MyState({children}) {
    const [loading, setloading] = useState(true);
    
  return (
    <MyContext.Provider value={name}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState