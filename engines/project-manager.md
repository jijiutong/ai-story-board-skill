# Project Manager — 项目管理引擎

项目的创建、保存、加载、恢复。实现 state/ 文件持久化，支持跨会话继续工作。

---

## 一、项目生命周期

```
创建 ─→ 初始化 state/ ─→ 生成资产 ─→ 保存 ─→ 加载/恢复 ─→ 继续工作
  │                                                    │
  └──────────────── 跨会话持久化 ──────────────────────┘
```

---

## 二、项目初始化（new project）

### 触发

- 用户说"新建项目"、"创建项目"、"新项目 [故事]"
- `/create` 首次运行时自动创建

### 行为

```
1. 生成 project.id（格式：PROJ-YYYYMMDD-XXXX，如 PROJ-20260610-A3F2）
2. 创建项目目录：projects/<project.id>/
3. 在目录下初始化 state/ 子目录，复制 state/ 模板文件
4. 写入 project.id 到 state/variable-registry.md
5. 写入 project.state_dir = "projects/<project.id>/"
6. 输出：「项目 <id> 已创建，状态文件位于 projects/<project.id>/state/」
```

### project.id 生成规则

```
PROJ-YYYYMMDD-XXXX：
  YYYYMMDD = 当前日期
  XXXX = 4 位随机码（A-Z, 0-9），不与当天已有项目重复
```

---

## 三、项目保存（save）

### 触发

- 每次主链执行完成后自动保存
- 用户说"保存项目"
- 用户说"保存为 [名称]"

### 行为

```
1. 将当前会话的 state/*.md 全部复制到 projects/<project.id>/state/
2. 创建/更新 projects/<project.id>/project.md（项目元信息）
3. 输出：「项目 <id> 已保存（N 个状态文件）」
```

### project.md 格式

```markdown
# 项目：<title>

- **ID**：<project.id>
- **标题**：<project.title>
- **类型**：<project.genre>
- **创建时间**：<created_at>
- **最后保存**：<saved_at>
- **状态文件**：state/
- **资产文件**：assets/
```

---

## 四、项目加载/恢复（load / resume）

### 触发

- 用户说"继续项目"、"加载项目"、"打开项目 <id>"
- 用户说"继续"（如只有一个项目则自动加载）
- `/source 读取项目 <id>`

### 行为

```
1. 列出 projects/ 下所有项目（id + 标题 + 最后保存时间）
2. 用户选择或指定 project.id
3. 从 projects/<project.id>/state/ 读取所有状态文件
4. 恢复到当前会话的 state/ 目录
5. 输出：
   「项目 <id>「<title>」已恢复。
     角色：N 个 | 场景：N 个 | 镜头：N 镜 | 资产：N 张
     上次保存：<saved_at>
     可继续：生成视频 prompt / 修改第 N 镜 / 风格迁移 / 一键生成」
```

### 恢复后可用操作

| 状态 | 可用操作 |
|------|---------|
| 仅有 story-intake 结果 | 继续主链：生成角色卡/场景图/分镜图 |
| 已有角色卡+场景图 | 直接出视频 prompt / 单镜修改 |
| 已有完整 state/ | 重新生成 / 风格迁移 / 出视频 |
| 已有视频 prompt | 修改 prompt / 导出平台版本 / 视频检查 |

---

## 五、项目列表（list）

### 触发

- 用户说"我的项目"、"项目列表"、"列出项目"

### 输出

```
【项目列表】（projects/）

PROJ-20260610-A3F2  雨夜剑冢        武侠/东方玄幻  15s  7镜  06-10 14:22
PROJ-20260609-B7E1  便利店重逢      都市/都市情绪  15s  6镜  06-09 09:15
PROJ-20260608-C2D4  太空港倒计时    科幻/暗黑科幻  12s  6镜  06-08 18:30

共 3 个项目。回复项目 ID 或标题加载。
```

---

## 六、项目删除（delete）

### 触发

- 用户说"删除项目 <id>"

### 行为

```
1. 确认：「确定删除项目 <id>「<title>」？此操作不可逆。」
2. 删除 projects/<project.id>/ 整个目录
3. 输出：「项目 <id> 已删除」
```

---

## 七、与主链集成

```
task-router
  ├─ 新建 → project-manager（init）→ story-intake → ...
  ├─ 加载 → project-manager（load）→ 恢复 state/ → 继续主链
  └─ /create 自动 → project-manager（init or load）
```

### 主链中的自动保存点

```
story-intake 完成 → 自动保存
video-director 完成 → 自动保存
reference-anchor 完成 → 自动保存
video-prompt-assembly 完成 → 自动保存
render-package 完成 → 最终保存
```

---

## 八、输出

### 初始化输出

```
【项目创建】
ID：PROJ-20260610-A3F2
标题：（待定，story-intake 后填入）
状态目录：projects/PROJ-20260610-A3F2/state/
```

### 保存输出

```
【项目已保存】PROJ-20260610-A3F2「雨夜剑冢」
保存时间：2026-06-10 14:22
状态文件：7 个（variable-registry / asset-map / shot-state / dialogue-map / continuity-state / continuity-snapshot / prompt-contract）
```

### 加载输出

```
【项目已恢复】PROJ-20260610-A3F2「雨夜剑冢」
角色：墨渊（主角/入魔剑修）、顾长空（对手/师父）
场景：雨夜古寺大殿（雨/深夜/烛火+闪电）
镜头：7 镜（15s，EC7 悲壮）
资产：角色卡 1 张、场景图 1 张、分镜图 3 张
上次保存：2026-06-10 14:22

可继续操作：
  1. 生成视频 prompt → 回复"出视频 prompt"
  2. 修改第N镜 → 回复"修改第5镜..."
  3. 风格迁移 → 回复"换成王家卫风格但保持角色"
  4. 重新生成分镜 → 回复"重新生成分镜图"
```

---

## 联动

← 触发自 `task-router`（新建/加载意图识别）
← 触发自 `story-intake`（首次运行时自动 init）
→ 写入 `projects/<id>/state/`（持久化 state/ 文件）
→ 写入 `projects/<id>/state/variable-registry.md`（project.id + project.state_dir）
→ 读取 `projects/` 目录（列出所有项目）
→ 与 `state/` 层双向同步（会话 ↔ 磁盘）
