const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
/*const createRule = {
    page: 'number',
    pageSize: 'number'
};*/

class MovieController extends Controller {
  
  constructor(ctx) {
      super(ctx);
  }
  //请求电影列表数据
  async getList() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneMovie.getMovieList({
      id: id
    });
    ctx.status = 200;
  }
  //请求电影详情数据
  async getDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    console.log('id', id);
    ctx.body = await ctx.service.oneMovie.getMovieDetail({
      id: id
    });
    ctx.status = 200;
  }
}

module.exports = MovieController;