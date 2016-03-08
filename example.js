// Created by Isra San Jose Gonzalez
// 08/03/2016 @isanjosgon

'use strict'

const moment = require('moment');
const HerokuQuota = require('./heroku-quota');

const email = '';
const password = '';
const appname = '';

let heroku = new HerokuQuota(email,password);
heroku.quota(appname,function (err,quota) {
  let nowutc = moment.utc();
  if (quota.allow_until) {
    let timeleft = moment.utc(quota.allow_until);
    console.log('app ' + appname + ' sleep ' + timeleft.from(nowutc));
  } else if (quota.deny_until) {
    let timeleft = moment.utc(quota.deny_until);
    console.log('app ' + appname + ' be available ' + timeleft.from(nowutc));
  }
});
