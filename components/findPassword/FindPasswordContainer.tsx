import React, { useState } from 'react';
import FindPassword from './FindPassword';
import FindPasswordResults from './FindPasswordResults';
import { emailsAPI } from 'api/emails';
import { FindPasswordType } from 'typings/account';
import { DEFAULT_FIND_PASSWORD_FORM, ERROR_MESSAGE } from 'constants/account';
import { useRecoilValue } from 'recoil';
import { findUserPasswords } from 'states/atomFindUserInfo';

const FindPasswordContainer = () => {
  const findPasswordValues = useRecoilValue(findUserPasswords);

  const handleFindPassword = async (params: FindPasswordType) => {
    const status = await emailsAPI.findPasswords(params);
    return status;
  };

  if (findPasswordValues !== DEFAULT_FIND_PASSWORD_FORM) {
    return <FindPasswordResults handleFindPassword={handleFindPassword} />;
  } else return <FindPassword handleFindPassword={handleFindPassword} />;
};

export default FindPasswordContainer;
