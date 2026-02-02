import * as S from "./styles";

interface Props {
  variant?: "light" | "dark" | "neutral";
  center?: boolean;
  children: React.ReactNode;
}

export const Section = ({
  variant = "light",
  center = false,
  children,
}: Props) => {
  return (
    <S.Section $variant={variant}>
      <S.Container $center={center}>{children}</S.Container>
    </S.Section>
  );
};
