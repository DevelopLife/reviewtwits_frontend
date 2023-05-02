import styled from '@emotion/styled';

import SocialLayout from 'components/social/common/SocialLayout';
import MainContentSection from 'components/social/feed/MainContentSection';
import UserFilterBar from 'components/social/feed/UserFilterBar';
import SideBar from 'components/social/feed/SideBar';
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
