// Created by Isra San Jose Gonzalez
// 08/03/2016 @isanjosgon

'use strict'

const request = require('superagent');

class HerokuQuota {
  constructor (username,password) {
    this.username = username;
    this.password = password;
  }
  oauth (callback) {
    request
        .post('https://api.heroku.com/oauth/authorizations')
        .set('Accept','application/vnd.heroku+json; version=3')
        .set('Content-Type','application/json')
        .auth(this.username,this.password)
        .end(function (err,res) {
          callback(err,res.body.access_token.token);
        });
  }
  quota (app,callback) {
    this.oauth(function (err,token) {
      if (err) {
        return callback(err);
      }
      request
        .post('https://api.heroku.com/apps/' + app + '/actions/get-quota')
        .set('Accept','application/vnd.heroku+json; version=3.app-quotas')
        .set('Content-Type','application/json')
        .set('Authorization','Bearer ' + token)
        .end(function (err,res) {
          callback(err,res.body);
        });
    });
  }
}

module.exports = HerokuQuota;
