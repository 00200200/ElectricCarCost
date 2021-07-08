import React,{useState} from 'react';
import Video from "../assets/video/ElectricFarmVideo.mp4"
import {
    ArrowForward,
    ArrowRight, Button,
    MainBg,
    MainBtnWrapper,
    MainContainer,
    MainContent,
    MainH1,
    MainP,
    VideoBg
} from "./Main.styles";
import Oblicz from "../../pages/Oblicz/Oblicz";
import {Link} from "react-router-dom";
const Main = () => {
    const [hover,setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <MainContainer>
       <MainBg>
           <VideoBg autoPlay loop muted src={Video}></VideoBg>
       </MainBg>
            <MainContent>
            <MainH1>Bądź Eco zainwestuj w przyszłość</MainH1>
            <MainP>Oblicz koszt utrzymaania elektrycznego pojazdu</MainP>
            <MainBtnWrapper>
                <Link  style={{textDecoration:"none"}}to='/Oblicz'>
                <Button onMouseEnter={onHover} onMouseLeave={onHover} to="/Oblicz">
                    Oblicz {hover ? <ArrowForward /> : <ArrowRight/>}

                </Button>
                </Link>
            </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    );
};

export default Main;