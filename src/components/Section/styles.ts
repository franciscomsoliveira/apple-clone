import styled, { css } from "styled-components";

interface Props {
  $variant?: "light" | "dark" | "neutral";
  $center?: boolean;
}

export const Section = styled.section<Props>`
  width: 100%;

  ${({ $variant }) => {
    switch ($variant) {
      case "dark":
        return css`
          background: #000;
          color: #fff;
        `;
      case "neutral":
        return css`
          background: #f5f5f7;
          color: #1d1d1f;
        `;
      default:
        return css`
          background: #fff;
          color: #1d1d1f;
        `;
    }
  }}
`;

export const Container = styled.div<Props>`
  max-width: 1024px;
  margin: 0 auto;

  padding: 80px 22px;

  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}

  @media (max-width: 833px) {
    padding: 64px 22px;
  }
`;
