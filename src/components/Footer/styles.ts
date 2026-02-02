import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background: #f5f5f7;
  color: #6e6e73;

  font-size: 12px;
  line-height: 1.33337;

  padding: 24px 0;
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  padding-inline: max(22px, env(safe-area-inset-left))
    max(22px, env(safe-area-inset-right));

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Legal = styled.div`
  p {
    margin: 0;
  }
`;

export const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  a {
    color: #6e6e73;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Region = styled.div`
  span {
    white-space: nowrap;
  }
`;
