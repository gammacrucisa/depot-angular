import { MyApp1Page } from './app.po';

describe('my-app1 App', () => {
  let page: MyApp1Page;

  beforeEach(() => {
    page = new MyApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
