import React from 'react';
import {
    CopyRightContainer, CopyRightP,
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer, FooterLinksWrapper,
    FooterLinkTittle,
    FooterWrap
} from "./footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTittle> Tekst1</FooterLinkTittle>
                            <FooterLink to="/Oblicz">Tekst1</FooterLink>
                            <FooterLink to="/Oblicz">Tekst2</FooterLink>
                            <FooterLink to="/Oblicz">Tekst3</FooterLink>
                            <FooterLink to="/Oblicz">Tekst4</FooterLink>
                            <FooterLink to="/Oblicz">Tekst5</FooterLink>
                            <FooterLink to="/Oblicz">Tekst6</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTittle> Tekst1</FooterLinkTittle>
                            <FooterLink to="/Oblicz">Tekst1</FooterLink>
                            <FooterLink to="/Oblicz">Tekst2</FooterLink>
                            <FooterLink to="/Oblicz">Tekst3</FooterLink>
                            <FooterLink to="/Oblicz">Tekst4</FooterLink>
                            <FooterLink to="/Oblicz">Tekst5</FooterLink>
                            <FooterLink to="/Oblicz">Tekst6</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTittle> Tekst1</FooterLinkTittle>
                            <FooterLink to="/Oblicz">Tekst1</FooterLink>
                            <FooterLink to="/Oblicz">Tekst2</FooterLink>
                            <FooterLink to="/Oblicz">Tekst3</FooterLink>
                            <FooterLink to="/Oblicz">Tekst4</FooterLink>
                            <FooterLink to="/Oblicz">Tekst5</FooterLink>
                            <FooterLink to="/Oblicz">Tekst6</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTittle> Tekst1</FooterLinkTittle>
                            <FooterLink to="/Oblicz">Tekst1</FooterLink>
                            <FooterLink to="/Oblicz">Tekst2</FooterLink>
                            <FooterLink to="/Oblicz">Tekst3</FooterLink>
                            <FooterLink to="/Oblicz">Tekst4</FooterLink>
                            <FooterLink to="/Oblicz">Tekst5</FooterLink>
                            <FooterLink to="/Oblicz">Tekst6</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>

            <CopyRightContainer>
                <CopyRightP>                &copy;  Logo
                </CopyRightP>
            </CopyRightContainer>
        </FooterContainer>
    );
};

export default Footer;