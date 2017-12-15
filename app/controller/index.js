const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
/*const createRule = {
    page: 'number',
    pageSize: 'number'
};*/

class IndexController extends Controller {
  
  constructor(ctx) {
      super(ctx);
  }
  //请求首页列表数据
  async getList() {
    const { ctx } = this;
    ctx.body = await ctx.service.oneList.getOneListItem({
    });
    ctx.status = 200;
  }
}

module.exports = IndexController;