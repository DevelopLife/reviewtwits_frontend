import Image from 'next/image';

import FullStarImg from 'public/images/full_star_img.png';

const TrendyProductsContent = () => {
  return (
    <div>
      <h2>오늘의 트렌드 상품</h2>
      <div>
        <Image
          width={40}
          height={40}
          src=""
          alt=""
          style={{ background: 'gray' }}
        />
        <div>
          <span>마이셰프 이금기 마라우육면 밀키트</span>
          <span>
            <Image
              width={20}
              height={20}
              src={FullStarImg}
              alt=""
              style={{ background: 'gray' }}
            />
            4.9
          </span>
          <span>|</span>
          <span>32개의 상품평</span>
        </div>
      </div>
    </div>
  );
};

export default TrendyProductsContent;
