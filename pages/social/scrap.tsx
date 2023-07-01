import styled from '@emotion/styled';

import SocialLayout from 'components/Social/Common/SocialLayout';
import ScrapList from 'components/Social/Scrap/ScrapList';
import SideBar from 'components/Social/Feed/SideBar';

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
