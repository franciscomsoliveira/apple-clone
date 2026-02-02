import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        {/* Texto Legal */}
        <S.Legal>
          <p>
            © {new Date().getFullYear()} Apple Inc. Todos os direitos
            reservados.
          </p>
        </S.Legal>

        {/* Links */}
        <S.Links>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Vendas e Reembolsos</a>
          <a href="#">Avisos Legais</a>
          <a href="#">Mapa do Site</a>
        </S.Links>

        {/* Região */}
        <S.Region>
          <span>Brasil</span>
        </S.Region>
      </S.Container>
    </S.Footer>
  );
};
