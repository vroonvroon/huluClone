import React, { useState } from "react";
import { TrendingData } from "./TrendingData";
import { MoreLikeData } from "../../../Pages/FX/AmericanHorrorStories/AmericanHorrorStoriesData"; 
import MyTrendingsnippet from "./MyTrendingsnippet";
import { SeriesSnippet } from "./MyTrendingsnippet";


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



// ONLY FOR SERIES //
export const SeriesCarousel = () => {

  const [data] = useState(MoreLikeData);

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



export const FXCarousel = () => {

  const [data] = useState(MoreLikeData);

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