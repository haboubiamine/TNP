import { HelmetPipe } from './helmet.pipe';

describe('HelmetPipe', () => {
  it('create an instance', () => {
    const pipe = new HelmetPipe();
    expect(pipe).toBeTruthy();
  });
});
