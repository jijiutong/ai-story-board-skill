# AI Visual Director — 全命令端到端测试报告

**日期**: 2026-06-11  
**分支**: `codex/test-runtime-suite` (commit `8a2a2d0`)  
**测试范围**: V2.3-V2.5 全部命令入口 + 高级功能  
**测试故事**: 《神陨》— 苍穹碎裂，少年弑神

---

## 测试结果总览

| # | 测试项 | 类型 | 结果 | 关键验证点 |
|---|--------|------|------|-----------|
| 1 | `/create` 全链路 | 核心入口 | ✅ | 15s自动拆段 + 平台配置读取 + 子路由调用 |
| 2 | `/character` 角色卡 | 核心入口 | ✅ | 子路由→character-sheet + 20字段DNA + asset-map写入 |
| 3 | `/scene` 场景图 | 核心入口 | ✅ | 子路由→scene-card + 固定元素声明 + 光照材质 |
| 4 | `/storyboard` 全案板 LS1 | 核心入口 | ✅ | 影视工业全案板 + 编号全填充 + 色彩脚本+情绪曲线 |
| 5 | `/storyboard` 分镜图 LS6 | 核心入口 | ✅ | 横幅时间轴 + 7镜连续性 + 技术参数栏 |
| 6 | `/video` 视频 Prompt | 核心入口 | ✅ | 4层结构 + Seedance 15s + asset-map动态映射 |
| 7 | `/poster` 电影海报 | 兼容入口 | ✅ | 2:3竖版 + tagline/片名排版 + 角色锚点 |
| 8 | `/style` 风格浏览 | 兼容入口 | ✅ | 53种完整目录 + 融合模式 + 导演入口 |
| 9 | 增量更新 | 高级功能 | ✅ | project-graph查询→affected_shots + 限定一致性重评1/5维 |
| 10 | 换风格 (style_memory) | 高级功能 | ✅ | 解锁→读取imitation/zhang-yimou.md→重决策→重锁定 |
| 11 | 保存/加载/删除项目 | 项目管理 | ✅ | 9文件持久化 + platform-config保留 + style_memory跨会话 |
| 12 | 一键全平台 | 多平台 | ✅ | GPT/MJ/SDXL/Seedance/Runway/可灵 5平台 + 共享链1次 |
| 13 | 继续下一段/续写 | 续写 | ✅ | J-Cut衔接 + 尾帧→首帧 + 5硬锁+5软锁+8歧义 |
| 14 | Mood Slider | 高级功能 | ✅ | 24维调参 + 叠加识别 |
| 15 | Prompt 压缩 | 工具 | ✅ | SD/MJ 平台适配压缩 |
| 16 | Project Graph 自检 | 基础设施 | ✅ | 双向索引 + 4查询原语 |
| 17 | 风格迁移 (维伦纽瓦) | 高级功能 | ✅ | imitation/villeneuve.md 9维度读取 |
| 18 | 多版本 A/B/C | 高级功能 | ✅ | 3版本同批次产出 + state/按版本标注 |

**通过率: 18/18 = 100%**

---

## 新发现 Bug

| Bug # | 描述 | 严重度 | 状态 |
|-------|------|--------|------|
| #3 | 图像平台语言配置缺失 — platform-config.md 第五节无语言字段 | 🟡 中 | ✅ 已修复 — 第五节新增10平台语言表 |
| #4 | **一致性触达决策引擎缺失** — 7种场景+8种角色一致性方法无触发 | 🔴 架构级 | ✅ 已修复 — `engines/consistency-trigger.md` |

---

## Bug 修复记录

| Bug # | 描述 | 严重度 | 修复 Commit | 涉及文件 |
|-------|------|--------|------------|---------|
| #1 | 平台参数硬编码 — 60s prompt 生成给 Seedance(最大15s) | 🔴 致命 | `dd15630` | `state/platform-config.md`(新), `engines/shot-budget.md`, `engines/reference-anchor.md`, `engines/asset-plan.md`, `engines/README.md`, `state/README.md` |
| #2 | `/create` 绕过子路由模板 — video-prompt-assembly 直接生成角色/场景/分镜 prompt | 🔴 致命 | `8a2a2d0` | `engines/video-prompt-assembly.md`, `engines/task-router.md`, `rules/final-video-qc.md`, `engines/README.md`, `SKILL.md` |

---

## 环境配置

- **默认图像平台**: GPT Image 2
- **默认视频平台**: Seedance (15s max)
- **自动拆分**: 输入时长 > 15s 自动 `ceil(输入/15)` 段
- **每段资产**: 独立全案板 ×1
- **平台配置**: 统一入口 `state/platform-config.md`

---

## 待办

- [ ] 将 Bug 修复 cherry-pick 到 main 分支
- [ ] Push main 到 remote
- [ ] 关闭 GitHub 上的 stale PR (codex/test-runtime-suite → main)
