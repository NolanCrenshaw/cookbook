# Heroku-CLI Guide

######
- *[-- The Documentation --](https://devcenter.heroku.com/articles/heroku-cli)*
- *[Authorization Info](https://devcenter.heroku.com/articles/authentication)*
- *[Plug-ins](https://devcenter.heroku.com/articles/authentication)*

###### Contents
- [Installation](#install-the-cli)
- [Setup](#initial-setup)
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
