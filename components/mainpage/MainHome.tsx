import { useEffect, useRef, useState } from 'react';
import * as S from './MainHome.styles';

const sliders = [
  {
    id: 0,
    appInfos: [`어떤 카테고리의 리뷰를`, `필요로하시나요?`],
    appDescs: [
      `reviewtwits는 다양한 형태의 맞춤형 리뷰를 제공합니다`,
      `홈페이지에 리뷰를 적용하고 싶으시다면 reviewtwits를 사용해보세요`,
      `고객님들의 경험이 더욱 풍부해질 것입니다.`,
    ],
    backgroundColor: `#FC4A55`,
    infoColor: '#ffffff',
    descColor: '#ededed',
  },
  {
    id: 1,
    appInfos: [`리뷰를 보고 구매하신적`, `있으신가요?`],
    appDescs: [
      `리뷰는 소비자의 구매의향에 많은 영향을 미칩니다!`,
      `리뷰는 사람의 마음을 움직이는 힘이 있습니다. 리뷰 시스템으로`,
      `사람들의 마음을 움직여 보세요!`,
    ],
    backgroundColor: `#FFCC02`,
    infoColor: '#181818',
    descColor: '#353535',
  },
  {
    id: 2,
    appInfos: [`리뷰는 신뢰를 줍니다`],
    appDescs: [
      `리뷰를 통해 플랫폼 신뢰도를 올려보세요!`,
      `리뷰는 사람들의 구매력을 올리는데 도움이 됩니다.`,
    ],
    backgroundColor: `#92BA3C`,
    infoColor: '#181818',
    descColor: '#353535',
  },
  {
    id: 3,
    appInfos: [`리뷰는 이제 하나의`, `문화입니다`],
    appDescs: [
      `자신의 경험을 공유하는 문화가 활성화 되고 있습니다.`,
      `정보를 나눔으로써 느끼는 기쁨을 함께 나눠보세요.`,
    ],
    backgroundColor: `#FB6CB2`,
    infoColor: '#181818',
    descColor: '#353535',
  },
  {
    id: 4,
    appInfos: [`리뷰는 선택이 아닌`, `필수입니다`],
    appDescs: [
      `리뷰가 없는 상품은 소비자들이 선택을 주저하게 합니다.`,
      `ReviewTwits와 함께 리뷰를 늘려나가보세요.`,
    ],
    backgroundColor: `#FFB42B`,
    infoColor: '#181818',
    descColor: '#353535',
  },
];

const MainHome = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentSlideIndex(0);
  }, []);

  useEffect(() => {
    const timeoutIndex = setTimeout(
      () =>
        setCurrentSlideIndex((prev) => {
          if (prev < sliders.length) {
            return prev + 1;
          }
          return 0;
        }),
      currentSlideIndex === sliders.length ? 500 : 3000
    );
    return () => clearTimeout(timeoutIndex);
  });

  return (
    <S.SliderView>
      <S.SliderContainer
        ref={sliderRef}
        sliderCount={sliders.length + 1}
        currentSlideIndex={currentSlideIndex}
      >
        {[...sliders, { ...sliders[0], id: sliders.length }].map((slider) => (
          <S.Container key={slider.id} backgroundColor={slider.backgroundColor}>
            <S.MainInfoArea>
              <S.LeftArea>
                <S.AppInfo infoColor={slider.infoColor}>
                  {slider.appInfos.map((info, idx) => (
                    <div key={idx}>
                      {info}
                      <br />
                    </div>
                  ))}
                </S.AppInfo>

                {slider.appDescs.map((desc, idx) => (
                  <S.AppDesc descColor={slider.descColor} key={idx}>
                    {desc}
                  </S.AppDesc>
                ))}
                <S.Button>
                  <p>Learn More</p>
                </S.Button>
              </S.LeftArea>
              <S.RightArea>
                <S.Image src="" />
              </S.RightArea>
            </S.MainInfoArea>
          </S.Container>
        ))}
      </S.SliderContainer>
    </S.SliderView>
  );
};

export default MainHome;
