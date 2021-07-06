import React from 'react';
import photo from "../assets/images/E-Auto.png";

const HeaderImg = () => {
    return (
        <div>
            <img className="photo_header" alt="E-Auto" src={photo}></img>
        </div>
    );
};

export default HeaderImg;