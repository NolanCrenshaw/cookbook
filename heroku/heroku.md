# Heroku-CLI Guide

###### Contents:
- [Installation](#install-the-cli)
- [Setup](#initial-setup)
- [Initialize App](#initialize-heroku-app)
- [Rename App](#rename-app)
- [Git Deploy](#git-based-deployment)
###### External Links:
- *[-- The Documentation --](https://devcenter.heroku.com/articles/heroku-cli)*
- *[Authorization Info](https://devcenter.heroku.com/articles/authentication)*
- *[Plug-ins](https://devcenter.heroku.com/articles/authentication)*
-------
### Install the CLI: 
**snap method** *(package auto-updates)*
```
$ sudo snap install --classic heroku
```
**apt-get method**
```
$ curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```
-------
### Initial Setup:
**OAuth version** *(opens a browser window)*
```
$ heroku login
```
**CLI-only version** *(requires 2-factor auth)*
```
$ heroku login -i
--
heroku: Enter your login credentials
Email: me@example.com
Password: ***************
Two-factor code: ********
Logged in as me@heroku.com
```
-------
### Initialize Heroku App
Heroku will associate with a local git repo in project's root directory.
```
$ heroku create {app name}
```
Confirm that the git association exists.
```
$ git remote -v
```
Existing heroku apps can have a git repo added in the command line.
```
$ heroku git:remote -a {app name}
```
-------
### Rename App
Heroku CLI assigns random names when **heroku create** doesn't specify.
```
$ heroku app:rename {new app name}
```

-------
### Git Based Deployment

