import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';

import {
  ProjectCardCommon,
  Styles,
} from 'components/Project/Management/ProjectCardCommon';
import { ProjectDto } from 'typings/project';
import { GetProjectsResponseData } from 'api/projects';
import Button from 'components/common/Button';

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
        category: project.category,
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
  const { id, name, description, review, category } = project;

  return (
    <ProjectCardCommon
      styles={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      <S.BehindContent>
        <S.Top>
          <S.Category>{category}</S.Category>
        </S.Top>
        <S.Title>{name}</S.Title>
        {isHover && (
          <S.ContentWrap>
            <S.SubTitle>
              <S.ContentItem>{id}</S.ContentItem>
              <S.ContentItem>리뷰 : {review}</S.ContentItem>
            </S.SubTitle>
            <S.Description>{description}</S.Description>

            {
              // TODO: 임시
            }
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button>
                <Link
                  href={{
                    pathname: '/project/install',
                    query: { projectName: name },
                  }}
                  style={{ color: 'black' }}
                >
                  설치가이드
                </Link>
              </Button>
              <Button>
                <Link href={'/project/install'} style={{ color: 'black' }}>
                  수정
                </Link>
              </Button>
              <Button>
                <Link href={'/project/install'} style={{ color: 'black' }}>
                  설정
                </Link>
              </Button>
            </div>
          </S.ContentWrap>
        )}
      </S.BehindContent>
    </ProjectCardCommon>
  );
};

const S = {
  BehindContent: styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 20px;
  `,
  Top: styled.div`
    margin-bottom: 20px;
  `,
  Category: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 85px;
    height: 43px;
    border-radius: 30px;

    font-weight: 400;
    font-size: 16px;
    background-color: black;
  `,
  Title: styled.h2`
    font-weight: 700;
    font-size: 43px;
    margin: 0 0 12px 0;
  `,
  ContentWrap: styled.div`
    text-align: center;
  `,
  SubTitle: styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-bottom: 32px;
  `,
  ContentItem: styled.div``,
  Description: styled.p`
    height: 63px;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `,
};
