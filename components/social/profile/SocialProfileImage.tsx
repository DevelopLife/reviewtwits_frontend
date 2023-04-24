import Image from 'next/image';
import { formattedImageUrl } from 'utils/format';

interface SocialProfileImageProps {
  profileImageUrl: string | null;
}

const SocialProfileImage = ({ profileImageUrl }: SocialProfileImageProps) => {
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
      src={profileImageUrl ? formattedImageUrl(profileImageUrl) : ''}
      alt={'socialProfileImage'}
    />
  );
};

export default SocialProfileImage;
