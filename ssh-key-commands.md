# SSH Key Commands
- using the 'ssh-keygen' package

##### List existing SSH keys
```
$ ls -al ~/.ssh
```

##### Generate new SSH key
```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
The '-t' flag sets the algorithm type.
The '-b' flag sets the key byte length.
The '-C' tag will apply a string as a key's label.
Leave options blank for defaults.

##### Add new key to the ssh-agent
```
$ eval "$(ssh-agent -s)"
```
```
$ ssh-add ~/.ssh/id_rsa
```

##### Copy key to clipboard with xclip
*if not already installed*
```
$ sudo apt-get install xclip
```
```
$ xclip -selection clipboard < ~/.ssh/id_rsa.pub
```
