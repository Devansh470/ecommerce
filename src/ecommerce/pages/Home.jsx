import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'antd';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addcartdata } from '../addtocartslice';
import { Flex, Tag } from 'antd';


const { Meta } = Card;

const Home=()=>{
    const [mydata, setdata]=useState([]);
    const dispatch=useDispatch()

    const loaddata=()=>{
        let api="http://localhost:3000/data";
        axios.get(api).then((res)=>{
        setdata(res.data)
    })
    }
    useEffect(()=>{
        loaddata();
    },[])


    const addcart=(id, name, cate, brand, price, desc, img)=>{
      dispatch(addcartdata({id:id, name:name, category:cate, brand:brand, price:price,
        description:desc, image:img, qnty:1 }))
    }

    const checktime=(time)=>{
      if(time=="new")
      {
        return(
          <>
          <Tag color="#f50" style={{padding:"2px" , width:"50px" , textAlign:"center" , position:"relative" , top:"-210px" , right:"15px"}}>{time}</Tag>
          </>
        )
      }

    }


    const ans=mydata.map((key)=>{
        return(
            <>
            <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"50px 0px 0px 0px"}} 
            cover={<img alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
              <Flex gap="4px 0" wrap>
                <div>
                {checktime(key.time)}
                </div>
    </Flex>
    <Meta title={key.name} description={key.description} />
    <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
    </h4>
    <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
    <Button variant="dark" style={{width:"250px"}} 
    onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
  </Card>
            </>
        )
    })

    return(
        <>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img src="./image/caro1.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="./image/caro2.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="./image/caro3.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
    </Carousel>

    <div id='mainhead'>
    <h1>New Launches</h1>
    </div>
    <div id='newlaunch'>
    {ans}
    </div>

    <div style={{fontSize:"40px", margin:"50px 0px 0px 500px"}}> <b> Exciting Offers: You Can't Miss</b></div>
    <Carousel style={{margin:"20px 0px 40px 0px"}}>
      <Carousel.Item interval={2000}>
        <img src="./image/offer1.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="./image/offer2.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="./image/offer3.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="./image/offer4.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="./image/offer5.webp" style={{width:"1522px"}}/>
      </Carousel.Item>
    </Carousel>

        </>
    )
}
export default Home;