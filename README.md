# AI Visual Director

<p align="center">
  <a href="./README.md"><b>中文</b></a> · <a href="./README.en.md">English</a>
</p>

> 从一句故事，自动生成电影级分镜、角色卡、场景概念图、海报和视频 Prompt 的 Claude Code Skill。

---

## 适合谁用

- **AI 漫剧 / 短剧创作者** — 快速出分镜 + 视频 Prompt
- **小说作者** — 把文字片段变成视觉方案
- **AI 绘图 / AI 视频玩家** — 一键出 GPT Image / Midjourney / SD / Seedance Prompt
- **需要角色 & 场景一致性的内容创作者** — 角色卡、三视图、表情表、场景参考图

---

## 功能亮点

- **故事自动拆解**：从一句剧情自动生成分镜、镜头节奏和情绪曲线
- **角色一致性**：角色卡 / 三视图 / 表情表 / 服装武器细节卡 / 角色 DNA 20 字段
- **场景一致性**：全能参考图 / 720° 全景图 / 俯拍图 / 环绕截图 / 文字场景锁定
- **53 种视觉风格**：东方玄幻、都市情绪、水墨、王家卫、吉卜力、黑金动作……
- **视频工作流**：从故事板到 Seedance / Runway / 可灵 / Luma / Pika 视频 Prompt
- **多平台适配**：GPT Image / Midjourney / SDXL / Flux / 通义万相 Prompt 格式自动适配

完整能力矩阵 → [docs/capability-matrix.md](docs/capability-matrix.md)

---

## 安装

### npx 安装（推荐）

```bash
# 全局安装 — 所有项目可用
npx skills add jijiutong/ai-visual-director -g -y

# 项目级安装 — 仅当前项目可用
npx skills add jijiutong/ai-visual-director
```

安装后 Claude Code 自动发现 Skill，在对话中粘贴故事即可使用。

### 手动安装

```bash
git clone https://github.com/jijiutong/ai-visual-director.git
```

将 `SKILL.md` 及 `references/`、`templates/` 放入 `~/.claude/skills/ai-visual-director/`（全局）或 `<项目>/.claude/skills/ai-visual-director/`（项目级）。

子技能单独安装：将 `sub-skills/<name>/SKILL.md` 复制到 `~/.claude/skills/<name>/SKILL.md`。

### 直接用（零安装）

在 Claude Code 中说：

```
帮我做这个故事板：[粘贴你的故事]
```

AI 会根据 SKILL.md 自动生成 Prompt。

---

## 快速开始

### 直接粘贴故事

```
你：修仙世界，两位剑修在剑冢对决，他们曾经是师徒

AI：【智能推荐】
  推荐 1：东方玄幻 + 全案板（师徒关系加成）
  推荐 2：中国水墨 + 海报

你：1

AI：```[完整分镜 Prompt，含师徒构图加成]```
```

### 快捷命令

| 命令 | 功能 | 示例 |
|------|------|------|
| `/storyboard` | 故事板分镜 | `/storyboard 雨夜古寺两名剑客对峙` |
| `/character` | 角色设计 | `/character 白发剑客，黑衣，入魔` |
| `/scene` | 场景设计 | `/scene 雨夜古寺大殿` |
| `/poster` | 电影海报 | `/poster 剑冢对决` |
| `/video` | 视频 Prompt 全流程 | `/video 一剑开天15秒分镜` |
| `/style` | 风格浏览 / 融合 | `/style 王家卫 + 吉卜力` |

快捷模式（在 `/storyboard` 下使用）：

| 指令 | 效果 |
|------|------|
| `/storyboard 一键生成` | 全流程自动，不展示选项 |
| `/storyboard 一键全平台` | 全流程 + 多平台 Prompt 输出 |
| `/storyboard 多版本` | A/B/C 三版本对比 |
| `/storyboard 看全部` | 展示全部风格 + 格式 + 工作流 |

---

## 示例效果

### AI 视频全流程 · 一剑开天

```
你：中国武士一剑开天的15秒分镜

AI：【智能推荐】推荐 1：黑金动作 + 全案板
你：1

→ 角色卡 → 场景参考图 → 分镜图 → 视频 Prompt → 直喂 Seedance 出片
```

### 东方玄幻 · 宿敌对决

```
你：修仙世界，两位剑修对决，曾为师徒

AI：【推荐 1】东方玄幻 + 全案板（师徒关系加成）
    【推荐 2】中国水墨 + 海报

你：1
AI：```[全案板 Prompt，含师徒关系构图/灯光/情绪加成]```
```

### 风格融合 · 王家卫 × 吉卜力

```
你：把雨夜独行换成王家卫+吉卜力的融合风格

AI：```风格融合：60% 王家卫霓虹 + 40% 吉卜力手绘水彩```
```

更多示例 → [docs/examples.md](docs/examples.md)

---

## 视频工作流

```
前置准备（角色卡 + 场景图）→ 全景锁定 → 分镜图 → Prompt → 视频
```

支持 Seedance / Runway / 可灵 / Luma / Pika。

> API 调用需要用户自行配置对应平台 API Key。未配置时，Skill 仍可正常生成各平台 Prompt。

---

## 支持的平台

| 图片平台 | 视频平台 |
|----------|----------|
| GPT Image / DALL·E 3 | Seedance |
| Midjourney v6/v7 | Runway Gen-4 |
| Stable Diffusion XL/3 | 可灵 Kling |
| Flux / Ideogram | Luma Dream Machine |
| 通义万相 | Pika |
| ComfyUI / Recraft |  |

---

## 推荐命令优先级

系统按以下顺序识别用户输入：

