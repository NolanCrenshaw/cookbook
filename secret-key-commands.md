# Generating Secret Keys
------
##### SHA the Date
Uses SHA to hash the current date. Runs base64. Outputs 32 characters.
```
$ date +%s | sha256sum | base64 | head -c 32 ; echo
```
------
##### Random with Filter
Uses built-in '/dev/urandom'. Filters into common characters. Outputs 32 characters.
```
$ < /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c${1:-32};echo;
```
------
##### Openssl
Uses openssl's random function. Not always installed on machines.
*(note: seems to produce 44 character keys)*
```
$ openssl rand -base64 32
```
------
