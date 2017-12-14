const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
/*const createRule = {
    page: 'number',
    pageSize: 'number'
};*/

class CommentListController extends Controller {
  
  constructor(ctx) {
      super(ctx);
  }
  //请求首页列表数据
  async getList() {
    const { ctx } = this;
    const { type, id, lastcommentid } = ctx.params;
    ctx.body = await ctx.service.comment.getCommentList({
      type: type,
      id: id,
      lastcommentid: lastcommentid
    });
    ctx.status = 200;
  }
}

module.exports = CommentListController;