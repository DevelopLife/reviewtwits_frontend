import Card from 'components/@ui/Card';
import SignInForm from './SignInForm';
import FindBox from './FindBox';
import SocialLoginBox from './SocialLoginBox';

const SignInCard = () => {
  return (
    <Card>
      <SignInForm />
      <FindBox />
      <SocialLoginBox />
    </Card>
  );
};

export default SignInCard;
