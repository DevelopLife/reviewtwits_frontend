import styled from '@emotion/styled';

export const ProjectCreateForm = () => {
  return <ProjectCreateFormView />;
};

export const ProjectCreateFormView = () => {
  return (
    <S.CreateProjectFormContainer>
      <S.CreateProjectForm>
        <ProjectCreateInput label="사이트 소유주" type={'string'} />
        <ProjectCreateInput label="프로젝트 이름" type={'string'} />
        <ProjectCreateInput label="URL Pattern" type={'string'} />
        <ProjectCreateInput label="카테고리" type={'select'} />
        <ProjectCreateInput label="언어" type={'select'} />
        <ProjectCreateInput label="프로젝트 색" type={'select'} />
      </S.CreateProjectForm>
    </S.CreateProjectFormContainer>
  );
};

interface ProjectCreateInputProps {
  label: string;
  type: string;
}

const ProjectCreateInput = ({ label, type }: ProjectCreateInputProps) => {
  return (
    <S.Item>
      <S.Label>{label}</S.Label>
      <S.Input type={type} />
    </S.Item>
  );
};

const S = {
  CreateProjectFormContainer: styled.div`
    padding: 74px 98px;
  `,
  CreateProjectForm: styled.form`
    display: flex;
    flex-direction: column;
  `,
  Item: styled.div`
    display: flex;
  `,
  Label: styled.label`
    display: inline-block;
    width: 195px;
    margin-bottom: 80px;

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  `,
  Input: styled.input`
    width: 400px;
    height: 40px;
  `,
};
