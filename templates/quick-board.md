# 快速故事板模板

## 适用场景

精简版故事板，适合快速验证想法和单场景分镜参考。比全案板少了角色三视图和技术规范栏，出图速度快，成本低。

## Prompt 模板

```text
电影级漫剧故事板，主题《[片名]》，核心冲突：[一句话故事]。[画幅比例，默认16:9] 横版，专业电影前期制作分镜板，顶部片名和信息栏，中部超大核心场景概念图展示 [EV编号. 环境 + 场景地点] + [WT编号. 天气] + [氛围] + [构图: CP编号]，[场景地点] 的对峙画面（身体语言：[BL编号. 姿态]），底部 [7/13] 镜分镜表（情绪曲线 [EC编号] 驱动）+ 简易镜头轨迹图 + 色彩叙事 [CN编号]。角色DNA：主角 [核心面部/服装特征]，对手 [核心面部/服装特征]。风格：[风格编号. 风格名称]，[氛围关键词]，配色 [主色1] + [主色2] + [点缀色]，cinematic storyboard sheet, professional film production layout, ARRI ALEXA 35, anamorphic lens, strong contrast lighting, film grain, volumetric light, ultra-detailed, 8K, clean industrial layout, coherent character design, no watermark, no garbled text, no messy panels, no broken anatomy, no flat illustration, no marketing poster style。
```

## 关键帧模式（格式 10）

当用户选择"关键帧序列"时，用以下模板：

```text
电影级关键帧序列，主题《[片名]》，[动作/场景描述]。[画幅比例，默认16:9] 横版，专业电影故事板排版，[5-9] 个关键帧纵向排列。每个关键帧占画面一栏，左侧是画面，右侧是技术参数标注栏（黑色半透明背景+白色文字）。技术参数栏必须包含：帧号+阶段名称+时间范围 | 景别(ELS/FS/LS/MS/MCU/CU/ECU) | 运镜方式 | 焦段(mm) | 色彩标注 | 灯光方案 | 转场方式。如有台词，画面中必须包含台词字幕框（黑色半透明圆角矩形+白色文字），台词内容：「[台词]」，节奏标注 [DR编号. 节奏]。主角 [主角DNA核心特征] 在 [EV编号. 环境] 中执行 [BL编号. 动作姿态]。武器/道具：[PR编号]。生物（如有）：[CR编号]。天气：[WT编号]。风格：[风格编号. 风格名称]，[氛围关键词]，配色 [主色1] + [主色2] + [点缀色]，色彩叙事 [CN编号]，动作轨迹线标注，特效标注，角色DNA一致性（面部/服装/武器跨帧不变），consistent character across all frames, technical parameter annotations on each panel, dialogue subtitle boxes where applicable, motion blur on moving elements, cinematic storyboard sheet with labeled panels, ultra-detailed, 8K, sharp focus, no watermark, no garbled text, no broken faces, no extra limbs。
```

## 完整示例 — 快速故事板

### 输入
中国武士一剑开天的 15s 分镜

### 提取变量
- 片名：一剑开天
- VS编号：VS1 黑金动作（或 VS3 东方玄幻）
- EC编号：EC1 标准四阶段
- CN编号：CN8 复仇红黑 → CN1 英雄金黑
- EV编号：EV1 竹林/EV22 山巅
- BL编号：BL33 挥剑
- PR编号：PR1 长剑

### 输出 Prompt
```
电影级漫剧故事板，主题《一剑开天》，核心冲突：中国武士以一剑之力劈开天际。
16:9 横版，专业电影前期制作分镜板，顶部片名和信息栏，
中部超大核心场景概念图展示 EV22 山巅 + WT6 灵气粒子 + 庄严神圣氛围 + 构图 CP2 对称构图，
山巅的对峙画面（身体语言：BL33 挥剑姿态 双手握剑高举过头），
底部 7 镜分镜表（情绪曲线 EC1 标准四阶段：平静→蓄力→爆发→余韵 驱动）+ 简易镜头轨迹图 + 色彩叙事 CN1 英雄金黑。
角色DNA：主角 剑修（束发，白色道袍，剑眉星目，PR1 长剑 剑身刻古铭文），对手 天劫（雷云化身）。
风格：VS1 黑金动作，史诗、力量、爆发，配色 墨黑 + 暗金 + 白。
cinematic storyboard sheet, professional film production layout, ARRI ALEXA 35,
anamorphic lens, strong contrast lighting, film grain, volumetric light,
ultra-detailed, 8K, clean industrial layout, coherent character design。
```

## 变量说明

| 变量 | 参考文件 | 填充方式 |
|------|---------|---------|
| 片名 | — | Step 1 提取，2-8 字 |
| EC编号 | `references/emotion-curve.md` | 按故事类型匹配 |
| CN编号 | `references/color-narrative.md` | EC自动推导CN |
| EV编号 | `references/environments.md` | 按故事场景匹配 |
| BL编号 | `references/body-language.md` | 按角色动作匹配 |
| PR编号 | `references/props.md` | 按武器/道具匹配 |
| WT编号 | `references/weather.md` | 按故事天气匹配 |
| VS编号 | `references/styles.md` | 用户选择或智能推荐 |
| 镜数 | — | 短篇 7 镜，中篇 10 镜，史诗 13 镜 |
| 画幅 | — | 默认 16:9，用户可指定 |
