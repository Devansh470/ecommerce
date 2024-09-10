import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DashBoard from "./Components/DashBoard";
const App=()=>{
  return(
    <>
      <BrowserRouter>
            <Routes>
               <Route path="/dashboard" element={<DashBoard/>}/>
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