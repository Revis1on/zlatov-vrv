import React, {useState} from 'react'
import { Button } from 'react-scroll'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

function  HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }


    return (
       <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
           </HeroBg>
           <HeroContent>
               <HeroH1>Test Test Test</HeroH1>
               <HeroP>Test test Test</HeroP>
               <HeroBtnWrapper>
                   <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                       Zapocni {hover ? <ArrowForward /> : <ArrowRight/>}
                   </Button>
               </HeroBtnWrapper>
           </HeroContent>
       </HeroContainer>
    )
}

export default  HeroSection
