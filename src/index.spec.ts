import nock from 'nock';

describe('test', () => {
  afterAll(async () => {
    nock.cleanAll();
    nock.restore();
  });

  it('can be constructed', () => {
    expect(true).toEqual(true);
  });
});
