import styled from '@emotion/styled';
import { useState } from 'react';

import { useCreateProject } from 'hooks/useCreateProject';

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
  const [isOpen, setIsOpen] = useState(false);

  const onClickTrigger = () => setIsOpen((pre) => !pre);
  const onClickOption = (option: string) => {
    if (createProjectForm[formKey] === option) {
      return setIsOpen(false);
    }

    changeCreateProjectFormBySelect(formKey, option);
    setIsOpen(false);
  };

  return (
    <ProjectCreateSelectView
      options={options}
      value={createProjectForm[formKey]}
      isOpen={isOpen}
      onClickTrigger={onClickTrigger}
      onClickOption={onClickOption}
    />
  );
};

interface ProjectCreateSelectViewProps {
  options: string[];
  value: string;
  isOpen: boolean;
  onClickTrigger: () => void;
  onClickOption: (value: string) => void;
}

export const ProjectCreateSelectView = ({
  options,
  value,
  isOpen,
  onClickTrigger,
  onClickOption,
}: ProjectCreateSelectViewProps) => {
  return (
    <S.SelectContainer>
      <S.Trigger onClick={onClickTrigger}>{value}</S.Trigger>
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
    display: flex;
    align-items: center;
    height: 40px;
    border: 1px solid green;
    padding: 8px 18px;

    :hover {
      cursor: pointer;
    }
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
