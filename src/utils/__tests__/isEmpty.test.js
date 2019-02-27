import isEmpty from '../isEmpty';

describe('Test isEmpty fuction', () => {
  const undefValue = undefined
  const nullValue = null
  const emptyObject = {}
  const emptyString = ''
  
  it('it should return true for undefined', () => {
    expect(isEmpty(undefValue)).toEqual(
      true
    );
  });
  it('it should return true for null', () => {
    expect(isEmpty(nullValue)).toEqual(
      true
    );
  });
  it('it should return true for emptyObject', () => {
    expect(isEmpty(emptyObject)).toEqual(
      true
    );
  });
  it('it should return true for emptString', () => {
    expect(isEmpty(emptyString)).toEqual(
      true
    );
  });
});
