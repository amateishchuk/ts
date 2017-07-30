import { WeatherApp.AngularPage } from './app.po';

describe('weather-app.angular App', () => {
  let page: WeatherApp.AngularPage;

  beforeEach(() => {
    page = new WeatherApp.AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
