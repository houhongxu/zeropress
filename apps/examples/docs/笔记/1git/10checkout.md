# checkout

checkout 并不止可以切换 branch。checkout 本质上的功能其实是：签出（ checkout ）指定的 commit

`git checkout branch名` 的本质，其实是把 HEAD 指向指定的 branch，然后签出这个 branch 所对应的 commit 的工作目录。所以同样的，checkout 的目标也可以不是 branch，而直接指定某个 commit

`git checkout 78a4bc`

## checkout 和 reset 的不同

reset 在移动 HEAD 时会带着它所指向的 branch 一起移动，而 checkout 不会。当你用 checkout 指向其他地方的时候，HEAD 和 它所指向的 branch 就自动脱离了

而且，checkout 有一个专门用来只让 HEAD 和 branch 脱离而不移动 HEAD 的用法

`git checkout --detach`
