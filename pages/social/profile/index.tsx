import Image from 'next/image';

import SocialLayout from 'components/sns/common/SocialLayout';
import SocialTitleSection from 'components/sns/common/SocialTitleSection';
import { SocialFeedCard } from 'components/social/profile/SocialFeedCard';
import SocialFeedSection from 'components/social/profile/SocialFeedSection';

const SocialProfilePage = () => {
  return (
    <SocialLayout>
      <SocialTitleSection>
        <SocialFeedSection>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <SocialFeedCard
              key={index}
              styles={{
                width: 318,
                height: 318,
                borderRadius: 20,
              }}
            >
              <Image src="" alt="feedThumbnail" fill />
            </SocialFeedCard>
          ))}
        </SocialFeedSection>
      </SocialTitleSection>
    </SocialLayout>
  );
};

export default SocialProfilePage;
