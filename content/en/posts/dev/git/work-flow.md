---
title: "Work Flow"
date: 2024-01-31T16:23:28+02:00
---

# Installation

## windows users

<https://git-scm.com/download/win>

## mac users

download the installer
<https://sourceforge.net/projects/git-osx-installer/>

or install homebrew and run:

```sh
brew install git
```

## Is git installed already?

```sh
git -v
```

--------------------

# Start Using Git

## Config name and email

```sh
git config --global user.name 'Nisim Cohen'
git config --global user.email 'nisim@gmail.com'
```

there are two options:

* initialize
* clone

## initialize

```sh
git init
```

## clone

```sh
git clone remote_repo_url
```

## check your repo's status

```sh
git status
```

-----------------

# simple work flow

## First commit


1. create file *index.html* in the git repo.
2. run

   ```sh
   git add index.html
   ```

3. run

   ```sh
   git commit -m "my first commit"
   ```

## Second commit

1. create file *style.css* in the git repo.
2. run

   ```sh
   git add style.css
   ```

3. run

   ```sh
   git commit -m "styling my website"
   ```

## Third commit

1. add to *index.html*

   ```html
   <h1>avi biter</h1>
   ```

2. run

   ```sh
   git add index.html
   ```

3. run

   ```sh
   git commit -m "avi biter heading"
   ```

## Fourth commit

1. add to *index.html*

   ```html
   <h2>Shimi Tavori</h2>
   ```

2. add to *style.css*

   ```css
   h1, h2 { text-align: center }
   ```

3. run

   ```sh
   git add index.html style.css
   ```

4. run

   ```sh
   git commit -m "shimi and center headings"
   ```
