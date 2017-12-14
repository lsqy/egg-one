const Controller = require('egg').Controller;

class OneController extends Controller {
  async musicList() {
    const { ctx, app } = this;
    const pageSize = app.config.one.pageSize;
    const page = parseInt(ctx.query.page) || 1;
    const result = await ctx.service.oneMusic.getMusicList(page);
    await ctx.render('one/musicList.tpl', { musicList: result, page, pageSize });
  }
}

module.exports = OneController;