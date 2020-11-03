# Heroku-CLI Guide
###### Contents:
- [Installation](#install-the-cli)
- [Setup](#initial-setup)
- [Initialize App](#initialize-heroku-app)
- [Rename App](#rename-app)
- [Git Deploy](#git-based-deployment)
- [Docker Deploy](#docker-based-deployment)
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
Heroku will associate with a local git repo in project's root directory. The default behavior is for Heroku to control deployment via Git.
```
$ heroku create {app name}
```
Confirm that the git association exists as a Heroku remote repo. The *"git remote"* is a clone of the repo hosted on the Heroku servers.
```
$ git remote -v
```
Existing heroku apps can have a git repo added in the command line.
```
$ heroku git:remote -a {app name}
```
-------
### Rename App
Heroku CLI assigns random names if **heroku create** doesn't specify.
```
$ heroku app:rename {new app name}
```
To rename the Git remote.
```
$ git remote rename {app name} {new app name}
```
-------
### Git Based Deployment
Command to push the local repo to the Heroku remote repo.
```
$ git push heroku master
```
Git branches outside of master are not reflected on heroku remote repo. But a branch can be pushed to the Heroku remote as a the master.
```
$ git push heroku {branch name}:master
```
Reseting/purging Heroku's remote git repo. **requires plug-in*
```
$ heroku plugins:install heroku-repu
$ heroku repo:reset --app {app name}
```
-------
### Docker Based Deployment
