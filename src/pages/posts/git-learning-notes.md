---
layout: "./../../layouts/post.layout.astro"
title: "Git Learning Notes"
date: "2024-02-10 07:06:00"
description: "Embark on a journey to master Git with comprehensive learning notes on Dav/Devs tech blog. Explore crucial links for understanding Git's core concepts, typical actions, and essential code snippets. From initializing repositories to advanced commands and Git config aliases, this article serves as a valuable guide for both beginners and seasoned developers."
keywords: "Git Learning, Git Tutorial, Git Commands, Git Configuration, Git Important Links, Git Crash Course, Code School Git, Git Documentation, Git Code Snippets, Git Typical Actions, Git Config Aliases, Version Control, Dav/Devs Tech Blog, Git Mastery, Git Basics, Git Remote, Git Push, Git Pull, Git Diff, Git Stash, Git Merge, Git Reset, Git Commit, Git Branch, Git Log."
images: [{ url: "git-learning-notes-0001.png", alt: "Git Learning Notes" }]
---

## 1. Important Links

| Website                 | Link/URL                                                                       |
| ----------------------- | ------------------------------------------------------------------------------ |
| SVN vs Git              | https://help.github.com/articles/what-are-the-differences-between-svn-and-git/ |
| Learn Git (Code School) | https://www.codeschool.com/courses/try-git                                     |
| Documenation            | https://git-scm.com/documentation                                              |
| Git Crash Course        | http://git.or.cz/course/svn.html                                               |

## 2. Typical Actions

![Typical Git Actions](/screenshots/posts/git-learning-notes-0002.png)

## 3. Code Snippets

### 3.1. Git Commands

| Commands                                                 | Effect                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git init`                                               | Initializes a Git repository.                                                                                                                                                                                                                                                                                                                                                          |
| `git status`                                             | Checks the status of files within a Git repository.                                                                                                                                                                                                                                                                                                                                    |
| `git add <filename>`                                     | Adds an unversioned file to the staging area.                                                                                                                                                                                                                                                                                                                                          |
| `git add ‘*.<file-extension>’`                           | Adds all files with the specified extension to the staging area.                                                                                                                                                                                                                                                                                                                       |
| `git reset <filename>`                                   | Removes a file or files from the staging area.                                                                                                                                                                                                                                                                                                                                         |
| `git log`                                                | ?                                                                                                                                                                                                                                                                                                                                                                                      |
| `git remote add <main foldername> <repository location>` | Adds all files in the staging area into a folder onto a specified remote server.                                                                                                                                                                                                                                                                                                       |
| `git push`                                               | Pushes all files in the staging area into the repository. Similar to SVN commit.                                                                                                                                                                                                                                                                                                       |
| `git push -u origin master`                              | The push command tells Git where to put our commits when we're ready, and boy we're ready. So let's push our local changes to our origin repo (on GitHub). The name of our remote is origin and the default local branch name is master. The -u tells Git to remember the parameters, so that next time we can simply run git push and Git will know what to do. Go ahead and push it! |
| `git pull`                                               | Update local files with those from the repository.                                                                                                                                                                                                                                                                                                                                     |
| `git diff`                                               | Compare between conflicted files.                                                                                                                                                                                                                                                                                                                                                      |

## 4. Git Config Aliases

```bash
co = checkout
ci = commit
st = status
br = branch
br-r = "branch -r"
br-d = "branch -d"
br-dd = "branch -D"
hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
type = cat-file -t
dump = cat-file -p
branch-name = "!git rev-parse --abbrev-ref HEAD"
publish = "!git push -u origin $(git branch-name)"
unpublish = "!git push origin :$(git branch-name)"
diff-sta = "!git diff --name-status"
diff-stg = "!git diff --name-status --cached"
a-a = "!git add -A"
set-gli	= "!git config --global --list"
set-ge = "!git config --global --edit"
ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
l-ol = "!git log --pretty=oneline"
l-ol2 = "!git log --pretty=oneline -2"
l-2 = "!git log -2"
l-s = "!git log --stat"
l-s2 = "!git log --stat -2"
m-t = "!git merge -Xtheirs"
m-o = "!git merge -Xours"
r-h = "!git reset --hard $(git branch-name)"
r-m = "!git reset --mixed $(git branch-name)"
r-s = "!git reset --soft $(git branch-name)"
r-Hh = "!git reset --hard HEAD"
r-Hm = "!git reset --mixed HEAD"
r-Hs = "!git reset --soft HEAD"
ci-m = "!git commit -m"
la = "!git config -l | grep alias | cut -c 7-"
st = stash
st-l = stash list
st-s = stash show
st-a = stash apply
st-d = stash drop
st-c = stash clear
```
