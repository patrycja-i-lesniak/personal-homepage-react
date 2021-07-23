import patrycjaLesniakProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={patrycjaLesniakProfile} alt="Patrycja Leśniak" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Patrycja Leśniak</Name>
            <Summary>
            Taking the first step is always hard, but when you see the goal, life becomes more beautiful.<br/> 
            I'm a Graphic Designer, online store owner and a future Frontend Developer. Currently, I'm learning the basics of programming and I hope that my passion will soon change in a way of life.  
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);