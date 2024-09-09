import React, { useState } from "react";
import { TrendingData2 } from "./TrendingData2";
import { MoreLikeData2 } from "../../../Pages/FX/AmericanHorrorStories/AmericanHorrorStoriesData"; 
import MyTrendingsnippet from "./MyTrendingsnippet";
import { SeriesSnippet } from "./MyTrendingsnippet";


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


export const SeriesCarousel2 = () => {

  const [data] = useState(MoreLikeData2);

return (
  <>
     {data.map((item) => {
        return ( 
          <>
            <SeriesSnippet id={item.id} img={item.img} title={item.title} genre={item.genre}/>
          </>
        )
     })}
  </>
)
}
