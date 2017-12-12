'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  app.redirect('/','/news');
  // router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/item/:id', controller.news.detail);
  router.get('/news/user/:id', controller.news.user);
  router.get('/one/music', controller.one.musicList);

  //api
  router.resources('music', '/api/v1/music', app.controller.music);
  router.resources('musicDetail', '/api/v1/musicDetail', app.controller.musicDetail);
};
