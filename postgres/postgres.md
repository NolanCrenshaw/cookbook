# PostgreSQL Guide
*Contents*
- [Docker CLI](#docker-setup)
- [Docker-Compose](#docker-compose-setup)

*Quick Links*
- [Offical Documentation](https://www.postgresql.org/docs/current/index.html)
---
### Docker CLI Setup
*~~ This method does not allow data to persist ~~*

*```--name``` adds name to docker container*
*```--rm``` removes container and volumes on exit*
*```-p``` assigns ports to expose {HOST:CONTAINER} (postgres defaults to port 5432 internally)*
*```-e``` assigns environment variable*
*```-d``` starts container in detached mode*

*Command to create container with postgres as image:*
```bash
$ docker run --name {CONTAINER_NAME} --rm -p 5400:5432 -e POSTGRES_PASSWORD={PASSWORD} -e POSTGRES_USER={USERNAME} -d postgres
```
*```-h``` points to host*
*```-p``` points to port*
*```-U``` accessing as user*
*Access container with ```psql``` command:*
```bash
$ psql -h localhost -p 5400 -U {USERNAME} postgres
```
---
### Docker-Compose Setup
**Create File Structure**
*Setup requires volume creation*
```bash
$ mkdir -p docker-postgres/data && cd docker-postgres
$ touch docker-compose.yml
```
**Copy** ```postgres.conf``` **into Root Directory**
*```-i``` runs container in interactive mode*
```bash
$ docker run -i --rm postgres cat /usr/share/postgresql/postgresql.conf.sample > postgres.conf
```
