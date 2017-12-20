'use strict';

const Service = require('egg').Service;

/**
 * OneMovie Api Service
 */
class OneMovie extends Service {
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
  async getMovieList(params) {
    const { id } = params;
    const url = `channel/movie/more/${id}`;
    console.log(url);
    const result = await this.request(url, {
    });
    return result;
  }

  // 获取电影详情
  async getMovieDetail(params) {
    const { id } = params;
    const url = `movie/${id}/story/1/0`;
    const photoUrl = `movie/detail/${id}`;
    console.log(url);
    const result = await this.request(url, {
    });
    const photoList = await this.request(photoUrl, {});
    console.log('result',result);
    if(result && result.data && result.data.data) {
      photoList.data.photo.unshift(photoList.data.detailcover);
      result.data.data[0].photoList = photoList.data.photo;
    }
    return result;
  }  
}

module.exports = OneMovie;