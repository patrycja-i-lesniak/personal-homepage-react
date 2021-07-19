import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./Skills/skills";
import { Footer } from "./Footer";


export const PersonalHomepage = () => (
    <Container>
        <MainInformation />
        <main>
            <Skills
                title="My skillset includes:"
                skills={skills}
            />
            <Skills
                title="What I want to learn next:"
                skills={nextSkills}
            />
            <Footer/>
        </main>
    </Container>
)