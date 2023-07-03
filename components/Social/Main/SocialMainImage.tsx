import Image from 'next/image';

import MainImage from 'public/images/social_main_img.jpg';

const SocialMainImage = () => (
  <Image width={738} height={738} quality={100} src={MainImage} alt="mainImg" />
);

export default SocialMainImage;
