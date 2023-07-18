import Image from 'next/image';
import styled from '@emotion/styled';
import Link from 'next/link';

import Button2 from 'components/@ui/Button2';

const EffectIntroduce = () => {
  return (
    <S.Container>
      <S.Title>기대효과</S.Title>
      <S.CardContainer>
        <S.Card>
          <S.CardImage>
            <Image
              src="https://s3-alpha-sig.figma.com/img/b24d/feab/ea35c2760c3515332af68398d4f9582c?Expires=1678060800&amp;Signature=BIV5aL3EsAV2c1y0BjYX3TS3kJapi4bfmQt2LxJd0nsvC9V6Z6p9Jkcuhc0vkPEmsxW0ZyaSjgeXyrBZAaBtjiMCMKWxGO3f~QxnJaEjk7wgYp4F5BD4F43KXYwpFZeWT2ahE2XkgTQpaY3l-kDWpkLDYQ~3k-4PC6bHvVwvQlmgQat-Byf4SF1WCIdelhd7JGVapaymgAHhsyZnHD3zRYhkGBYVspxZRVR5mlK3MOXI5VYvfpfsagUI~9ijMExkB3-vtEE1yzHYQNhjfmGpkw9qhHX6YbWRDZiyyMpF9MyLoQ3FetfliYCa4n99cjf7lzNYtkLkPirOqynhSAFC2A__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt={''}
              width={112}
              height={112}
            />
          </S.CardImage>
          <S.CardTitle>Lorem Ipsum</S.CardTitle>
          <S.CardDesc>
            Lorem Ipsum is simply dummy text of the printing and typesetting i
            ndustry. Lorem Ipsum has been
          </S.CardDesc>
        </S.Card>
        <S.Card>
          <S.CardImage>
            <Image
              src="https://s3-alpha-sig.figma.com/img/02d0/366c/4f3317082d9080d294d7de5c3e4590bf?Expires=1678060800&amp;Signature=L6t5yj5eMSTPxRxXZRdEiEbYkcX52ndM0EHChymWNG6Q6sSf02YbVNNwvobpylw2c1b8pdZBjy-qpxRELZr~UtBfBCrVtrzFztN0Ti0qXievg-9qDj6Rby9LBzKJhkrod~BgmYJozAgPRCqchH7AtcLv-QkZTcv8LaR~gUHURt1lSutIbHh7oWm~IrSeW62QObQo9gnowODF2ZLIc6L8SuwxW3bpZ2glUAgKzSoLRYrgkUNKQ~aIZWRLogL4XW~HYTRBcLrvUERAhXkIt3uxY5Cz-fMhSJ2TpMQvWh-AxQfaQCmOqbNw4k-ogvFLGJvZq6ked5JR1PgFsQIbRHUPDQ__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt={''}
              width={112}
              height={112}
            />
          </S.CardImage>
          <S.CardTitle>Lorem Ipsum</S.CardTitle>
          <S.CardDesc>
            Lorem Ipsum is simply dummy text of the printing and typesetting i
            ndustry. Lorem Ipsum has been
          </S.CardDesc>
        </S.Card>
        <S.Card>
          <S.CardImage>
            <Image
              src="https://s3-alpha-sig.figma.com/img/97c5/635d/1f053f72a8c5b294d2176fad8b1c1f91?Expires=1678060800&amp;Signature=qVgyQTvGqpFZtdscwuVHwyxCt7O7nUC-A~iMqLV1QoNHFpRpLcd-9-IJbf2HGmD5WFrYunL-1vVoDuC-8WVim~uZ2fV72A1Rj3eykPtk6K-qTfxZE~C8YUYTtnMtdse9ICTslusrWDqsXjsNYJJ34a2u~8ZVk8LGAfP4T49jaIiCZnM-~xPbtV05HDRCuKEzZSzh~xCE3kwZROV3YzXeIeeNnQq55Fu7W4ZV4boHtnRES71vEKIo~0F8z009cxEaMPvUt6MJKjk5Ce7V-~fkfBReoclGyQpIzrn~vh-ASx1xe2yLp~L5IO6Mp9sshT77PLF0pz-Ok9yJze9bC8SC1Q__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt={''}
              width={112}
              height={112}
            />
          </S.CardImage>
          <S.CardTitle>Lorem Ipsum</S.CardTitle>
          <S.CardDesc>
            Lorem Ipsum is simply dummy text of the printing and typesetting i
            ndustry. Lorem Ipsum has been
          </S.CardDesc>
        </S.Card>
      </S.CardContainer>
      <S.NavigateButtonWrap>
        <Link href="/project/management">
          <Button2 accent="common" isFull layout fontSize={22}>
            GET STARTED
          </Button2>
        </Link>
      </S.NavigateButtonWrap>
    </S.Container>
  );
};

export default EffectIntroduce;

const S = {
  Container: styled.div`
    width: ${({ theme }) => theme.devices.desktop}px;
    height: 1266px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.h4`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 60px;

    margin-top: 273px;
    margin-bottom: 133px;

    color: #000000;
  `,

  CardContainer: styled.div`
    width: 1551px;
    height: 345px;
    display: flex;
    justify-content: space-between;

    margin-bottom: 129px;
  `,

  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 484px;
  `,

  CardImage: styled.div`
    width: 112px;
    height: 112px;
  `,

  CardTitle: styled.h5`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;

    margin-top: 55px;
    margin-bottom: 35px;
    color: #000000;
  `,

  CardDesc: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    color: #000000;
  `,

  NavigateButtonWrap: styled.div`
    width: 239px;
    height: 66px;
  `,
};
