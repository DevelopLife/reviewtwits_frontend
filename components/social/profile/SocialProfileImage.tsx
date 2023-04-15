import Image from 'next/image';

interface SocialProfileImageProps {
  profileImage: string | null;
}

const SocialProfileImage = ({ profileImage }: SocialProfileImageProps) => {
  // TODO: src 부분 지수가 작업한 걸로 교체해야함
  return (
    <Image
      width={80}
      height={80}
      style={{
        minWidth: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}
      src={
        profileImage
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}/request-images/${profileImage}`
          : ''
      }
      alt={'socialProfileImage'}
    />
  );
};

export default SocialProfileImage;
