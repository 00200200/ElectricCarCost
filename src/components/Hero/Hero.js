import React,{useState} from 'react';
import Video from "../assets/video/production ID_3752531.mp4"
import {ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroH1, HeroP, VideoBg,HeroContent} from "./Hero.styles";
import {Button} from "../ButtonElement";
const Hero = () => {
    const [hover,setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
       <HeroBg>
           <VideoBg autoPlay loop muted src={Video}></VideoBg>
       </HeroBg>
            <HeroContent>
            <HeroH1>Bądź Eco zainwestuj w przyszłość</HeroH1>
            <HeroP>Oblicz koszt utrzymaania elektrycznego pojazdu</HeroP>
            <HeroBtnWrapper>
                <Button onMouseEnter={onHover} onMouseLeave={onHover} to="/Oblicz">
                    Oblicz {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;