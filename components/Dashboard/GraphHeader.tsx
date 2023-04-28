import Image from 'next/image';

import Button from './common/Button';
import * as S from './GraphHeader.styles';

const PageData = () => {
  return (
    <S.Container>
      <S.Datas>
        <S.Data>
          <S.DataTitle>오늘 방문수</S.DataTitle>
          <S.DataDesc>98</S.DataDesc>
        </S.Data>
        <S.Data>
          <S.DataTitle>어제 방문수</S.DataTitle>
          <S.DataDesc>407</S.DataDesc>
        </S.Data>
        <S.Data>
          <S.DataTitle>누적 방문수</S.DataTitle>
          <S.DataDesc>571,146</S.DataDesc>
        </S.Data>
      </S.Datas>
      <Button>
        방문 통계
        <Image width={30} height={30} src="" alt="mock" />
      </Button>
    </S.Container>
  );
};

export default PageData;
