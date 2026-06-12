# 命令参考

AI Visual Director 命令入口与路由说明。

## 核心命令

| 命令 | 说明 | 路由 |
|------|------|------|
| `/create` | 一键编排 — 故事→完整视频执行包 | task-router → story-intake → shot-budget → video-director → asset-plan → reference-anchor → project-graph → video-prompt-assembly → consistency-engine → prompt-scorer → auto-repair → final-video-qc → render-package |
| `/source` | 输入源 — Obsidian/Markdown/粘贴/批处理 | sources/ → frontmatter-parser → story-intake |
| `/storyboard` | 分镜 — 全案板、分镜图、镜头设计 | task-router → shot-budget → storyboard → state/shot-state → final-video-qc |
| `/character` | 角色卡 — 三视图/表情/服装武器/DNA | task-router → asset-plan → character → state/variable-registry → state/asset-map → final-video-qc |
| `/scene` | 场景图 — 参考图/全景/空间锁定 | task-router → asset-plan → scene → state/variable-registry → state/asset-map → final-video-qc |
| `/video` | 视频执行包 — 5平台 Prompt + 参考图方案 | task-router → video-prompt-assembly → consistency-engine → prompt-scorer → auto-repair → final-video-qc → render-package |

## 兼容命令

| 命令 | 说明 |
|------|------|
| `/style` | 探索风格、融合或导演方法 |
| `/poster` | 生成独立营销海报 |

## 治理命令

`/lock` · `/commit` · `/unlock` · `/check` · `/repair`

## 重要说明

`/create` 不替代三大核心资产入口。它只在一键总编排中按档位调用三条核心资产子链：

- `/storyboard` 核心资产：故事板
- `/character` 核心资产：角色卡
- `/scene` 核心资产：场景图

`/create` 不替代 `/storyboard`、`/character`、`/scene`。
