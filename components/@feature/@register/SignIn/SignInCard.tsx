import FindBox from 'components/@feature/@user/SignIn/FindBox';
import SignInForm from 'components/@feature/@user/SignIn/SignInForm';
import SocialLoginBox from 'components/@feature/@user/SignIn/SocialLoginBox';
import Card from 'components/@ui/Card';

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
