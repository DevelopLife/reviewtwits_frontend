import Footer from 'components/Common/Footer/Footer';
import Header from 'components/Common/Header/Header';
import {
  MainHome,
  ServiceIntroduce,
  EffectIntroduce,
  FunctionIntroduce,
} from 'components/Mainpage/@index';

import { useRef } from 'react';

const MainPage = () => {
  const mainHomeRef = useRef<HTMLDivElement>(null);
  const serviceIntroduceRef = useRef<HTMLDivElement>(null);
  const functoinIntroduceRef = useRef<HTMLDivElement>(null);
  const effectIntroduceRef = useRef<HTMLDivElement>(null);

  mainHomeRef.current?.scrollIntoView;
  return (
    <div>
      <Header />
      <div ref={mainHomeRef}>
        <MainHome />
      </div>
      <div ref={serviceIntroduceRef}>
        <ServiceIntroduce />
      </div>
      <div ref={functoinIntroduceRef}>
        <FunctionIntroduce />
      </div>
      <div ref={effectIntroduceRef}>
        <EffectIntroduce />
      </div>
      <Footer
        mainHomeRef={mainHomeRef}
        serviceIntroduceRef={serviceIntroduceRef}
        functoinIntroduceRef={functoinIntroduceRef}
        effectIntroduceRef={effectIntroduceRef}
      />
    </div>
  );
};

export default MainPage;
