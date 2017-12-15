'use strict';

const Service = require('egg').Service;

/**
 * OneList Api Service
 */
class OneList extends Service {
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

  // 获取图文列表索引
  async getOneListIndex() {
    let url = 'onelist/idlist';
    const result = await this.request(url, {
    });
    return result;
  }

  // 根据索引获取图文详情
  async getOneListItem(params) {
    const ListIndex = await this.getOneListIndex();
    let id = '';
    if(ListIndex && ListIndex.data) {
      id = ListIndex.data[0];
    }
    let url = `onelist/${id}/0`;
    const result = await this.request(url, {
    });
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

module.exports = OneList;