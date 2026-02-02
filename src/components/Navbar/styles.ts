import styled from "styled-components";
import { Link } from "react-router-dom";

/* ======================================================
   1. CORTINA (SCRIM / OVERLAY)
   ====================================================== */

export const Curtain = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);

  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};

  /* 🔥 ESSA LINHA AQUI */
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};

  z-index: 9998;

  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;

  ${(props) =>
    props.$isOpen &&
    `
      transition:
        opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
        visibility 0.32s step-start 80ms;
  `}
`;

/* ======================================================
   2. NAV PRINCIPAL
   ====================================================== */

export const Nav = styled.nav<{
  $isOpen: boolean;
  $isDark: boolean;
  $isHovering: boolean;
}>`
  --r-globalnav-height: 44px;
  --r-globalnav-background-opened: #fafafc;
  --r-globalnav-background-opened-dark: #161617;

  position: fixed;
  inset: 0 0 auto 0;
  width: 100%;
  height: var(--r-globalnav-height);

  z-index: 9999;

  background: ${(props) => {
    if (props.$isOpen || props.$isHovering) {
      return props.$isDark
        ? "var(--r-globalnav-background-opened-dark)"
        : "var(--r-globalnav-background-opened)";
    }
    return props.$isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)";
  }};

  color: ${(props) => {
    if ((props.$isOpen || props.$isHovering) && !props.$isDark)
      return "#1d1d1f";
    return props.$isDark ? "#f5f5f7" : "#1d1d1f";
  }};

  backdrop-filter: ${(props) =>
    props.$isOpen || props.$isHovering ? "none" : "saturate(180%) blur(20px)"};

  -webkit-backdrop-filter: ${(props) =>
    props.$isOpen || props.$isHovering ? "none" : "saturate(180%) blur(20px)"};

  transition:
    background 0.24s cubic-bezier(0.4, 0, 0.6, 1),
    color 0.24s cubic-bezier(0.4, 0, 0.6, 1);

  overflow: visible;

  @media (max-width: 833px) {
    --r-globalnav-height: 48px;

    height: ${(props) => (props.$isOpen ? "100dvh" : "48px")};

    transition:
      height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.24s cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

/* ======================================================
   3. CONTAINER INTERNO
   ====================================================== */

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: max(22px, env(safe-area-inset-left))
    max(22px, env(safe-area-inset-right));

  position: relative;
  z-index: 2;

  @media (max-width: 833px) {
    height: 48px;
    padding: 0 8px;
  }
`;

/* ======================================================
   4. LINKS DESKTOP
   ====================================================== */

export const MenuLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 833px) {
    display: none;
  }
`;

export const Utilities = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 10000;
  gap: 12px;

  @media (max-width: 833px) {
    flex: 1;
    justify-content: flex-end;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 10px;

  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  color: inherit;

  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &.logo-link {
    padding-left: 0;
  }

  svg {
    fill: currentColor;
    flex-shrink: 0;
  }
`;

/* ======================================================
   5. MENU MOBILE
   ====================================================== */

export const MenuLinksMobile = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 833px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-top: 20px;
    padding-inline: max(40px, env(safe-area-inset-left))
      max(40px, env(safe-area-inset-right));
  }
`;

export const MobileLink = styled(Link)<{
  $isOpen: boolean;
  $index: number;
}>`
  font-size: 28px;
  line-height: 1.14;
  font-weight: 600;
  letter-spacing: 0.007em;

  color: #f5f5f7;
  text-decoration: none;
  padding: 8px 0;

  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-15px)"};

  transition:
    opacity 0.4s cubic-bezier(0.4, 0, 0.6, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.6, 1);

  transition-delay: ${(props) =>
    props.$isOpen ? `${props.$index * 40 + 100}ms` : "0ms"};

  &:hover {
    color: #fff;
  }
`;

/* ======================================================
   6. LOGO E ÍCONES
   ====================================================== */

export const LogoWrapper = styled.div<{ $isHidden: boolean }>`
  display: flex;
  align-items: center;

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;

  @media (max-width: 833px) {
    opacity: ${(props) => (props.$isHidden ? 0 : 1)};
    visibility: ${(props) => (props.$isHidden ? "hidden" : "visible")};
  }
`;

export const IconGroup = styled.div<{ $isHidden: boolean }>`
  display: flex;
  align-items: center;

  /* 🔥 ESPAÇO ENTRE OS ÍCONES */
  gap: 12px;

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;

  @media (max-width: 833px) {
    opacity: ${(props) => (props.$isHidden ? 0 : 1)};
    visibility: ${(props) => (props.$isHidden ? "hidden" : "visible")};

    ${(props) =>
      props.$isHidden &&
      `
        position: absolute;
        pointer-events: none;
    `}
  }
`;

/* ======================================================
   7. FLYOUT (SUBMENU)
   ====================================================== */

export const Flyout = styled.div<{
  $isVisible: boolean;
  $isDark: boolean;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  z-index: 9997;

  background: ${(props) =>
    props.$isDark
      ? "var(--r-globalnav-background-opened-dark)"
      : "var(--r-globalnav-background-opened)"};

  max-height: ${(props) => (props.$isVisible ? "600px" : "0")};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};

  overflow: hidden;

  transition:
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease,
    visibility 0.2s ease;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

export const FlyoutContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;

  padding: 40px 22px 80px;

  display: flex;
  gap: 80px;

  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

/* ======================================================
   8. SUBMENU
   ====================================================== */

export const SubmenuGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmenuHeader = styled.h2`
  font-size: 12px;
  font-weight: 400;
  color: #86868b;
  margin-bottom: 15px;
`;

export const SubmenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SubmenuItem = styled.li<{
  $isVisible: boolean;
  $index: number;
}>`
  margin-bottom: 8px;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(-10px)"};

  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${(props) =>
    props.$isVisible ? `${props.$index * 30}ms` : "0ms"};

  a {
    font-size: 24px;
    font-weight: 600;
    color: inherit;
    text-decoration: none;

    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.6;
    }
  }

  &.small-link a {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const HoverArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;
