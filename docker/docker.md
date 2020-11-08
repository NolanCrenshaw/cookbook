# Docker Guide
---
Contents:
- [Install Docker ~ *(Windows 10 / WSL2)*](#install)
- [Docker CLI](#docker-cli)
- [Dockerfile](#dockerfile)
- [Docker-compose](#docker-compose)

External Links:
- [*~~ The Documentation ~~*](https://docs.docker.com/reference/)
- [Microsoft Docker WSL2 Start Guide](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)


---
### Install
~ *This guide is intended to describe using Docker in a Windows 10 environment, integerating WSL2.*

~~ [See Microsoft's Start Guide](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers) ~~

**Requirements:**
    - Confirm WSL2 is up and running.
    - [Download and install Linux Kernal update package](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)

**Steps:**
    - [Install Docker Desktop](https://docs.docker.com/docker-for-windows/wsl/#download)
    - Ensure WSL2 engine is selected under ```SETTINGS / GENERAL``` in Docker Desktop.
    - Select Linux Distros to include under ```SETTINGS / RESOURCES / WSL INTEGRATION```.
    - Confirm installation is working by running ```docker run hello-world```.

---
### Docker CLI
---
### Dockerfile
---
### Docker-Compose
