import React from 'react'
import {FaFacebook, FaInstagram } from 'react-icons/fa'
import {
    FooterLinksContainer,
    FooterWrap,
    FotterContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FotterElements.js'


function Footer() {
    return (
        <FotterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Златоврв
                        </SocialLogo>
                        <WebsiteRights>Златоврв {new Date().getFullYear()} 
                         {`  `} Сите права се задржани</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target ="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/scc_zlatovrv/?hl=en" target ="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FotterContainer>
    )
}

export default Footer