```
1. /skill 命令（/storyboard /character /scene /poster /video /style）
2. Obsidian 读取命令
3. API 生成命令
4. 全局调整命令（更燃/更虐/更贵/压缩/评分……）
5. 故事文本（直接粘贴）
6. 继续 / 修改 / 回滚
```

---

## 最佳默认输出策略

| 用户类型 | 策略 |
|---------|------|
| 新用户 | 少选项，直接生成默认方案 |
| 熟练用户 | 追加参数定制 |
| 高级用户 | 说"看全部"展示完整能力 |
| 批量用户 | Obsidian 读取 → 一键批量 |
| 商业用户 | 一键全平台输出 |

> 前台 6 个主命令，后台 50+ 风格、10+ 格式全部自动编排。不要让用户记功能，让用户只输入目标。

---

## 平台对比

| 特性 | GPT Image | Midjourney | Stable Diffusion |
|------|-----------|------------|------------------|
| 中文输入 | ✅ 原生支持 | ⚠️ 需翻译 | ❌ 不支持 |
| 排版能力 | ⭐⭐ 较强 | ⭐ 单图为主 | ⭐ 需 ControlNet |
| 角色一致性 | ⭐⭐ 中 | ⭐⭐⭐ --cref | ⭐⭐⭐ IP-Adapter |
| 适合场景 | 全案板 / 漫画 / 情绪板 | 海报 / 角色 / 场景 | 角色设定卡 / 本地批量 |

---

<details>
<summary>查看完整文件结构</summary>

```
ai-visual-director/
├── SKILL.md                         # 主入口：工作流 + 能力矩阵 + 执行规则
├── README.md                        # 项目文档
├── api-config.template.env          # API Key 配置模板（14 平台）
├── sub-skills/                      # 子技能（6 个独立 /xxx 命令）
│   ├── storyboard/SKILL.md          # /storyboard 故事板
│   ├── character/SKILL.md           # /character 角色设计
│   ├── scene/SKILL.md               # /scene 场景设计
│   ├── poster/SKILL.md              # /poster 电影海报
│   ├── video/SKILL.md               # /video 视频全流程
│   └── style/SKILL.md               # /style 风格浏览器
├── references/                      # 参考文件（51 个）
│   ├── styles.md                    # 50+ 种视觉风格
│   ├── fusion.md                    # 风格融合引擎
│   ├── formats.md                   # 10 种输出格式
│   ├── relationships.md             # 30+ 种角色关系
│   ├── character-dna.md             # 20 字段角色 DNA
│   ├── character-consistency.md     # 人物一致性方法（8 种）
│   ├── scene-consistency.md         # 场景一致性方法（7 种）
│   ├── camera.md                    # 140+ 镜头技术
│   ├── lighting.md                  # 40+ 灯光方案
│   ├── emotion-curve.md             # 12 种情绪曲线模型
│   ├── color-narrative.md           # 60+ 色彩叙事方案
│   ├── mood-slider.md               # Mood 滑块（24 维）
│   ├── act-structure.md             # 12 种叙事结构
│   ├── pacing.md                    # 分镜节奏引擎
│   ├── composition.md               # 35+ 构图法则
│   ├── cultural-accuracy.md         # 文化精准度
│   ├── micro-expressions.md         # 43 种微表情
│   ├── dialogue-rhythm.md           # 台词节奏标注
│   ├── negative-prompt.md           # 负面词自动生成
│   ├── multi-version.md             # 多版本 A/B/C
│   ├── multi-aspect.md              # 多画幅自适应
│   ├── single-shot-edit.md          # 精准单镜修改
│   ├── prompt-scorer.md             # Prompt 质量评分
│   ├── continuity-check.md          # 连续性检查
│   ├── version-control.md           # Prompt 版本管理
│   ├── style-migration.md           # 风格迁移
│   ├── prompt-compression.md        # Prompt 压缩引擎
│   ├── series.md                    # 续集/系列支持
│   ├── batch-chapter.md             # 批量故事处理
│   ├── video-prompt.md              # AI 视频 Prompt
│   ├── video-prompt-assembly.md     # 视频 Prompt 组装
│   ├── video-api-integration.md     # 视频 API 集成
│   ├── api-integration.md           # 图片 API 集成
│   ├── thumbnail-board.md           # 缩略故事板
│   ├── director-notes.md            # 导演阐述
│   ├── audio-reference.md           # 音乐音效参考
│   ├── industry-export.md           # 行业格式导出
│   ├── platform.md                  # 多平台格式适配
│   ├── platform-advanced.md         # 平台深度优化
│   ├── creatures.md                 # 36 种生物设计
│   ├── environments.md              # 36 种环境设计
│   ├── props.md                     # 46 种道具器物
│   ├── weather.md                   # 26 种天气大气
│   ├── body-language.md             # 46 种身体语言
│   ├── materials.md                 # 36 种材质质感
│   ├── animals.md                   # 36 种动物设计
│   ├── historical-eras.md           # 15 种历史时代
│   ├── transitions.md               # 转场与蒙太奇
│   └── sound-design.md              # 声音设计
├── templates/                       # 模板文件（7 个）
│   ├── full-board.md                # 全案板模板
│   ├── quick-board.md               # 快速故事板
│   ├── character-sheet.md           # 角色设定卡
│   ├── scene-card.md                # 场景概念卡
│   ├── poster.md                    # 海报模板
│   ├── manga-page.md                # 漫画分镜页
│   └── mood-board.md                # 情绪板模板
└── docs/
    ├── capability-matrix.md         # 完整能力矩阵
    └── examples.md                  # 更多示例
```
</details>

---

## License

MIT
