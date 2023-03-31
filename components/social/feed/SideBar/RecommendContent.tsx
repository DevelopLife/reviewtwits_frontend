import Image from 'next/image';

const RecommendContent = () => {
  return (
    <div>
      <div>
        <Image
          width={68}
          height={68}
          src=""
          alt=""
          style={{ background: 'gray' }}
        />
        <div>
          <span>nickname</span>
          <button>수정하기</button>
        </div>
      </div>
      <div>
        <div>
          <h2>내가 좋아할만한 컨텐츠</h2>
          <button>전체보기</button>
        </div>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <Image
                width={40}
                height={40}
                src=""
                alt=""
                style={{ background: 'gray' }}
              />
              <div>
                <span>nickname2</span>
                <span>followed by nickname</span>
              </div>
              <button>팔로우</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendContent;
