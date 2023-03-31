import Image from 'next/image';

import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

const MainContentSection = () => {
  return (
    <section>
      <button>
        <Image width={32} height={32} src={BookmarkOutlineIcon} alt="scrap" />
      </button>
      <div>
        <div>
          <Image
            width={32}
            height={32}
            src=""
            alt=""
            style={{ background: 'gray' }}
          />
          <span>nickname</span>
          <div>
            {Array.from({ length: 4 }).map((_, i) => (
              <Image key={i} width={30} height={30} src={FullStarImg} alt="" />
            ))}
            <Image width={30} height={30} src={EmptyStarImg} alt="" />
          </div>
          <span>1h</span>
        </div>
        <p>
          저번에는 냉동피자 중에 좀 가격대가 있는 우주인피자 주문했었는데요.
          불고기 피자가 먹고 싶다고 해서 찾다가 오뚜기 불고기 피자가 있길래 주문
          했어요. 우주인피자는 한 판에 만 원이 훌쩍 넘는데, 오뚜기 피자는 3개에
          만 사천원대라 엄청 저렴해요. 확실히 가성비는 갓뚜기 오뚜기 냉동피자가
          넘사 입니다.오븐조리, 전자레인지 조리, 프라이팬 조리법이 있는데요.
          집에서 드실 때는 오븐 혹은 에어프라이어 추천드려요. 프라이팬은 조리가
          좀 어렵고 전자레인지에 조리하면 눅눅합니다 ㅠㅠ 저는 캠핑 가서 먹어서
          난로 위에 올려 데워 먹었어요.겨울 캠핑의 묘미 아니 겠습니까.
        </p>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              width={84}
              height={84}
              src=""
              alt=""
              style={{ background: 'gray' }}
            />
          ))}
        </div>
        <div>
          <button>2 🥺</button>
          <button>9 😎</button>
          <button>8 😠</button>
          <button>13 😘</button>
        </div>
        <button>24개의 댓글이 달림</button>
        <div>
          <button>상품 구매</button>
          <button>상품 정보</button>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
