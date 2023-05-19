import { DEFAULT_FIND_PASSWORD_FORM } from './../constants/account';
import { atom } from 'recoil';
import { FindIdResponseType } from 'typings/account';

interface FoundUserIdsAtom {
  userIds: FindIdResponseType[];
  counts: number;
}

const foundUserIds = atom<FoundUserIdsAtom>({
  key: 'foundUserIds',
  default: {
    userIds: [],
    counts: 0,
  },
});

const findUserPasswords = atom({
  key: 'findUserPasswords',
  default: DEFAULT_FIND_PASSWORD_FORM,
});

export { foundUserIds, findUserPasswords };
