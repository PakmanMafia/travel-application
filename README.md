# Docfile
## Basic CLI Commands and other necessities
### Dependencies
- [git](https://git-scm.com/)
- [Node.JS](https://nodejs.org/en/)
- [Firebase](https://firebase.google.com/)
- [Three.JS](https://threejs.org/)
- [Webpack](https://webpack.js.org/)

### Basic CLI
```sh-session
npm install ...
```
Node.JS is the heart of this project, it is a runtime environment that allows for client/server interaction. Within Node.JS, there is the 'node package manager' or `npm`. All of the dependencies (other than Node.JS) will be installed via node package manager, specifically, using the command above. For example, to install to install [Three.JS](https://threejs.org/) use:
```sh-session
npm install three
```
There is also:
```sh-session
npm ls
npm update
npm search 
npm init
```
Which are all very self-explanatory. Further documentation and guides can be found in the [Node Package Manager Documentation](https://docs.npmjs.com/)

---
#### Git and Github
After installing git, the `git` environment variable should be availble within the terminal. There a few basic commands to know and understand, these are:

```sh-session
git clone ...
```
which allows you to clone an existing repository on a website such as GitHub, to a local repository within a folder. Simply copy and paste the repository link and clone it within the desired file path using the terminal.

```sh-session
git pull
```
This pulls the fules from a given repository in order to keep the local repository 'up to date'. When working with various branches, make sure that you are *not* in the branch that you want to pull using:
```sh-session
git checkout [name of branch]
```
and then use 
```sh-session
git pull [name of branch you want to pull]
```

A few more useful commands are:
```sh-session
git status
```
which allows you to see the status of the files within the working directory.
```sh-session
git checkout [name of branch]
```
This was mentioned above, once again this allows you to move into a branch within the working directory. The `-b [name of branch]` specifier after checkout would allow you to create a new branch and then move into it.
```sh-session
git add [specifier such as: file_name or .]
```
This command allows you to add file(s) to the stage before a commit. The `.` specifier means that all files within the directory (and not in the .gitignore file) will be added to the stage before a commit.
```sh-session
git commit -m [message <string>]
``` 
This command commits a set of files to the branch so that it can be added to the online repository, the `-m` specifier requres a string message, additionally the `-u` specifier sets the new commit as 'upstream' (This should *always* be used when working in your own development branch). 
```sh-session
git push [remote name, default = origin] [branch]
```
This pushes the committed files into the repository. This commands requires a remote, however, when cloning a repositiory a remote named `origin` is automatically created, and should therefore be used. Additionally, a branch should be specified, it goes without saying that you should never push directly into `master` without knowing what you are doing. The proper procedure is to create a pull request within another branch to merge with master.
