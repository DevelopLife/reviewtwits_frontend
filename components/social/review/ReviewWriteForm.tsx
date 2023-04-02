import ImageUploadBox from 'components/review/common/ImageUploadBox';
import RatingBox from 'components/review/common/RatingBox';
import ReviewCreateButton from 'components/review/common/ReviewCreateButton';
import ReviewTextArea from 'components/review/common/ReviewTextArea';
import SearchIcon from 'public/icons/search.svg';

const ReviewWriteForm = () => {
  return (
    <form>
      <h1>리뷰 작성</h1>
      <div>
        <div>
          <span>상품 URL</span>
          <input type="text" />
        </div>
        <div>
          <span>상품 검색</span>
          <div>
            <SearchIcon />
            <input type="text" />
          </div>
          <small>
            찾으시는 상품이 없으신가요? 해당 작성하신 상품 URL로 상품 등록하기
          </small>
        </div>
        <RatingBox
          setValue={() => {
            return;
          }}
        />
        <div>
          <span>상세 리뷰</span>
          <ReviewTextArea
            content={''}
            handleChange={() => {
              return;
            }}
          />
        </div>
        <ImageUploadBox
          buttonColor="blue_0"
          setValue={() => {
            return;
          }}
        />
        <div>
          <ReviewCreateButton color="blue_0" disabled={false}>
            작성 완료
          </ReviewCreateButton>
        </div>
      </div>
    </form>
  );
};

export default ReviewWriteForm;
