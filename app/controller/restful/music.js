const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
/*const createRule = {
    page: 'number',
    pageSize: 'number'
};*/

class MusicController extends Controller {
  
  constructor(ctx) {
      super(ctx);
  }
  //请求首页列表数据
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.oneMusic.getMusicList({
    });
    ctx.status = 200;
  }

  //分页请求，传入列表中最后一条的id
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneMusic.getMusicList({
        id: id
    });
    ctx.status = 200;
  }
}

module.exports = MusicController;