import * as S from './SurveyBox.styles';

const SurveyBox = () => {
  return (
    <S.Box>
      <S.Survey>
        <S.SurveyTitle>맛 만족도</S.SurveyTitle>
        <S.Answer>
          <S.RadioButton type="radio" name="taste" id="tasteBad" />
          <S.AnswerText htmlFor="tasteBad">예상보다 맛없어요</S.AnswerText>
        </S.Answer>
        <S.Answer>
          <S.RadioButton type="radio" name="taste" id="tasteFine" />
          <S.AnswerText htmlFor="tasteFine">괜찮아요</S.AnswerText>
        </S.Answer>
        <S.Answer>
          <S.RadioButton type="radio" name="taste" id="tasteGood" />
          <S.AnswerText htmlFor="tasteGood">예상보다 맛있어요</S.AnswerText>
        </S.Answer>
      </S.Survey>
      <S.Survey>
        <S.SurveyTitle>간편함</S.SurveyTitle>
        <S.Answer>
          <S.RadioButton type="radio" name="easy" id="easyBad" />
          <S.AnswerText htmlFor="easyBad">조리하기 불편해요</S.AnswerText>
        </S.Answer>
        <S.Answer>
          <S.RadioButton type="radio" name="easy" id="easyFine" />
          <S.AnswerText htmlFor="easyFine">보통이에요</S.AnswerText>
        </S.Answer>
        <S.Answer>
          <S.RadioButton type="radio" name="easy" id="easyGood" />
          <S.AnswerText htmlFor="easyGood">조리하기 간편해요</S.AnswerText>
        </S.Answer>
      </S.Survey>
    </S.Box>
  );
};

export default SurveyBox;
