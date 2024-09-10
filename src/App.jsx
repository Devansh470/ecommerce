import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./ecommerce/Layout";
import Home from "./ecommerce/pages/Home";
import Cart from "./ecommerce/pages/Cart";
import New from "./ecommerce/pages/New";
import Services from "./ecommerce/pages/Services";
import Product from "./ecommerce/pages/Product";
import Sale from "./ecommerce/pages/Sales";
import Mensshoes from "./ecommerce/pages/Mensshoes";
import Womenshoes from "./ecommerce/pages/Womenshoes";
import MenSlippers from "./ecommerce/pages/MenSlippers";
import WomenSlippers from "./ecommerce/pages/Womenslippers";
import Blog from "./ecommerce/pages/Blog";


const App=()=>{
    return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="/mycart" element={<Cart/>}/>
        <Route path="new" element={<New/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="sale" element={<Sale/>}/>
        <Route path="menshoes" element={<Mensshoes/>}/>
        <Route path="womenshoes" element={<Womenshoes/>}/>
        <Route path="menslippers" element={<MenSlippers/>}/>
        <Route path="womenslippers" element={<WomenSlippers/>}/>
        <Route path="blog" element={<Blog/>}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
      </>
    )
}
export default App;
