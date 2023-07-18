import { ReactNode } from 'react';

import Button2 from 'components/@ui/Button2';

export interface ReviewCreateButtonProps {
  // color: Colors;
  disabled: boolean;
  children: ReactNode;
}

const ReviewCreateButton = ({
  children,
  disabled,
  ...rest
}: ReviewCreateButtonProps) => {
  return (
    <Button2
      {...rest}
      type="submit"
      shape="rectangle"
      backgroundColor={disabled ? 'gray_3' : undefined}
      paddingSize="large"
      fontSize={18}
    >
      {children}
    </Button2>
  );
};

export default ReviewCreateButton;
