import DetailImage from './DetailImage';
import Comments from './Comments';
import styled from '@emotion/styled';
import Contants from './Contants';
import Reviewer from './Reviewer';
import Reactions from './Reactions';
import AddCommentForm from './AddCommentForm';

const SocialFeedModal = () => {
  return (
    <S.FeedDetailContainer>
      <DetailImage />
      <S.DetailDesc>
        <Reviewer />
        <Contants />
        <S.Line />
        <Comments />
        <S.Line />
        <Reactions />
        <AddCommentForm />
      </S.DetailDesc>
    </S.FeedDetailContainer>
  );
};

const S = {
  FeedDetailContainer: styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1308px;
    height: 624px;

    padding-left: 60px;
    padding-right: 60px;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);
    border-radius: 20px;
  `,
  DetailDesc: styled.div`
    width: 654px;
    margin-top: 92px;
    margin-bottom: 92px;
  `,

  Line: styled.div`
    border: 1px solid #e9e9e9;
  `,
};

export default SocialFeedModal;
