# AI Visual Director 文档中心

这里汇总项目的权威文档入口。建议从任务出发阅读，不必按目录逐个翻找。

## 快速导航

| 我想了解 | 推荐文档 |
|---|---|
| 如何安装、选择命令和完成第一次生成 | [使用手册](./usage.md) |
| 系统能做什么、哪些能力默认开启 | [能力白皮书](./capabilities.md) |
| 引擎、状态、规则和模板如何协作 | [系统架构](./system-architecture.md) |
| Skill 的总路由与执行契约 | [主技能说明](../SKILL.md) |
| 项目首页与完整模块地图 | [项目 README](../README.md) |

## 按工作流阅读

### 使用者

```text
README → 使用手册 → 选择命令 → 生成 → /lock → /commit
```

- [一键生成 `/create`](../sub-skills/create/SKILL.md)
- [角色设计 `/character`](../sub-skills/character/SKILL.md)
- [场景设计 `/scene`](../sub-skills/scene/SKILL.md)
- [分镜设计 `/storyboard`](../sub-skills/storyboard/SKILL.md)
- [视频执行包 `/video`](../sub-skills/video/SKILL.md)

### 系统维护者

```text
系统架构 → 主技能契约 → 引擎地图 → 状态管理 → 规则与模板
```

- [引擎地图](../engines/README.md)
- [状态管理](../state/README.md)
- [模板目录](../templates/README.md)
- [知识库说明](../knowledge/README.md)
- [平台适配](../platforms/README.md)
- [输入源系统](../sources/README.md)

### 长内容与系列项目

```text
输入源 → 项目初始化 → 状态快照 → 连续性检查 → 增量更新
```

- [项目持久化](../projects/README.md)
- [项目管理引擎](../engines/project-manager.md)
- [项目依赖图](../engines/project-graph.md)
- [连续性检查](../rules/continuity-check.md)
- [增量更新](../engines/incremental-update.md)

## 文档原则

- `docs/` 解释如何使用、能力边界和整体架构。
- `SKILL.md` 是总控契约，决定命令路由与治理规则。
- `engines/` 描述决策过程，`rules/` 描述不可违反的约束。
- `templates/` 定义最终输出结构，`state/` 保存已确认的项目事实。
- `knowledge/` 只提供候选素材，不得覆盖锁定状态。

返回 [项目首页](../README.md)。
