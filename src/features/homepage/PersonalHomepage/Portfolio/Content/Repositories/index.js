import {
    Description,
    Tile,
    Link,
    Links,
    LinksRow,
    List,
    Name,
    LinksValue,
} from "./styled";

export const Repositories = ({ repositories }) => (
    <List>
        {repositories.map(({ id, name, description, homepage, html_url }) => (
            <Tile key={id}>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Links>
                    {homepage && (
                        <LinksRow>
                            <dt>Demo:</dt>
                            <LinksValue>
                                <Link target="_blank" rel="noreferrer" href={homepage}>Preview site</Link>
                            </LinksValue>
                        </LinksRow>
                    )}
                    <LinksRow>
                        <dt>Code:</dt>
                        <LinksValue>
                            <Link target="_blank" rel="noreferrer" href={html_url}>GitHub Repository</Link>
                        </LinksValue>
                    </LinksRow>
                </Links>
            </Tile>
        ))}
    </List >
)