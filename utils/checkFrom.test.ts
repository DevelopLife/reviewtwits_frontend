import { checkPreviousHostnameEqualMyHostName } from 'utils/checkFrom';

const documentMock = {
  referrer: '',
};

describe('checkPreviousHostnameEqualMyHostName test', () => {
  // life cycle hooks 각각의 테스트 케이스가 실행되기 전에 진행된다.
  beforeEach(() => {
    jest
      .spyOn(global, 'document', 'get')
      .mockReturnValue(documentMock as Document);
  });

  // life cycle hooks 각각의 테스트 케이스가 끝난 후에 진행된다.
  afterEach(() => {
    jest.spyOn(global, 'document', 'get').mockRestore();
  });

  it('document.referrer is equal my hostname', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://reviewtwits.shop',
    });

    const result = checkPreviousHostnameEqualMyHostName();
    expect(result).toBe(true);
  });

  it('document.referrer is not equal my hostname', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://www.test.com',
    });

    const result = checkPreviousHostnameEqualMyHostName();
    expect(result).toBe(false);
  });
});
