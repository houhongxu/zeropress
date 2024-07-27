# merge

pull 的内部操作其实是把远程仓库取到本地后（使用的是 fetch），再用一次 merge 来把远端仓库的新 commits 合并到本地

即`git fetch` `git merge origin/HEAD`

fetch 会更新远程仓库的本地镜像 origin/HEAD 和 origin/master
随后 merge 针对没有冲突的 commit 会进行 fast-forward 快速前移来移动到最新 commit

## 含义

从目标 commit 和当前 commit （即 HEAD 所指向的 commit）分叉的位置起，把目标 commit 的路径上的所有 commit 的内容一并应用到当前 commit，然后自动生成一个新的 commit

## 冲突

自动合并能力：

- 不同文件，A 文件，B 文件
- 同一文件不同行，第 1 行，第 2 行
