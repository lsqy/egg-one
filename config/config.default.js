'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '123456';

    config.siteFile = {
        // '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
    };

    config.news = {
        pageSize: 30,
        serverUrl: 'http://hacker-news.firebaseio.com/v0',
    };

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
            '.nj': 'nunjucks',
        },
    };

    config.one = {
        pageSize: 15,
        serverUrl: 'http://v3.wufazhuce.com:8000/api',
    };

    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'qian1993',
            database: 'one',
        },
        app: true,
        agent: false,
    };

    return config;
};