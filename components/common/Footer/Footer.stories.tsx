import Footer, { FooterProps } from './Footer';

export default {
  title: 'Component/Footer',
  component: Footer,
};

export const Basic = (args: FooterProps) => ({
  props: args,
  template: `<Footer />`,
});
Basic.args = {
  mainHomeRef: null,
  serviceIntroduceRef: null,
  functoinIntroduceRef: null,
  effectIntroduceRef: null,
};
