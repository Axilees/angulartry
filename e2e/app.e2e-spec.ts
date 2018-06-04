import { AngularTryPage } from './app.po';

describe('angular-try App', () => {
  let page: AngularTryPage;

  beforeEach(() => {
    page = new AngularTryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
