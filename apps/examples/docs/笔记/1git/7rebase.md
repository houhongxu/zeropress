# rebase

！禁止从 master 向其他 branch 执行 rebase

将分支 fix 的新 commit 都放在主分支 master 的最新 commit 后面

应该在分支 fix 没有 push 到远程仓库时使用较好，如果已经 push 见以下情况：

分支 master 分支 fix 都进行了新的开发并 push

分支 master 有了新 commit-m

分支 fix 也有了新 commit-f

在分支 fix`git rebase master`会重新 提取 commit-f 并变基到当前 maser，会处于更改后未 push 的状态

此时 fix 在 master 的最新 commit-m 处，origin/fix 在 fix 最新 commit-f 处

然后`git checkout master` `git merge fix`可以完成 master 的 rebase 更新，通过 merge 的 fast-forward 情况

但是如果 `git checkout fix` 再 `git push` 会发现有两次 commit-f 提交并产生了 merge

因为 fix 和 origin/fix 存在冲突，fix 领先于 origin/fix，领先的就是变基操作复制的 commit-f

因为 rebase 提取的 commit 的 hash 和之前的 commit 不同，而且对同一个文件进行了更新，所以需要 merge

解决方案是对 fix 直接`git push -f`覆盖 fix 分支

由于是个人分支 fix 所以 -f 影响不大

但是尽量避免这种操作，仅在分支不需要继续开发或者未 push 时进行 rebase

## rebase -i

常用于整理与合并 commit

比如需要合并三个 commit 为一个，合并 432
commit-1
commit-2
commit-3
commit-4

则`git rebase -i commit-1`
对 commit-4、commit-3、commit-2 进行处理
pick 为保留，squash 为合并入前一个 commit

同时可以调整顺序

pick commit-1
pick commit-2
pick commit-4
s commit-3

合并后因为本地与远程记录不同，提交同样需要`git push -f`
