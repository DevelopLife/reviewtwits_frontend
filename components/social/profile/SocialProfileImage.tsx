import Image from 'next/image';
import { formattedImageUrl } from 'utils/format';

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
      src={profileImage ? formattedImageUrl(profileImage) : ''}
      alt={'socialProfileImage'}
    />
  );
};

export default SocialProfileImage;
