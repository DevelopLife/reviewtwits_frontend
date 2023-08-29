import styled from '@emotion/styled';

interface ProjectCreateTabItemProps {
  isCurrent: boolean;
  menu: string;
}

export const ProjectCreateTabItem = ({
  isCurrent,
  menu,
}: ProjectCreateTabItemProps) => {
  return (
    <S.SidebarItem type="button" key={menu} isCurrent={isCurrent}>
      {menu}
    </S.SidebarItem>
  );
};

const S = {
  SidebarItem: styled.button<{ isCurrent: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 167px;
    border: 0;

    :hover {
      cursor: default;
      opacity: 1;
    }

    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    background-color: ${({ isCurrent }) =>
      isCurrent
        ? Colors.backgroundColor.focus
        : Colors.backgroundColor.primary};
    color: ${({ isCurrent }) =>
      isCurrent ? Colors.fontColor.focus : Colors.fontColor.primary};
  `,
};

const Colors = {
  backgroundColor: {
    primary: '#393939',
    focus: '#ffffff',
  },
  fontColor: {
    focus: '#181818',
    primary: '#ADADAD',
  },
};
