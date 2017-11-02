import Masker from '..';

describe('MaskerTest', () => {
  test('ko:masker', () => {
    const m =  Masker('ko');

    let masked = m.fullname('홍길동');
    expect(masked).toEqual('홍*동');

    masked = m.cellphone('010-1122-3344');
    console.log('cellphone: ', masked);
    expect(masked).toEqual('010-****-3344');

    masked = m.cellphone('01011223344');
    console.log('cellphone: ', masked);
    expect(masked).toEqual('010****3344');

    masked = m.cellphone('0101123344');
    console.log('cellphone: ', masked);
    expect(masked).toEqual('010****3344');

    masked = m.cellphone('010-112-3344');
    console.log('cellphone: ', masked);
    expect(masked).toEqual('010-****-3344');
  });
});
