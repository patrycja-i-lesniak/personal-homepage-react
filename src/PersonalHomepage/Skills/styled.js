import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletIcon } from "./bullet.svg";

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.white};
    padding: 32px;
    margin-top: 72px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    transition: background 0.3s;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4;
    align-items: center;
`;

export const Bullet = styled(BulletIcon)`
    color: ${({theme}) => theme.colors.scienceBlue};
    margin-right: 16px;
    height: auto;
`;

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.mercury};
`;