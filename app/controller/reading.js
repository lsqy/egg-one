const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
/*const createRule = {
    page: 'number',
    pageSize: 'number'
};*/

class ReadingController extends Controller {
  
  constructor(ctx) {
      super(ctx);
  }
  //请求阅读列表数据
  async getList() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneReading.getReadingList({
      id: id
    });
    ctx.status = 200;
  }
  //请求阅读详情数据
  async getDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneReading.getReadingdetail({
      id: id
    });
    ctx.status = 200;
  }
  //请求问答详情数据
  async getQuestionDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneReading.getQuestiondetail({
      id: id
    });
    ctx.status = 200;
  }
  //请求连载详情数据
  async getSerialDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = await ctx.service.oneReading.getSerialdetail({
      id: id
    });
    ctx.status = 200;
  }
}

module.exports = ReadingController;