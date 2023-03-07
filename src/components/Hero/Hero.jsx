import { HeroWrapper, HeroLeft, HeroRight, ButtonWrapper } from "./Hero.styled";
import  { EmailButton }  from "../EmailButton/EmailButton";
import  { DownloadButton }  from "../DownloadButton/DownloadButton";
import IconMail from "./images/mail.svg";
import IconDownload from "./images/download.svg";

export const Hero = () => {
  return (
    <HeroWrapper>
    <HeroLeft>
      <h2>Hello!</h2>
      <h1>I'm Marcin Mierzejewski</h1>
      <h3>FrontEnd Developer</h3>
      <p>I'm a beginner <span>Web developer</span> from Warsaw, who love to create new attractive and modern Web design</p>
      <ButtonWrapper>
        <EmailButton icon={IconMail} text="Email Me!"/>
        <DownloadButton icon={IconDownload} text="Download CV" />
      </ButtonWrapper>
     
    </HeroLeft>
    <HeroRight>
      Something to adds
    </HeroRight>
      
    </HeroWrapper>
  )
}