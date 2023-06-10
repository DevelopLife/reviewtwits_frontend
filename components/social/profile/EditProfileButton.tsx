import styled from '@emotion/styled';
import { PAGE_LIST } from 'constants/routers';
import Link from 'next/link';

import { Colors } from 'styles/theme';
import { WrapProps } from 'typings/wrapperProps';

const EditProfileButton = () => {
  return (
    <EditProfileButtonView href={PAGE_LIST.PROFILE_SETTING} color="secondary">
      Edit Profile
    </EditProfileButtonView>
  );
};

interface EditProfileButtonViewProps extends WrapProps {
  color: Colors;
  href: string;
}

const EditProfileButtonView = ({
  href,
  color,
  children,
}: EditProfileButtonViewProps) => {
  return (
    <Link href={href}>
      <S.Button color={color}>{children}</S.Button>
    </Link>
  );
};

export default EditProfileButton;

const S = {
  Button: styled.button<{ color: Colors }>`
    padding: 17px 37px;
    border-radius: 15px;

    font-weight: 700;
    font-size: 18px;
    color: white;
    background-color: ${({ theme, color }) => theme.colors[color]};
  `,
};
