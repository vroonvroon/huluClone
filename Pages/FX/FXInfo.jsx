import React, { useState } from "react";
import { FXData } from "./FXData";
import MyTrendingsnippet from "../../src/Components/TrendingCarousel/MyTrendingsnippet";
import { Link } from 'react-router-dom';


const FXInfo = () => {

    const [data] = useState(FXData);

  return (
    <>
       {data.map((item) => {
          return ( 
            <>
            <Link to={item.link} key={item.id}>
              <MyTrendingsnippet id={item.id} imgSrc={item.imgSrc} overlay={item.overlay} titleImg={item.titleImg} desc={item.desc} genre={item.genre}/>
            </Link>
            </>
          )
       })}
    </>
  )
}

export default FXInfo;
