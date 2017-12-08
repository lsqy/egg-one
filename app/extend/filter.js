const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.domain = url => url && url.split('/')[2];

exports.getAuthor = desc => desc && desc.split(' ')[0];

exports.formatDate = (date) => {
    date = date.split(' ')[0].split('-').join('/');
    return date;
}