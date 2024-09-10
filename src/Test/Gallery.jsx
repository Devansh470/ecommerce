import { useEffect, useState } from "react";

const Gallery=()=>{
    const [cnt, setcnt]=useState(0);
    const [multi, setmulti]=useState(0);


useEffect(()=>{
    setTimeout(()=>{
        setcnt(cnt+1)
    },2000)
  })
  
  useEffect(()=>{
    setmulti(cnt*2)
  },[cnt])

    return(
        <>
        <h1>Gallery page</h1>
        <h2>my counter is: {cnt}</h2>
        <h2>my Multiplyisn: {multi}</h2>

        </>
    )
}

export default Gallery;