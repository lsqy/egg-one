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

  router.get('/api/v1/music/:id', controller.music.getList);
  // 请求评论列表
  router.get('/api/v1/comment/:type/:id/:lastcommentid', controller.comment.getList);
};
