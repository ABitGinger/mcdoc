---
title: 常用插件命令指南
date: 2024-06-29
---

>! 配合[常用插件操作指南](operations.html)食用
> 一些功能并不是命令的形式，但可能需要先用命令开启

* 以下是一些常用命令，使用可以带来<big>**很大的**</big>便利。
* 你并不需要全部记忆它们，需要时可以到这里来查询。
* 建议特别收藏本页。

> Tips: **“帮助”类指令**可以帮你不退出游戏就能快速找到需要的指令，不要轻视它们哦

## VeinMiner 连锁挖掘
一键砍树挖矿！

|常用操作|需要权限|指令用法|括号内替换内容|
|---|---|---|---|
|切换连锁模式|veinminer.pattern.*|/veinminer pattern [pattern]|[pattern]: default, tunnel（隧道式）, staircase_up（向上楼梯）, staircase_down（向下楼梯）|
|切换对某工具是否启用连锁|veinminer.command.*|/veinminer toggle [tool]|[tool]: 工具名称|
|添加连锁的方块|veinminer.command.*|/blocklist [category] add [block]|[category]: 类别, [block]: 方块ID|
|移除连锁的方块|veinminer.command.*|/blocklist [category] remove [block]|[category]: 类别, [block]: 方块ID|
|列出启用连锁的方块|veinminer.command.*|/blocklist [category] list|[category]: 类别|
|添加连锁的工具|veinminer.command.*|/toollist [category] add [item]|[category]: 类别, [item]: 物品ID|
|移除连锁的工具|veinminer.command.*|/toollist [category] remove [item]|[category]: 类别, [item]: 物品ID|
|列出启用连锁的工具列表|veinminer.command.*|/toollist [category] list|[category]: 类别|
|重载配置|veinminer.command.*|/veinminer reload|无|

[点击阅读完整原文档](https://www.spigotmc.org/resources/veinminer.12038/)

## ChestSort 一键整理
一键箱子、背包整理！

| 常用操作            | 需要权限              | 指令用法                                      |
|-------------------|---------------------|-------------------------------------------|
| 显示/sort命令的帮助 | chestsort.use       | /sort help 或 /chestsort help                |
| 显示/invsort命令的帮助 | chestsort.use.inventory | /invsort help 或 /isort help                 |
| 打开自动整理界面   | chestsort.use       | /sort 或 /chestsort                          |
|打开快捷键界面|chestsort.use|/sort hotkeys 或 /chestsort hotkeys|
| 整理背包       | chestsort.use.inventory | /invsort 或 /isort                           |
| 整理快捷栏         | chestsort.use.inventory | /invsort hotbar 或 /isort hotbar              |
| 整理物品栏和快捷栏  | chestsort.use.inventory | /invsort all 或 /isort all                   |
| 启用/禁用自动背包整理 | chestsort.use.inventory | /invsort on\off 或 /isort on\off                |
| 启用/禁用自动箱子整理 | chestsort.use       | /sort on\off\toggle 或 /chestsort on\off\toggle |
| 重新加载配置       | chestsort.reload    | /sort reload 或 /chestsort reload            |

[点击阅读完整原文档](https://www.spigotmc.org/resources/chestsort-api.59773/)



## EssentialsX
包含 传送/据点 等各种操作！

| 常用操作| 需要权限 | 指令用法|
|-----|------|--------|
|插件帮助|essentials.help|/help 或 /ehelp|
| 回到死亡前的位置 | essentials.back.ondeath | /back|
| Tp类指令| essentials.tp | /tp 玩家名（直接传送） |
|| essentials.tpahere| /tpahere 玩家名（申请把玩家tp到自己的位置） |
|| essentials.tpaccept | /tpaccept 接受传送（传送自己到别人）|
|| essentials.tpdeny | /tpdeny 拒绝|
|| essentials.tppos| /tppos x y z 传送指定地点 |
| 获取自己的位置| essentials.getpos | /getpos 玩家名（推荐和tppos合用） |
| 设置临时据点| essentials.warp.overwrite| /setwarp 玩家名|
| 删除临时据点| essentials.delwarp | /delwarp 玩家名|
| 传送临时据点| essentials.warp| /warp 玩家名|
| 设置家| essentials.sethome| /sethome 玩家名|
| 删除家| essentials.delhome| /delhome 玩家名|
| 回到家| essentials.home | /home 玩家名 |
| 戴/脱帽子| essentials.hat| /hat wear 手持方块（建筑类）<br>/hat remove |
|传送到重生点| essentials.spawn| /spawn 玩家名 |
| 传送到玩家下线前的位置| essentials.tpoffline | /tpoffline 玩家名|

[点击阅读完整原文档](https://essentialsx.net/wiki/Home.html)（可能需要翻墙）

感谢 @沐雨凝风Mcr 帮忙挑选整理~
