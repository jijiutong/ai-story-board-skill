---
name: ai-story-board
description: Use when generating storyboards, visual development boards, character sheets, scene cards, posters, manga pages, mood boards, or any cinematic visual content from stories, novel excerpts, script fragments, or manga concepts. Triggers on requests like "storyboard this", "create a character sheet", "make a visual board", "漫剧", "分镜", "故事板", "视觉开发板". Supports 16+ visual styles and 10 output formats.
---

# AI Story Board Skill

AI 电视剧 / 漫剧 / 短剧 / 电影故事板生成技能。将任意故事内容转化为 GPT Image 2 可直接使用的专业提示词。

## 工作流

```
用户输入故事 → AI 提取信息 → 展示风格+格式选项 → 用户选编号 → 输出完整 prompt
```

### Step 1: 提取故事信息

从用户输入中自动提取：

| 字段 | 说明 |
|------|------|
| 片名 | 2-8 字短标题 |
| 类型 | 动作/悬疑/科幻/玄幻/都市/爱情/犯罪/战争/恐怖/喜剧/etc. |
| 时长 | 默认 15s，复杂用 30s |
| 核心冲突 | 一句话：谁对抗谁，或主角要突破什么 |
| 主角 | 姓名/身份/服装/武器道具/面部特征/情绪底色 |
| 对手 | 姓名/身份/服装/武器能力/压迫感来源 |
| 世界观场景 | 地点/时代/天气/环境材质/危险元素 |
| 情绪曲线 | 平静→对峙→爆发→余韵 |
| 镜头数 | 短篇 7 镜，史诗 13 镜 |
| 主色调 | 2-4 个颜色 |

**缺字段自动补全**：没角色名就给起电影感名字；没明确类型就按冲突强度推断。

### Step 2: 展示选项

每次向用户展示两组可选列表：

**视觉风格（16+种）** — 见 `references/styles.md` 获取每种风格的详细说明、适用题材、配色方案、氛围关键词。

**输出格式（10种）** — 见 `references/formats.md` 获取每种格式的模板结构。

展示格式：

```
【视觉风格】选一个编号：
  1. 黑金动作分镜板    2. 科幻机甲全案板    3. 东方玄幻开发板    4. 悬疑惊悚导演板
  5. 都市情绪电影板    6. 青春校园物语      7. 废土末日生存      8. 宫廷权谋华服
  9. 蒸汽朋克机械     10. 童话绘本世界     11. 二次元动漫风    12. 写实摄影纪实
 13. 复古胶片电影     14. 北欧极简神话     15. 拉美魔幻现实    16. 赛博佛学朋克
 17. 中世纪史诗战争   18. 非洲部落原始     19. 新中式国潮      20. 暗黑哥特宗教

【输出格式】选一个或多个编号：
  1. 全案板（完整）    2. 快速故事板        3. 角色设定卡       4. 场景概念卡
  5. 海报             6. 漫画分镜页        7. 情绪板          8. 四格漫画
  9. 三视图设定卡    10. 关键帧序列
```

### Step 3: 生成 Prompt

根据用户选择的风格编号 + 格式编号，从对应模板文件生成完整 prompt。

**模板路由表：**

| 格式 | 模板文件 | 说明 |
|------|----------|------|
| 全案板（完整） | `templates/full-board.md` | 电影级视觉开发全案，含角色/场景/分镜/技术参数 |
| 快速故事板 | `templates/quick-board.md` | 精简版，快速出图 |
| 角色设定卡 | `templates/character-sheet.md` | 角色三视图+面部+道具特写 |
| 场景概念卡 | `templates/scene-card.md` | 单一场景概念图+氛围 |
| 海报 | `templates/poster.md` | 电影海报/宣传海报 |
| 漫画分镜页 | `templates/manga-page.md` | 漫画式分镜格 |
| 情绪板 | `templates/mood-board.md` | 氛围/色彩/材质参考 |
| 四格漫画 | `templates/manga-page.md`（四格模式） | 四格叙事 |
| 三视图设定卡 | `templates/character-sheet.md`（三视图模式） | 纯三视图无面部 |
| 关键帧序列 | `templates/quick-board.md`（关键帧模式） | 关键动作帧序列 |

### Step 4: 输出

输出 **一条可直接复制的 prompt**，放在代码块中。不附加多余解释，除非用户要求。

## 参考文件

| 文件 | 内容 |
|------|------|
| `references/styles.md` | 16+种视觉风格详细说明 |
| `references/formats.md` | 10种输出格式说明 |
| `references/camera.md` | 镜头语言：景别/运镜/焦段/画幅 |
| `references/lighting.md` | 灯光类型/色彩搭配/色卡 |
| `references/composition.md` | 构图法则/版式/排版 |
| `references/quality.md` | 质量约束/负面提示词 |

## 执行规则

- **先提取，再生成** — 不要跳过故事信息提取
- **每个括号都填实** — 不写"电影感""高级感"等空泛词
- **风格不混** — 一次只选一种视觉风格
- **用户说"更燃"** → 强化动作/光效/爆点/镜头推进
- **用户说"更贵"** → 强化摄影参数/材质/色卡/版式秩序
- **用户说"小红书竖版"** → 画幅改 9:16，结构不变
- **用户说"批量生成"** → 按多个格式编号逐个输出，每个 prompt 独立代码块

## 负面清单（所有输出必须包含）

```
no watermark, no logo, no random large text, no garbled Chinese, no broken faces,
no duplicated limbs, no messy panels, no low-quality collage, no text overlay,
no speech bubbles (unless manga format), no cartoon style (unless specified),
no flat illustration, no marketing poster style
```
