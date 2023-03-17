import * as S from '../ReviewWriteModal.styles';

import ServiceQuestionBox from './ServiceQuestionBox';
import { SatisfactionBox } from './SatisfactionBox.styles';

const ServiceSection = () => {
  return (
    <S.Section>
      <ServiceQuestionBox />
      <SatisfactionBox />
    </S.Section>
  );
};

export default ServiceSection;
