import styled from '@emotion/styled';
import { ReactNode } from 'react';

import { useCreateProject } from 'hooks/useCreateProject';
import DownTriangleSVG from 'public/icons/down_triangle.svg';
import { useSelect } from 'hooks/useSelect';

interface ProjectCreateSelectProps {
  formKey: 'category' | 'language';
  options: string[];
}

export const ProjectCreateSelect = ({
  formKey,
  options,
}: ProjectCreateSelectProps) => {
  const { createProjectForm, changeCreateProjectFormBySelect } =
    useCreateProject();
  const changeForm = (value: string) => {
    changeCreateProjectFormBySelect(formKey, value);
  };

  const { isOpen, onClickOption, onClickTrigger } = useSelect(changeForm);

  return (
    <ProjectCreateSelectView
      options={options}
      value={createProjectForm[formKey]}
      isOpen={isOpen}
      icon={<DownTriangleSVG />}
      onClickTrigger={onClickTrigger}
      onClickOption={onClickOption}
    />
  );
};

interface ProjectCreateSelectViewProps {
  options: string[];
  value: string;
  icon: ReactNode;
  isOpen: boolean;
  onClickTrigger: () => void;
  onClickOption: (value: string) => void;
}

export const ProjectCreateSelectView = ({
  options,
  value,
  icon,
  isOpen,
  onClickTrigger,
  onClickOption,
}: ProjectCreateSelectViewProps) => {
  return (
    <S.SelectContainer>
      <S.Trigger onClick={onClickTrigger}>
        {value}
        <S.Icon>{icon}</S.Icon>
      </S.Trigger>
      {isOpen && (
        <S.OptionsContainer>
          <S.Options>
            {options.map((option) => (
              <S.Option key={option} onClick={() => onClickOption(option)}>
                {option}
              </S.Option>
            ))}
          </S.Options>
        </S.OptionsContainer>
      )}
    </S.SelectContainer>
  );
};

const S = {
  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;

    gap: 5px;
  `,
  Trigger: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    border: 1px solid #969696;
    padding: 8px 45px 8px 18px;
    z-index: 0;

    :hover {
      cursor: pointer;
    }
  `,
  Icon: styled.span`
    position: absolute;
    right: 15px;
  `,
  OptionsContainer: styled.div`
    position: relative;
  `,
  Options: styled.div`
    position: absolute;
    width: 100%;
    max-height: 99px;
    overflow: scroll;

    border: 1px solid #d0d0d0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;

    z-index: 1;

    :hover {
      cursor: pointer;
    }
  `,
  Option: styled.div`
    height: 33px;
    padding: 8px 18px;

    :hover {
      opacity: 0.8;
      background-color: #d0d0d0;
    }
  `,
};
