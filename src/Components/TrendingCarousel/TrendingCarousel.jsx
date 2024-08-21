import React, { useState } from "react";
import { TrendingData } from "./TrendingData";
import MyTrendingsnippet from "./MyTrendingsnippet";

const TrendingCarousel = () => {

    const [data] = useState(TrendingData);

  return (
    <>
       {data.map((item) => {
          return ( 
            <>
              <MyTrendingsnippet id={item.id} imgSrc={item.imgSrc} overlay={item.overlay} titleImg={item.titleImg} desc={item.desc} genre={item.genre}/>
            </>
          )
       })}
    </>
  )
}

export default TrendingCarousel
