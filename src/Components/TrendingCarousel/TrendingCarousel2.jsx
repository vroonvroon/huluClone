import React, { useState } from "react";
import { TrendingData2 } from "./TrendingData2";
import MyTrendingsnippet from "./MyTrendingsnippet";

const TrendingCarousel2 = () => {

    const [data] = useState(TrendingData2);

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

export default TrendingCarousel2
