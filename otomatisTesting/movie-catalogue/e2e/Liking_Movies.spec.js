Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one movie', ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
  I.amOnPage('/');

  I.seeElement('.movie__title a');
  I.click(locate('.movie__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
});
