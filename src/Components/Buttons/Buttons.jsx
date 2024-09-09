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
     padding: 7px 30px;
     letter-spacing: 1.5px;
     font-weight: 700;
     font-size: 16px;
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

export const HamburgerMenuButton = styled.button`
    width: 100%;
    padding: 14px 0px;
    border: none;
    border-radius: 4px;
    background-color: #1ce882; 
    color: #1e1d1d;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.7px;
    transition: 0.2s all;
`


export const StudentCTA = styled.button`
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
    padding: 16px 30px;
    background-color: white;
    color: black;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: #ffffff9a;
    }
`
