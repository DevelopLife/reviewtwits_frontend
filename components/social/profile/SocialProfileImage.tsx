import Image from 'next/image';

interface SocialProfileImageProps {
  profileImage: string | null;
}

const SocialProfileImage = ({ profileImage }: SocialProfileImageProps) => {
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
      src={profileImage ? profileImage : ''}
      alt={'socialProfileImage'}
    />
  );
};

export default SocialProfileImage;
