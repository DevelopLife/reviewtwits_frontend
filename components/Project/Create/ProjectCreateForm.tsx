import styled from '@emotion/styled';
import { ChangeEvent, ReactNode } from 'react';

import { CreateProjectRequestBody } from 'api/projects';
import { useCreateProject } from 'hooks/useCreateProject';
import { ProjectCreateSelect } from 'components/Project/Create/ProjectCreateSelect';

import { ColorPickerTrigger } from 'components/Common/ColorPicker/ColorPickerTrigger';

export const ProjectCreateForm = () => {
  const {
    createProjectForm,
    changeCreateProjectFormByInput,
    changeProjectColor,
  } = useCreateProject();

  return (
    <ProjectCreateFormView
      form={createProjectForm}
      onChangeByInput={changeCreateProjectFormByInput}
      onChangeColor={changeProjectColor}
    />
  );
};

interface ProjectCreateFormViewProps {
  form: CreateProjectRequestBody;
  onChangeByInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeColor: (color: string) => void;
}

export const ProjectCreateFormView = ({
  form,
  onChangeColor,
  onChangeByInput,
}: ProjectCreateFormViewProps) => {
  return (
    <S.CreateProjectFormContainer>
      <S.CreateProjectForm>
        <ProjectCreateItem label="사이트 소유주">
          <div>이미지</div>
        </ProjectCreateItem>
        <ProjectCreateItem label="프로젝트 이름">
          <S.ItemWrap>
            <S.Input
              type="string"
              name="projectName"
              autoComplete="off"
              value={form.projectName}
              onChange={onChangeByInput}
            />
            <S.GuideMessage>
              당신의 서비스 URL은 {form.projectName}.reviewtwits.com 입니다.
            </S.GuideMessage>
          </S.ItemWrap>
        </ProjectCreateItem>
        <ProjectCreateItem label="프로젝트 설명">
          <S.ItemWrap>
            <S.Input
              type="string"
              name="projectDescription"
              autoComplete="off"
              value={form.projectDescription}
              onChange={onChangeByInput}
            />
            <S.GuideMessage></S.GuideMessage>
          </S.ItemWrap>
        </ProjectCreateItem>
        <ProjectCreateItem label="URL Pattern">
          <S.ItemWrap>
            <S.Input
              type="string"
              name="uriPattern"
              autoComplete="off"
              value={form.uriPattern}
              onChange={onChangeByInput}
            />
            <S.GuideMessage>
              {`서비스가 작동되게 될 범위를 지정합니다. (ex: /project)
              미입력시 전체 범위로 지정됩니다.`}
            </S.GuideMessage>
          </S.ItemWrap>
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
          <ColorPickerTrigger onChangeColor={onChangeColor} />
        </ProjectCreateItem>
      </S.CreateProjectForm>
    </S.CreateProjectFormContainer>
  );
};

const PROJECT_CATEGORIES = ['쇼핑', '영화', '게임'];
const PROJECT_LANGUAGES = ['한국어', 'ENGLISH'];

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
    margin-bottom: 70px;

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  `,
  ItemWrap: styled.div``,
  Input: styled.input`
    width: 400px;
    height: 40px;
    padding: 10px;
  `,
  GuideMessage: styled.div`
    margin-top: 5px;
    width: 400px;
    white-space: pre-line;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  ColorPickerTrigger: styled.div``,
};
