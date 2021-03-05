import React from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
} from './HeroElements'

function  HeroSection() {

    return (
       <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
           </HeroBg>
           <HeroContent>
               <HeroH1>Test Test Test</HeroH1>
               <HeroP>Test test Test</HeroP>
           </HeroContent>
       </HeroContainer>
    )
}

export default  HeroSection
