'use strict';

const Service = require('egg').Service;

/**
 * OneMusic Api Service
 */
class OneMusic extends Service {
  constructor(ctx) {
    super(ctx);
    this.config = this.ctx.app.config.one;
    this.serverUrl = this.config.serverUrl;
    this.pageSize = this.config.pageSize;
  }

  /**
   * request one api
   * @param {String} api - Api name
   * @param {Object} [opts] - urllib options
   * @return {Promise} response.data
   */
  async request(api, opts) {
    const options = Object.assign({
      dataType: 'json',
      timeout: [ '30s', '30s' ],
    }, opts);
    const result = await this.ctx.curl(`${this.serverUrl}/${api}`, options);
    return result.data;
  }

  // 获取音乐列表
  async getMusicList(params) {
    const { id } = params;
    const url = `channel/music/more/${id}`;
    const result = await this.request(url, {
    });
    return result;
  }

  // 获取音乐详情
  async getMusicdetail(params) {
    const { id } = params;
    let url = `music/detail/${id}`;
    const result = await this.request(url, {
    });
    // this.checkSuccess(result);
    return result;
  }


  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = OneMusic;