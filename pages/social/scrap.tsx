import styled from '@emotion/styled';

import SocialLayout from 'components/social/common/SocialLayout';
import ScrapList from 'components/social/scrap/ScrapList';
import SideBar from 'components/social/feed/SideBar';

const ScrapPage = () => {
  return (
    <SocialLayout>
      <S.Main>
        <ScrapList />
      </S.Main>
      <S.Side>
        <SideBar />
      </S.Side>
    </SocialLayout>
  );
};

export default ScrapPage;

const S = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    padding: 32px;
    margin-top: 60px;
  `,

  Side: styled.div`
    position: sticky;
    top: -10px;

    height: fit-content;
    margin-top: 90px;
  `,
};
