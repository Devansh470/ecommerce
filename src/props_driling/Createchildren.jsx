import { createContext, useState } from "react";
const colorselet=createContext()

const Createchildren=(children)=>{
    const [color,setcolor]=useState("red")

    return(
        <>
         <colorselet.Provider value={{color, setcolor}}>
         {children}
         </colorselet.Provider>

        </>
    )
}

export default Createchildren;
export {colorselet}
