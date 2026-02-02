import React, { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { navLinks } from "./data";
import { FlyoutMenu } from "./FlyoutMenu";
import { SearchIcon, BagIcon } from "./Icons";
import AppleLogo from "./Logo";
import { MenuToggle } from "./Toggle";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeout = useRef<number | null>(null);
  const location = useLocation();

  const isHovering = Boolean(activeMenu);

  /* ==============================
     Tema claro / escuro por rota
  ============================== */
  const isDarkPage = useMemo(
    () => !["/support", "/accessories"].includes(location.pathname),
    [location.pathname],
  );

  /* ==============================
     Hover handlers
  ============================== */
  const handleMouseEnter = (name: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (activeMenu !== name) {
      setActiveMenu(name);
    }
  };

  const closeFlyout = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(null);
  };

  const handleMouseLeaveNav = () => {
    closeTimeout.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  /* ==============================
     Scroll lock (mobile)
  ============================== */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : original;

    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  /* ==============================
     Fecha menu ao trocar rota
  ============================== */
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      {/* Curtain SOMENTE para mobile */}
      <S.Curtain $isOpen={isMenuOpen} />

      <S.Nav
        $isOpen={isMenuOpen}
        $isHovering={isHovering}
        $isDark={isDarkPage}
        onMouseLeave={handleMouseLeaveNav}
      >
        <S.Container>
          {/* LOGO — ao passar mouse, fecha flyout */}
          <S.LogoWrapper $isHidden={isMenuOpen} onMouseEnter={closeFlyout}>
            <S.NavLink to="/" className="logo-link">
              <AppleLogo />
            </S.NavLink>
          </S.LogoWrapper>

          {/* LINKS DESKTOP */}
          <S.MenuLinks>
            {navLinks.map((link) => (
              <S.NavLink
                key={link.name}
                to={link.path}
                onMouseEnter={() => handleMouseEnter(link.name)}
              >
                {link.name}
              </S.NavLink>
            ))}
          </S.MenuLinks>

          {/* ÍCONES — ao passar mouse, fecha flyout */}
          <S.Utilities>
            <S.IconGroup $isHidden={isMenuOpen} onMouseEnter={closeFlyout}>
              <S.NavLink to="/search" aria-label="Buscar">
                <SearchIcon />
              </S.NavLink>

              <S.NavLink to="/shop/bag" aria-label="Sacola">
                <BagIcon />
              </S.NavLink>
            </S.IconGroup>

            {/* Toggle Mobile */}
            <MenuToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </S.Utilities>
        </S.Container>

        {/* FLYOUT DESKTOP */}
        <FlyoutMenu activeMenu={activeMenu} isDark={isDarkPage} />

        {/* MENU MOBILE */}
        <S.MenuLinksMobile $isOpen={isMenuOpen} id="globalnav-menu">
          {navLinks.map((link, index) => (
            <S.MobileLink
              key={link.name}
              to={link.path}
              $isOpen={isMenuOpen}
              $index={index}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </S.MobileLink>
          ))}
        </S.MenuLinksMobile>
      </S.Nav>
    </>
  );
};
