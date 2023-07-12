import { ReactNode } from 'react';
import styled from '@emotion/styled';

import CodeBlock from 'components/@ui/CodeBlock/CodeBlock';

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

const S = {
  InstallGuide: styled.p`
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 18px;
  `,
  CodeParagraphWrap: styled.div`
    margin-bottom: 92px;
  `,
};
