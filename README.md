Heroku App Quota
============

Get free Heroku app quota.

### Usage ###

Instantiate class with Heroku account credentials and call quota method.

~~~ javascript
let heroku = new HerokuQuota(email,password);
heroku.quota(appname,function (err,quota) {
  console.log(quota);
});
~~~

### Response ###

Important fields:

 - allow_until : app work until [Date]
 - deny_until : app sleep until [Date]

~~~json
{ "allow_until": "2016-03-09T15:17:16Z",
  "deny_until": null,
  "awake": false,
  "usage":
   [ { "started_at": "2016-03-08T20:28:53Z",
       "stopped_at": "2016-03-08T20:28:53Z" },
     { "started_at": "2016-03-08T20:29:04Z",
       "stopped_at": "2016-03-08T21:25:52Z" },
     { "started_at": "2016-03-08T21:51:12Z",
       "stopped_at": "2016-03-08T22:26:13Z" },
     { "started_at": "2016-03-08T22:49:02Z",
       "stopped_at": "2016-03-08T23:40:00Z" }
    ]
}
~~~

### Test ###

Set email, password and herokuapp name.
Run in terminal:

1.
~~~javascript
npm install
~~~
2.
~~~javascript
npm start
~~~
