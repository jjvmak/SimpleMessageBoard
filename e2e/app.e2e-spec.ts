import { TesipaskaPage } from './app.po';

describe('tesipaska App', () => {
  let page: TesipaskaPage;

  beforeEach(() => {
    page = new TesipaskaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
