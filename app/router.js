'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/one/music', controller.one.musicList);

  //测试restfulapi
  router.resources('music', '/api/v1/restful/music', controller.restful.music);
  router.resources('musicDetail', '/api/v1/restful/musicDetail', controller.restful.musicDetail);
  router.resources('idlist', '/api/v1/restful/onelist/idlist', controller.restful.idList);


  // router.get('/api/v1/musicList/:id',  )
  // router.get('/api/v1/onelist/:id/:index', controller.oneList.show);
  // 请求首页图文接口
  router.get('/api/v1/onelist', controller.index.getList);
  // 请求音乐列表
  router.get('/api/v1/music/:id', controller.music.getList);
  // 请求音乐详情
  router.get('/api/v1/music/detail/:id', controller.music.getDetail);
  // 请求评论列表
  router.get('/api/v1/comment/:type/:id/:lastcommentid', controller.comment.getList);
  // 请求阅读列表
  router.get('/api/v1/reading/:id', controller.reading.getList);
  // 请求阅读详情
  // router.get('/api/v1/reading/detail/:id', controller.music.getDetail);
};
