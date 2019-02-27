import { getImage } from '../getImage';

describe('Get image test', () => {
  const props = {
    image: 'fhfhfhfhh'
  };

  it('expect image to be defined', () => {
    expect(getImage(props)).toBeDefined();
  });
});
