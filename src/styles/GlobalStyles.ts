import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* 1. Reset Básico */

:root {
    --global-nav-height: 44px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Melhora a renderização das fontes no macOS e Windows */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 2. Configurações de HTML e Body */
  html {
    /* Faz com que o scroll seja suave em todo o site */
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden; /* Evita quebras de layout laterais */
  }

  @media (max-width: 833px) {
    :root {
      --global-nav-height: 48px;
    }
  }

  main {
    padding-top: var(--global-nav-height);
  }

  /* 3. Tipografia Apple (Hierarquia) */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.003em;
  }

  /* 4. Links e Botões */
  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  /* 5. Customização da Barra de Rolagem (Opcional, estilo Apple) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #86868b;
    border-radius: 10px;
    
    &:hover {
      background: #555;
    }
  }

  /* 6. Seleção de texto (Cor de destaque da Apple) */
  ::selection {
    background-color: rgba(0, 113, 227, 0.3);
  }
`;
