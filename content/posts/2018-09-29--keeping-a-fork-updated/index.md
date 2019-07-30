---
title: Keeping a fork up to data
subTitle: Update your fork with latest updates from original repository
category: "programming"
cover: 842ofHC6MaI.jpg
---

After a while, the `upstream` repository may have been updated, and these updates need to be pulled into your `origin` repo. Suppose that you are in your own feature branch and you need to update it with the original repository updates.

You probably have set up a remote that points to the original project.

### 1. Clone your fork:
```bash
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```
### 2. Add remote from original repository in your forked repository: 
```bash
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```

### 3. Updating your fork from original repo to keep up with their changes:
```bash
$ (master) git fetch upstream
$ (master) git merge upstream/master

or using a single command
git pull upstream master
```
