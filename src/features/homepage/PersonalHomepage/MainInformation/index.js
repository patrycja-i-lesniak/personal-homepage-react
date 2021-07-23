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
                I'm.... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);