---
title: Environment variables
subTitle: Setting environment variables on different operating systems
category: "programming"
cover: 8763301796_10666b35f4_o.jpg
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

##### Set environment variables from command prompt
You can set environment variables from Windows Command Prompt using the set or setx command. The set command only sets the environment variable for the current session. The setx command sets it permanently, but not for the current session. If you want to set it for current as well as future sessions, use setx and set.

```powershell
C:\>setx path1 "C:\Folder1;%path1%"

SUCCESS: Specified value was saved.

C:\>set path1=C:\Folder1;%path1%	
```

<code>setx.exe</code> does not set the environment variable in the current command prompt, but it will be available in subsequent command prompts.

Note:
By default setx sets the variable in the local environment (Under HKEY_Current_User Registry key). If you want to set the system variable (Under HKEY_LOCAL_MACHINE registry key), use the flag /m. Start the command prompt as administrator on Windows 10, right click on Start menu and select Command Prompt(Admin). 

```powershell
C:\>setx /m path1 "C:\Folder1;%path1%"
```

The maximum value allowed for a enviroment variable is 1024 characters. So if your variable is long and you try to append to it with setx, you may get a truncated result. 

```powershell
C:\>setx path "C:\Folder1;%path%"

WARNING: The data being saved is truncated to 1024 characters.

SUCCESS: Specified value was saved.
```