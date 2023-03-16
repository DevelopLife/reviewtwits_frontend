import Image from 'next/image';

const ReviewWriteModal = () => {
  return (
    <div>
      <h1>리뷰 관리</h1>
      <hr />
      <div>
        <Image
          width={50}
          height={50}
          src=""
          alt=""
          style={{ background: 'gray' }}
        />
        <div>
          <h3>마린컴퍼니(주) 서비스 리뷰</h3>
          <p>
            배송, 포장, 질문, 응대 등 판매자의 전체적인 서비스는 어떠셨나요?
          </p>
        </div>
        <div>
          <span>만족도</span>
          <div>
            <button>b</button>
            <button>q</button>
          </div>
        </div>
      </div>
      <hr />
      <Image
        width={50}
        height={50}
        src=""
        alt=""
        style={{ background: 'gray' }}
      />
      <div>
        <h3>상품 품질 리뷰</h3>
        <p>이 상품에 대해 얼마나 만족하시나요?</p>
      </div>
      <hr />
      <div>
        <Image
          width={150}
          height={150}
          src=""
          alt=""
          style={{ background: 'gray' }}
        />
        <div>
          <span>오뚜기 콤비네이션 피자 415g 오뚜기, 2개</span>
          <div>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <span>상세리뷰</span>
        <textarea
          style={{
            width: '789px',
            height: '253px',
            resize: 'none',
          }}
          placeholder={`다른 고객님에게 도움이 될 수 있도록 솔직한 평가를 남겨주세요.\n고객님의 피드백이 더 나은 제품 제공되는데 도움이 됩니다\n\n\n\n\n\n\n\n\n\n\n\n\n상품과 관계 없거나 악의적 내용은 비공개 처리될 수 있습니다.`}
        />
      </div>
      <br />
      <div>
        <button>
          <Image
            width={30}
            height={30}
            src=""
            alt=""
            style={{ background: 'gray' }}
          />
          사진 올리기
        </button>
        <input type="file" accept="image/*" />
        <div>
          {[1, 2, 3].map((_, i) => (
            <Image
              key={i}
              width={120}
              height={80}
              src=""
              alt=""
              style={{ background: 'gray' }}
            />
          ))}
        </div>
      </div>
      <hr />
      <div>
        <div>
          <span>맛 만족도</span>
          <div>
            <div>
              <div>
                <input type="radio" name="taste" id="tasteBad" />
                <label htmlFor="tasteBad">예상보다 맛없어요</label>
              </div>
              <div>
                <input type="radio" name="taste" id="tasteFine" />
                <label htmlFor="tasteFine">괜찮아요</label>
              </div>
              <div>
                <input type="radio" name="taste" id="tasteGood" />
                <label htmlFor="tasteGood">예상보다 맛있어요</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>간편함</span>
            <div>
              <div>
                <input type="radio" name="easy" id="easyBad" />
                <label htmlFor="easyBad">조리하기 불편해요</label>
              </div>
              <div>
                <input type="radio" name="easy" id="easyFine" />
                <label htmlFor="easyFine">보통이에요</label>
              </div>
              <div>
                <input type="radio" name="easy" id="easyGood" />
                <label htmlFor="easyGood">조리하기 간편해요</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>작성 완료</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewWriteModal;
