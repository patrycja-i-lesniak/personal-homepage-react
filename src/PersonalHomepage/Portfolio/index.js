import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";

export const Portfolio = () => {
    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>
                    Portfolio
                </SubHeader>
                <MyRecentProjects>
                    My recent projects
                </MyRecentProjects>
            </Header>
        </Section>
    );
};