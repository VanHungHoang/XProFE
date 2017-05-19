import { XProFEPage } from './app.po';

describe('xpro-fe App', () => {
  let page: XProFEPage;

  beforeEach(() => {
    page = new XProFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
