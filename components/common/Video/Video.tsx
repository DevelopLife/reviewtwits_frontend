import * as S from './Video.styles';

interface VideoProps {
  srcs: string[];
  guideMessage?: string;
}

const VIDEO_GUIDE_MESSAGE =
  '해당 브라우저에서는 이용하실 수 없습니다. 다른 브라우저를 이용해주세요.';

const Video = ({ srcs, guideMessage }: VideoProps) => {
  return (
    <S.Video controls>
      {srcs.map((src) => (
        <S.Source key={src} src={src} />
      ))}
      {guideMessage ? guideMessage : VIDEO_GUIDE_MESSAGE}
    </S.Video>
  );
};

export default Video;
