import { ReactNode } from 'react';

import CodeBlock from 'components/common/CodeBlock/CodeBlock';
import * as S from './CodeParagraph.styles';

interface CodeParagraphProps {
  text: ReactNode;
  code: string;
}

const CodeParagraph = ({ text, code }: CodeParagraphProps) => {
  return (
    <S.CodeParagraphWrap>
      <S.InstallGuide>{text}</S.InstallGuide>
      <CodeBlock>{code}</CodeBlock>
    </S.CodeParagraphWrap>
  );
};

export default CodeParagraph;
