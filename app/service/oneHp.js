'use strict';

const Service = require('egg').Service;

/**
 * OneHp Api Service
 */
class OneHp extends Service {
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

  // 获取电影列表
  async getHpList(params) {
    const { id } = params;
    const url = `channel/hp/more/${id}`;
    console.log(url);
    const result = await this.request(url, {
    });
    return result;
  }

  // 获取电影详情
  async getHpDetail(params) {
    const { id } = params;
    const url = `movie/${id}/story/1/0`;
    console.log(url);
    const result = await this.request(url, {
    });
    return result;
  }  
}

module.exports = OneHp;