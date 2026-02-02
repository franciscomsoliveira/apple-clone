import { useRef, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: none;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;

  color: #f5f5f7;
  padding: 0 10px;
  height: 100%;

  /* Evita highlight azul no mobile */
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
    border-radius: 4px;
  }

  @media (max-width: ${(props) =>
      props.theme?.breakpoints?.medium ?? "833px"}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuToggle = ({ isOpen, onClick }: Props) => {
  const topOpen = useRef<SVGAnimateElement>(null);
  const topClose = useRef<SVGAnimateElement>(null);
  const bottomOpen = useRef<SVGAnimateElement>(null);
  const bottomClose = useRef<SVGAnimateElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    if (isOpen) {
      topOpen.current?.beginElement();
      bottomOpen.current?.beginElement();
    } else {
      topClose.current?.beginElement();
      bottomClose.current?.beginElement();
    }
  }, [isOpen]);

  return (
    <StyledButton
      onClick={onClick}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="globalnav-menu"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        aria-hidden="true"
        focusable="false"
      >
        {/* Linha inferior */}
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="2 12, 16 12"
        >
          <animate
            ref={bottomOpen}
            attributeName="points"
            dur="0.24s"
            begin="indefinite"
            fill="freeze"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
            values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
          />
          <animate
            ref={bottomClose}
            attributeName="points"
            dur="0.24s"
            begin="indefinite"
            fill="freeze"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
            values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
          />
        </polyline>

        {/* Linha superior */}
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="2 5, 16 5"
        >
          <animate
            ref={topOpen}
            attributeName="points"
            dur="0.24s"
            begin="indefinite"
            fill="freeze"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
            values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
          />
          <animate
            ref={topClose}
            attributeName="points"
            dur="0.24s"
            begin="indefinite"
            fill="freeze"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
            values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
          />
        </polyline>
      </svg>
    </StyledButton>
  );
};
