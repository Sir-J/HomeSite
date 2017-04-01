import { HomeSitePage } from './app.po';

describe('home-site App', () => {
  let page: HomeSitePage;

  beforeEach(() => {
    page = new HomeSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
