import BaseBzz from '../packages/erebos-api-bzz-base'

describe('placeholder test', () => {
  it('should always pass', () => {
    expect(0).toBe(0)
  })
})

describe('BaseBzz', () => {
  it('downloadRaw', () => {
    console.log('base bzz test')
    let bzz = new BaseBzz("some url")
    bzz._fetch = global._fetch
    let downloadRaw = bzz.downloadRaw("some hash")
    await downloadRaw()
  })
})
