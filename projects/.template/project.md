# 项目：<project.title>

- **ID**：<project.id>
- **标题**：<project.title>
- **类型**：<project.genre>
- **时长**：<project.duration>
- **平台**：<project.target_platform>
- **画幅**：<project.aspect_ratio>
- **语言**：<project.language>
- **风格**：<style.visual_style>
- **创建时间**：<project.created_at>
- **最后保存**：<project.saved_at>

## 角色

| 角色 | 身份 | DNA ID | 不可变特征 |
|------|------|--------|-----------|
| <protagonist.name> | 主角 | <protagonist.dna_id> | <protagonist.immutable_features> |
| <antagonist.name> | 对手 | <antagonist.dna_id> | <antagonist.immutable_features> |

## 场景

- **主场景**：<scene.primary.name>（<scene.primary.scene_id>）
- **固定元素**：<scene.primary.fixed_elements>
- **时间/天气**：<scene.time_of_day> / <scene.weather>

## 镜头概览

| 镜号 | 阶段 | 景别 | 运镜 | 角色 | 转场 |
|------|------|------|------|------|------|
| SH1 | <phase> | <shot_size> | <camera> | <characters> | <transition> |
| ... | ... | ... | ... | ... | ... |

## 文件结构

```
projects/<project.id>/
├── project.md        ← 本文件
├── state/            ← 状态文件（variable-registry / asset-map / shot-state / ...）
└── assets/           ← 生成的资产（如有）
```
