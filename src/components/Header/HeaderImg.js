import React from 'react';
import photo from "../assets/images/autkopng.png";
import {HeaderImgStyle,H1Style} from "./HeaderImg.style";

const HeaderImg = () => {
    return (
        <div>
           <HeaderImgStyle className="photo_header" alt="E-Auto" src={photo}></HeaderImgStyle>
        </div>
    );
}

export default HeaderImg;