import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addcartdata } from '../addtocartslice';
import Button from 'react-bootstrap/Button';


const Singlepages=()=>{
    const {id}=useParams();
    const [data,setdata]=useState([])
    const dispatch=useDispatch()
    const showcart=()=>{
    const api=`http://localhost:3000/data?id=${id}`
    axios.get(api).then((res)=>{
        setdata(res.data)
        console.log(res.data)
    })
    } 
    useEffect(()=>{
        showcart()
    })

    const addcart=(id, name, cate, brand, price, desc, img)=>{
        dispatch(addcartdata({id:id, name:name, category:cate, brand:brand, price:price,
          description:desc, image:img, qnty:1 }))
      }


    const ans=data.map((key)=>{
        return(
            <>
           <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"20px" , padding:"50px"}}>
         <div>
            <img src={key.image} alt="" />
         </div>
         <div>
            <h2>{key.name}</h2>
            <h4> Price : <span style={{color:"green"}}>₹ {key.price}</span></h4>
             <h4> For : <span style={{color:"blue"}}>{key.category}</span></h4>
             <Button variant="dark" style={{backgroundColor:"grey" , color:"black", fontWeight:"700" , borderRadius:"10px" , padding:"5px 10px"}} onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>Add To Cart </Button>
         </div>
        </div>

           </>
        )
    })
    return(
        <>
        {ans}
        


        </>
    )
}

export default Singlepages;