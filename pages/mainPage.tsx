import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import {
  MainHome,
  ServiceIntroduce,
  FunctionIntroduce,
  EffectIntroduce,
} from '@/components/MainPage/@index';

const mainPage = () => {
  return (
    <div>
      <Header />
      <MainHome />
      <ServiceIntroduce />
      <FunctionIntroduce />
      <EffectIntroduce />
      <Footer />
    </div>
  );
};

export default mainPage;
