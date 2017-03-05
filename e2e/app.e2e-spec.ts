import { ReduxTalkPage } from './app.po';

describe('redux-talk App', function() {
  let page: ReduxTalkPage;

  beforeEach(() => {
    page = new ReduxTalkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
