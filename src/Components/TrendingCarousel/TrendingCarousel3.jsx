import React, { useState } from "react";
import { TrendingData3 } from "./TrendingData3";
import { MoreLikeData3 } from "../../../Pages/FX/AmericanHorrorStories/AmericanHorrorStoriesData"; 
import MyTrendingsnippet from "./MyTrendingsnippet";
import { SeriesSnippet } from "./MyTrendingsnippet";


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



// FOR SERIES ONLY //
export const SeriesCarousel3 = () => {

  const [data] = useState(MoreLikeData3);

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