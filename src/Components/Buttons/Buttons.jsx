import styled from 'styled-components'

export const PrimaryButton = styled.button`
   position: absolute;
   width: 100%;
   height: 40px;
   background-color: #1ce882ff;
   color: black;
   display: block;
   padding: 0px;
   border-radius: 4px;
   font-weight: bold;
`

export const PressSliderButton = styled.button`
     color: white;
     background-color: transparent;
     padding: 7px 24px;
     letter-spacing: 1.5px;
     font-weight: 700;
     font-size: 14px;
     border: 2px solid white;
     margin-top: 30px;
     transition: 0.3s;
     cursor: pointer;
`

export const SubscriptionHelpArticleButton = styled.button`
    padding: 7px 50px;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
    transition: all 0.3s;

    &:hover {
        background-color: black;
        color: white
    }
`

export const hamburgerMenuButton = styled.button`
    width: 100%;
    padding: 14px 0px;
    border: none;
    border-radius: 50%;
    background-color: #1ce882; 
    color: black;
    cursor: pointer;
    transition: 0.2s all;
`


export const StudentCTA = styled.button`
        /* display: inline-block; */
        background-color: rgb(28, 231, 131);
        padding: 16px 24px;
        border: none;
        border-radius: 5px;
        font-weight: 700;
        letter-spacing: 0.7px;
        font-size: 14px;
        margin-block: 10px 20px;
        transition: 0.3s;
        width: 600px;
        text-align: center;

        &:hover {
            cursor: pointer;
            background-color: rgba(28, 231, 129, 0.529);
        }
`

export const PressLogInButton = styled.button`
      border: none;
      padding: 5px 20px;
      background-color: black;
      color: white;
      font-size: 14px;
      font-weight: 700;

      &::before {
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background-color: #1ce882;
        color: black;
        z-index: -1;
      }
`

export const FXTrialButton = styled.button`
    border: none;
    padding: 5px 20px;
    background-color: white;
    color: black;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;

    /* &::before {
        content: "START YOUR FREE TRAIL";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        color: black;
      } */

    &:hover {
        cursor: pointer;
        background-color: #ffffff9a;
    }
`
