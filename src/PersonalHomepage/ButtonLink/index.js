import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.colors.ironTransparent};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.scienceBlue};
    transition: box-shadow 0.3s;
`;