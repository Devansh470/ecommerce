import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Deshboard from "./Components/Deshboard";



const App=()=>{
  return(
    <>
    <BrowserRouter>

    <Routes>
      <Route path="deshboard" element={<Deshboard/>}>

      </Route>
    </Routes>

    <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App;