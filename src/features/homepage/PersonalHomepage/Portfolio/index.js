import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { Content } from "./Content";
import { githubUsername } from "./githubUsername";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

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
            <Content
            status={repositoriesStatus}
            repositories={repositories}
            />
        </Section>
    );
};