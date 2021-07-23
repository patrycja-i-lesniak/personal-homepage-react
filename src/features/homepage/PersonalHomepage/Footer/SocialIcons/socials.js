import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/patrycja-i-lesniak",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "http://facebook.com",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/patrycja-le%C5%9Bniak-b82020218/",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "http://instagram.com",
        Icon: styleIcon(InstagramIcon),
    }
]