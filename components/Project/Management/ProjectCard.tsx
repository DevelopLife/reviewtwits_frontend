import styled from '@emotion/styled';
import { useState } from 'react';

import {
  ProjectCardCommon,
  Styles,
} from 'components/common/ProjectCard/ProjectCardCommon';
import { ProjectDto } from 'typings/project';
import { GetProjectsResponseData } from 'api/projects';

interface ProjectCardProps {
  project: GetProjectsResponseData;
  styles: Styles;
}

export const ProjectCard = ({ project, styles, ...rest }: ProjectCardProps) => {
  const [isHover, setIshover] = useState(false);

  const handleMouseEnter = () => setIshover(true);
  const handleMouseLeave = () => setIshover(false);

  return (
    <ProjectCardView
      project={{
        id: project.projectId,
        name: project.projectName,
        description: project.projectDescription,
        review: project.reviewCount,
      }}
      isHover={isHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      styles={styles}
      {...rest}
    />
  );
};

interface ProjectCardViewProps {
  project: ProjectDto;
  isHover: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  styles: Styles;
}

export const ProjectCardView = ({
  project,
  isHover,
  onMouseEnter,
  onMouseLeave,
  styles,
  ...rest
}: ProjectCardViewProps) => {
  const { id, name, description, review } = project;

  return (
    <ProjectCardCommon
      styles={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {isHover ? (
        <S.BehindContent>
          <S.Title>{name}</S.Title>
          <S.ContentWrap>
            <S.Content>{id}</S.Content>
            <S.Content>{description}</S.Content>
            <S.Content>{review}</S.Content>
          </S.ContentWrap>
        </S.BehindContent>
      ) : (
        <S.CardPreview>
          <h3>Preview</h3>
        </S.CardPreview>
      )}
    </ProjectCardCommon>
  );
};

const S = {
  CardPreview: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    background-color: black;
    color: white;
  `,
  BehindContent: styled.div``,
  Title: styled.h2`
    font-weight: 700;
    font-size: 43px;
    margin: 0;
  `,

  ContentWrap: styled.div`
    text-align: center;
  `,
  Content: styled.div``,
};
