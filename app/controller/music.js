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
  async getList() {
    const { ctx } = this;
    const { id } = ctx.params;
    console.log(id);
    ctx.body = await ctx.service.oneMusic.getMusicList({
      id: id
    });
    ctx.status = 200;
  }
}

module.exports = MusicController;