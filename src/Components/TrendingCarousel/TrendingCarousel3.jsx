import React, { useState } from "react";
import { TrendingData3 } from "./TrendingData3";
import MyTrendingsnippet from "./MyTrendingsnippet";

const TrendingCarousel3 = () => {

    const [data] = useState(TrendingData3);

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

export default TrendingCarousel3
