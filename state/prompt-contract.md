# 模板契约

每个模板必须声明：**读哪些 state 变量，产出什么**。用于自动校验变量覆盖率和引用一致性。

---

## 模板契约表

> **reads** = 从 state/ 文件读取的变量。**writes** = 本模板产出的 prompt 文本（不直接写入 state/，state/ 由引擎维护）。

### full-board（全案板）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title`, `project.genre`, `project.duration`, `project.aspect_ratio` |
| | `style.visual_style`, `style.emotion_curve`, `style.color_narrative`, `style.layout_full_board` |
| | `characters.protagonist.*`, `characters.antagonist.*`, `characters.supporting` |
| | `scene.primary.*`, `scene.time_of_day`, `scene.weather` |
| | `shot-state` 全量镜头列表 |
| **writes** | `prompt.full_board`（完整全案板 prompt 文本） |

### quick-board（快速故事板 / 关键帧序列）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title`, `project.duration`, `project.aspect_ratio` |
| | `style.visual_style`, `style.emotion_curve`, `style.color_narrative`, `style.layout_storyboard` |
| | `characters.protagonist.{name, immutable_features}`, `characters.antagonist.{name, immutable_features}` |
| | `scene.primary.{name, scene_id}`, `scene.weather` |
| | `shot-state` 镜头列表（阶段/景别/运镜/色彩/灯光/转场） |
| **writes** | `prompt.storyboard`（故事板 prompt 文本） |

### character-sheet（角色设定卡 / 三视图）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title` |
| | `style.visual_style`, `style.color_narrative`, `style.layout_character` |
| | `characters.(protagonist|antagonist).{name, dna_id, immutable_features}` |
| **writes** | `prompt.character_sheet`（角色卡 prompt 文本） |

### scene-card（场景概念卡）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title` |
| | `style.visual_style`, `style.layout_scene` |
| | `scene.primary.{name, scene_id, fixed_elements}`, `scene.time_of_day`, `scene.weather` |
| **writes** | `prompt.scene_card`（场景卡 prompt 文本） |

### mood-board（情绪板）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title`, `project.genre` |
| | `style.visual_style`, `style.color_narrative` |
| | `scene.primary.name`, `scene.time_of_day`, `scene.weather` |
| **writes** | `prompt.mood_board`（情绪板 prompt 文本） |

### poster（海报）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title`, `project.genre` |
| | `style.visual_style`, `style.color_narrative` |
| | `characters.protagonist.name`, `characters.antagonist.name` |
| | `scene.primary.name` |
| **writes** | `prompt.poster`（海报 prompt 文本） |

### manga-page（漫画分镜页 / 四格漫画）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.title` |
| | `style.visual_style` |
| | `characters.protagonist.{name, immutable_features}` |
| | `shot-state` 镜头列表（阶段/动作/台词） |
| **writes** | `prompt.manga_page`（漫画 prompt 文本） |

### video-prompt-assembly（视频 Prompt 组装）

| 方向 | 变量路径 |
|------|---------|
| **reads** | `project.*`（全部项目变量） |
| | `style.visual_style`, `style.emotion_curve`, `style.color_narrative` |
| | `asset_map`（@图映射，动态读取） |
| | `shot-state`（全部镜头状态） |
| | `dialogue-map`（台词列表） |
| | `project.target_platform`（平台参数） |
| **writes** | `prompt.video`（完整视频 prompt 文本 → 输出给 prompt-scorer） |

---

## 模板占位符 ↔ state/ 变量映射

模板使用中文占位符（`[EC编号]`、`[CN编号]` 等），实际值来自两层：

| 层 | 来源 | 典型占位符 | registry 路径 |
|----|------|-----------|--------------|
| **state/ registry** | 引擎决策写入 | `[EC编号]`, `[CN编号]`, `[片名]` | `style.emotion_curve`, `style.color_narrative`, `project.title` |
| **knowledge/ 数据库** | 直接查表匹配 | `[PR编号]`, `[BL编号]`, `[EV编号]`, `[CR编号]`, `[CP编号]`, `[WT编号]`, `[SP编号]`, `[ME编号]`, `[MT编号]`, `[DR编号]`, `[SD编号]` | 不走 registry，直接从 knowledge/ 文件匹配 |

> **规则**：模板 reads 声明的是 registry 层的变量。knowledge/ 层的编号是细节数据，由模板在生成时自行查表填充，不在 contract 中逐一声明。

---

## 契约验证规则

1. **reads 覆盖检查**：每个模板的 reads 变量必须在 `variable-registry.md`、`asset-map.md`、`shot-state.md` 或 `dialogue-map.md` 中存在对应路径
2. **writes 不冲突**：两个模板不能写入同一个变量（除非有意覆盖）
3. **读取前置**：模板读取的变量必须在其之前的主链阶段已被写入

---

## 运行时契约校验（由 consistency-engine Video RM 调用）

每次模板生成 prompt 后，执行以下校验：

```
【Contract Check】

1. Reads 覆盖：
   ├─ 扫描模板 reads 声明的所有变量路径
   ├─ 验证每个路径在 state/ 中存在且已赋值（非 "—"）
   └─ 未赋值 → ⚠ "变量 <路径> 被模板 <名称> 读取但 state/ 中值为空"

2. 读取前置：
   ├─ 模板 reads 的变量，写入方引擎是否已执行？
   ├─ 例：video-prompt-assembly reads shot-state，但 video-director（写入方）已执行 ✅
   └─ 未执行 → ❌ "模板 <名称> 读取了尚未写入的变量 <路径>"

3. 写入阶段：
   ├─ 模板声明为 writes 的资产，asset-map 中是否已注册？
   ├─ 例：character-sheet writes asset_map.character_sheet
   └─ 未注册 → ⚠ "模板 <名称> 产出但未在 asset-map 中注册"

4. 模板间依赖：
   ├─ full-board reads shot-state → shot-state 是否由前序引擎写入？
   └─ contract 链：character-sheet → asset-map → video-prompt-assembly 读取 ✅/❌
```

### 校验输出格式

```
【Contract Check】3/4 通过

✅ Reads 覆盖：8/8 变量在 state/ 中存在且已赋值
❌ 读取前置：quick-board reads shot-state，但 shot-state 尚未写入（video-director 未执行）
✅ 写入阶段：3/3 产出资产已注册 asset-map
✅ 模板依赖：依赖链完整

阻断：第2项 — 模板 quick-board 不能在此阶段调用，需等待 video-director 完成。
```

### 校验时机

- **主链运行时**：每个模板生成 prompt 前自动校验
- **单点资产模式**：生成角色卡/场景图前校验依赖是否满足
- **恢复项目时**：加载 state/ 后校验所有变量是否完整

---

## 联动

- **校验工具**：`final-video-qc` 可对照此契约检查变量覆盖率
- **新增模板时**：必须先在此文件声明契约，再编写模板内容
