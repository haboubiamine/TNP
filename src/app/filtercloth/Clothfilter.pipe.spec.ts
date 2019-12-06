import { Clothfilter } from './Clothfilter.pipe';

describe('ClothfilterPipe', () => {
  it('create an instance', () => {
    const pipe = new  Clothfilter();
    expect(pipe).toBeTruthy();
  });
});
