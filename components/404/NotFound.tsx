import Link from 'next/link';
import Image from 'next/image';

import styled from '@emotion/styled';
import Button from 'components/Common/Button';

const NotFound = () => {
  return (
    <S.Container>
      <S.Box>
        <Image
          width={676}
          height={676}
          quality={100}
          src="/images/not_found_img.png"
          alt="notFoundImg"
        />
        <S.Content>
          <h1>해당 페이지를 찾지 못했습니다</h1>
          <small>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다</small>
          <Link href="/">
            <Button color="primary" large>
              메인페이지로 이동
            </Button>
          </Link>
        </S.Content>
      </S.Box>
    </S.Container>
  );
};

export default NotFound;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
  `,

  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;

    white-space: pre;

    h1 {
      font-size: 36px;
      font-weight: 700;
    }

    small {
      font-size: 16px;
      margin-top: 15px;
      margin-bottom: 56px;
    }
  `,
};
