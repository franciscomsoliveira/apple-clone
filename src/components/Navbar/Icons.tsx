import styled from "styled-components";

// Container genérico para ícones que alternam entre regular e compacto
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  svg {
    fill: currentColor;
    display: block;
  }

  .globalnav-image-compact {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    .globalnav-image-regular {
      display: none;
    }
    .globalnav-image-compact {
      display: block;
    }
  }
`;

// Ícone de Lupa (Busca)
export const SearchIcon = () => (
  <IconWrapper>
    {/* Regular */}
    <svg
      className="globalnav-image-regular"
      height="32"
      viewBox="0 0 30 32"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m23.3291 23.3066-4.35-4.35c-.0105-.0105-.0247-.0136-.0355-.0235a6.8714 6.8714 0 1 0 -1.5736 1.4969c.0214.0256.03.0575.0542.0815l4.35 4.35a1.1 1.1 0 1 0 1.5557-1.5547zm-15.4507-8.582a5.6031 5.6031 0 1 1 5.603 5.61 5.613 5.613 0 0 1 -5.603-5.61z" />
    </svg>
    {/* Compact */}
    <svg
      className="globalnav-image-compact"
      width="38"
      height="40"
      viewBox="0 0 38 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m28.6724 27.8633-5.07-5.07c-.0095-.0095-.0224-.0122-.032-.0213a7.9967 7.9967 0 1 0 -1.8711 1.7625c.0254.03.0357.0681.0642.0967l5.07 5.07a1.3 1.3 0 0 0 1.8389-1.8379zm-18.0035-10.0033a6.5447 6.5447 0 1 1 6.545 6.5449 6.5518 6.5518 0 0 1 -6.545-6.5449z" />
    </svg>
  </IconWrapper>
);

export const BagIcon = () => (
  <IconWrapper>
    {/* Regular - Versão Desktop */}
    <svg
      className="globalnav-image-regular"
      height="44"
      viewBox="0 0 14 44"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z" />
    </svg>

    {/* Compact - Versão Mobile */}
    <svg
      className="globalnav-image-compact"
      height="48"
      viewBox="0 0 17 48"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z" />
    </svg>
  </IconWrapper>
);
