import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
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
                            zlatovrv
                        </SocialLogo>
                        <WebsiteRights>Zlatovrv {new Date().getFullYear()}
                        Site prava zadrzani</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target ="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" arial-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FotterContainer>
    )
}

export default Footer
