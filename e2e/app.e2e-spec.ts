import { PhotoFiltersPage } from './app.po';

describe('photo-filters App', () => {
  let page: PhotoFiltersPage;

  beforeEach(() => {
    page = new PhotoFiltersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
