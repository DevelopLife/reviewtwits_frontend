import styled from '@emotion/styled';

import Review from './Review';

const MainContentSection = () => {
  return (
    <S.Section>
      <Review />
      <Review />
      <Review />
      {Array.from({ length: 5 }).map((_, i) => (
        <Review key={i} />
      ))}
    </S.Section>
  );
};

export default MainContentSection;

const S = {
  Section: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: relative;
  `,
};
