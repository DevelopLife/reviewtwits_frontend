import styled from '@emotion/styled';
import { ChangeEvent, ReactNode } from 'react';

import { CreateProjectRequestBody } from 'api/projects';
import { useCreateProject } from 'hooks/useCreateProject';
import { ProjectCreateSelect } from 'components/Project/Create/ProjectCreateSelect';

export const ProjectCreateForm = () => {
  const { createProjectForm, changeCreateProjectFormByInput } =
    useCreateProject();

  return (
    <ProjectCreateFormView
      form={createProjectForm}
      onChangeByInput={changeCreateProjectFormByInput}
    />
  );
};

interface ProjectCreateFormViewProps {
  form: CreateProjectRequestBody;
  onChangeByInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectCreateFormView = ({
  form,
  onChangeByInput,
}: ProjectCreateFormViewProps) => {
  return (
    <S.CreateProjectFormContainer>
      <S.CreateProjectForm>
        <ProjectCreateItem label="사이트 소유주">
          <div>이미지</div>
        </ProjectCreateItem>
        <ProjectCreateItem label="프로젝트 이름">
          <S.Input
            type="string"
            name="projectName"
            value={form.projectName}
            onChange={onChangeByInput}
          />
        </ProjectCreateItem>
        <ProjectCreateItem label="프로젝트 설명">
          <S.Input
            type="string"
            name="projectDescription"
            value={form.projectDescription}
            onChange={onChangeByInput}
          />
        </ProjectCreateItem>
        <ProjectCreateItem label="URL Pattern">
          <S.Input
            type="string"
            name="uriPattern"
            value={form.uriPattern}
            onChange={onChangeByInput}
          />
        </ProjectCreateItem>
        <ProjectCreateItem label="카테고리">
          <ProjectCreateSelect
            formKey={'category'}
            options={PROJECT_CATEGORIES}
          />
        </ProjectCreateItem>
        <ProjectCreateItem label="언어">
          <ProjectCreateSelect
            formKey={'language'}
            options={PROJECT_LANGUAGES}
          />
        </ProjectCreateItem>
        <ProjectCreateItem label="프로젝트 색깔">
          <div>컬러 팔레트</div>
        </ProjectCreateItem>
      </S.CreateProjectForm>
    </S.CreateProjectFormContainer>
  );
};

const PROJECT_CATEGORIES = ['쇼핑몰', '영화', '게임'];
const PROJECT_LANGUAGES = ['한국어', '영어'];

interface ProjectCreateItemProps {
  label: string;
  children: ReactNode;
}

const ProjectCreateItem = ({ label, children }: ProjectCreateItemProps) => {
  return (
    <S.Item>
      <S.Label>{label}</S.Label>
      {children}
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
