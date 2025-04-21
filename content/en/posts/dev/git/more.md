---
title: "More"
date: 2024-02-04T12:08:10+02:00
---

## difference

difference between working tree and staging area

```sh
git diff
```

difference between staging area and most recent commit

```sh
git diff --staged
```

## undo

undo working tree change

```sh
git restore file1
```

unstage a change in file1

```sh
git reset HEAD file1
```

## log

```sh
git log
```

concise all branches log in a graph

```sh
git log --all --oneline --graph
```

alias for previous command

```sh
alias graph="git log --all --oneline --graph"
```

# Branches

create new branch called *dev*

```sh
git branch dev
```

switch to dev branch

```sh
git switch dev
```

difference between two branches

```sh
git diff master..dev
```

## fast forward merge flow

creating a new branch and switching to it from master

```sh
git branch feature1
git switch feature1
```

first commit

```sh
echo "bamba" > avi.txt
git add .
git commit -m "creating avi file"
```

second commit

```sh
echo "bisli" >> avi.txt
git add .
git commit -m "adding bisli to avi file"
```

merging master to the new branch

```sh
git switch master
git merge feature1
```

previously created branch useless now so let's delete it

```sh
git branch -d feature1
```

## three way merge flow (without conflict)

creating a new branch and switching to it from master

```sh
git branch feature2
git switch feature2
```

first commit

```sh
echo "humus" > shimi.txt
git add .
git commit -m "creating shimi file"
```

second commit

```sh
echo "pita" >> shimi.txt
git add .
git commit -m "adding pita to shimi file"
```

switching to master and making two commits

```sh
git switch master
echo "bibi" > polititions.txt
git add .
git commit -m "creating politions file"
echo "gantz" >> polititions.txt
git add .
git commit -m "adding gantz to politions file"
```

three way merge master to feature2

```sh
git merge feature2
```

previously created branch useless now so let's delete it

```sh
git branch -d feature2
```

## merge flow with conflict

*style.css*

```css
body {
	background-color: black;
	color: white
}
```

create a branch *feature3* and switch to it in one command

```sh
git switch -c feature3 # create
```

new commit for changing background to blue.

```sh
sed -i "s/black/blue/g" style.css # find and replace command
git add .
git commit -m "make background blue"
```

*style.css* in *feature3*

```css {linenos=true,hl_lines=[2]}
body {
	background-color: blue;
	color: white
}
```

new commit for changing
background to green in master branch

```sh
git switch master
sed -i "s/black/green/g" style.css # find and replace command
git add .
git commit -m "make background green"
```

*style.css* in *master*

```css {linenos=true,hl_lines=[2]}
body {
	background-color: green;
	color: white
}
```

merge feature3 to master which will cause a conflict

```sh
git merge feature3
```

git will add a change to *style.css* in the working tree:

```txt {linenos=true,hl_lines=["2-6"]}
body {
<<<<<<<< HEAD
	background-color: green;
========
	background-color: blue;
>>>>>>>> feature3
	color: white
}
```

in you want to undo the merge command
and there by doing so avoid fixing the
conflict you can use the *--abort* option

```sh
git merge --abort
```

if we want to fix the problem we have
to decide how will the problematic portion
will look like and edit the file accordingly.

let's say we decide to keep the background blue
so we will edit the *style.css* file as follow:

```css {linenos=true,hl_lines=[2]}
body {
	background-color: blue;
	color: white
}
```

```sh
git add .
git commit -m "fix background conflict"
```
