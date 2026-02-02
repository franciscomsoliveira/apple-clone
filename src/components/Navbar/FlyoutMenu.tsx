import * as S from "./styles";
import { submenuData } from "./data";

interface Props {
  activeMenu: string | null;
  isDark: boolean;
}

export const FlyoutMenu = ({ activeMenu, isDark }: Props) => {
  const isVisible = Boolean(activeMenu);

  if (!activeMenu) return null;

  return (
    <S.Flyout $isVisible={isVisible} $isDark={isDark}>
      <S.FlyoutContent>
        {submenuData[activeMenu]?.groups.map((group, gIndex) => (
          <S.SubmenuGroup key={group.title}>
            <S.SubmenuHeader>{group.title}</S.SubmenuHeader>

            <S.SubmenuList>
              {group.items.map((item, i) => (
                <S.SubmenuItem
                  key={item}
                  $isVisible={isVisible}
                  $index={i + gIndex * 3}
                  className={group.small ? "small-link" : ""}
                >
                  <a href="#">{item}</a>
                </S.SubmenuItem>
              ))}
            </S.SubmenuList>
          </S.SubmenuGroup>
        ))}
      </S.FlyoutContent>
    </S.Flyout>
  );
};
