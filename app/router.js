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
  router.resources('music', '/api/v1/music', controller.music);
  router.resources('musicDetail', '/api/v1/musicDetail', controller.musicDetail);
  router.resources('idlist', '/api/v1/onelist/idlist', controller.idList);
  // router.resources('onelist', '/api/v1/onelist', app.controller.oneList);
  router.get('/api/v1/onelist/:id/:index', controller.oneList.show);
  router.get('/api/v1/comment/:type/:id', controller.oneList.show);
};
