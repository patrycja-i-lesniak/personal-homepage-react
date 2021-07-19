import styled from "styled-components";
import {ButtonLink} from "../ButtonLink";
import {ReactComponent as EnvelopeIcon} from "./envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 30vw;
    max-width: 384px;
    border-radius: 50%;
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: initial;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.mineShaft};
    margin: 12px 0 0 0;
`;

export const Summary = styled.p`
    font-size: 20px;
    margin-top: 36px;
    line-height: 1.4;
    max-width: 650px;
`;

export const Icon =  styled.img`
    margin-right: 4px;
    vertical-align: text-top;
    height: 24px;
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;