import styled from 'styled-components';

export const HuluPressSliderHeader = styled.div`
   font-size: 70px; 
   font-weight: 800; 
   color: white;
   line-height: 1.2;
`

export const HuluPressSectionHeading = styled.div`
    font-size: 44px;
    font-weight: 800;
    color: #151515;
    margin-right: 10px;
`

export const WelcomePlansCarouselTitle = styled.div`
    font-size: 46px;
    font-weight: 700;
    color: white;
    letter-spacing: 1.5px;

    
  /* Media query CSS rules */
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 32px;
    letter-spacing: 0;
  }
/* 
  @media (min-width: 375px) and (max-width: 767px) {
     font-size: 40px;
  } */

  @media (min-width: 768px) and (max-width: 1024px) {
     font-size: 32px;
      letter-spacing: 0;
  }


`

export const BillingCardHeading = styled.div`
    font-size: 33px;
    font-weight: 600;
    color: black;
    margin-bottom: 30px;
    /* letter-spacing: 1.5px; */
`

export const ChooseYourPlanHeading = styled.div`
    font-size: 47px;
    font-weight: 800;
`