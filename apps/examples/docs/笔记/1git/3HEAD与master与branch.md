# HEAD 与 master 与 branch

## 引用：commit 的快捷方式

commit 都有一串 hash 值，很长：`d6687fee2c0be551e0a4819053ad88ee42dc91b9`
可以用前几位来指定这个 commit：`d6687fe`

引用就是 字符串，如

- commit 的引用：`d6687fee2c0be551e0a4819053ad88ee42dc91b9`
- branch 的引用：`ref: refs/heads/fix`

## HEAD：当前 commit 的引用

一般是指向当前分支，当前分支指向，最新的 commit

## branch 引用：指向分支的最新 commit

branch 是平等的，master 不同但是并不高一级

HEAD 除了可以指向 commit，还可以指向一个 branch，当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit

当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动

当然通过 reset 指令可以让 HEAD 直接指向 commit

## 操作

- 创建：`git branch feature1`
- 切换：`git checkout feature1`
- 创建并切换：`git checkout -b feature1`
- 删除：`git branch -d feature1`

注意：

- HEAD 指向的 branch 不能删除
- 由于 Git 中的 branch 只是一个引用，所以删除 branch 的操作也只会删掉这个引用，并不会删除任何的 commit。不过如果一个 commit 不在任何一个 branch 的「路径」上，或者换句话说，如果没有任何一个 branch 可以回溯到这条 commit，它会被 Git 的回收机制删除掉
- 出于安全考虑，没有被合并到 master 过的 branch 在删除时会失败，但是可以把 -d 改成 -D，小写换成大写，就能删除

## master/main: 默认 branch

主分支，仅创建仓库或者下载仓库时时默认切换到此分支
