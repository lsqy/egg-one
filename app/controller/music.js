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
  //请求音乐列表数据
  async getList() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneMusic.getMusicList({
      id: id
    });
    ctx.status = 200;
  }
  //请求音乐详情数据
  async getDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneMusic.getMusicdetail({
      id: id
    });
    // const musicDetail = ctx.body.data;
    // const result = await this.app.mysql.insert('posts',  musicDetail);
    const result = await this.app.mysql.insert('posts', { title: 'Hello World' }); 
    ctx.status = 200;
  }
}

module.exports = MusicController;