---
title: Environment variables
subTitle: Setting environment variables on different operating systems
category: "programming"
cover: markus-spiske-706529-unsplash.jpg
---

Setting an environment variable is quite a common need by applications these days. It's a safe way to store some ids without exposing them publicly.

Here's how you do it on different operating systems.

---
#### Setting environment variable on Linux
To set variable only for current shell:
```bash
$ VARNAME="my value"  
```

To set it for current shell and all processes started from current shell:

```bash
$ export VARNAME="my value"  
```
To set it permanently for all future bash sessions add such line to your .bashrc file in your $HOME directory.

To set it permanently, and system wide (all users, all processes) add set variable in /etc/environment:

```shell
sudo -H gedit /etc/environment
```
This file only accepts variable assignments like:

```bash
VARNAME="my value"
# Do not use the export keyword here
```

---
#### Setting environment variable on Windows