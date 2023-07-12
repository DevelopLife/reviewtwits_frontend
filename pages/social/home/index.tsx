import styled from '@emotion/styled';

import SocialLayout from 'components/@feature/@social/Common/SocialLayout';
import MainContentSection from 'components/@feature/@social/Feed/MainContentSection';
import UserFilterBar from 'components/@feature/@social/Feed/UserFilterBar';
import SideBar from 'components/@feature/@social/Feed/SideBar';
import useStoreagePathInSession from 'hooks/useStoreagePathInSession';

const SNSExplorePage = () => {
  useStoreagePathInSession();
  return (
    <SocialLayout>
      <S.Main>
        <UserFilterBar />
        <MainContentSection />
      </S.Main>
      <S.Side>
        <SideBar />
      </S.Side>
    </SocialLayout>
  );
};

export default SNSExplorePage;

const S = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    padding: 32px;
  `,

  Side: styled.div`
    position: sticky;
    top: -20px;

    height: fit-content;
    margin-top: 192px;
  `,
};
