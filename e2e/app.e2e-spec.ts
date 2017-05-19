import { GaNg2Page } from './app.po';

describe('ga-ng2 App', () => {
  let page: GaNg2Page;

  beforeEach(() => {
    page = new GaNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
