# reset1

## reset 的本质：移动 HEAD 以及它所指向的 branch

实质行为并不是撤销，而是移动 HEAD ，并且「捎带」上 HEAD 所指向的 branch（如果有的话）

所以同理，reset --hard 不仅可以撤销提交，还可以用来把 HEAD 和 branch 移动到其他的任何地方

`git reset --hard branch2`

直接让 branch1 值与 branch2 相同

## reset --hard：重置工作目录与 add 暂存区

工作目录里的内容会被完全重置为和 HEAD 的新位置相同的内容。

就是你的未 commit 提交的修改会被全部丢弃，但是不影响已经 commit 的内容

## reset --soft：保留工作目录与 add 暂存区

reset --soft 会在重置 HEAD 和 branch 时，保留工作目录和暂存区中的内容，并把重置 HEAD 所带来的新的差异放进暂存区

就是会自动 add 不同的文件并保留之前的 add

## reset 不加参数：保留工作目录，并清空 add 暂存区

默认使用 --mixed 参数

保留工作目录，并且清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 reset 所导致的新的文件差异，都会被放进工作目录

就是撤销 add
