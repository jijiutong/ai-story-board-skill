# 场景概念卡模板

## 适用场景

场景美术方向确认用。展示单一场景的氛围、灯光、材质和环境变化。适合场景概念设计、氛围参考、环境提案。

## Prompt 模板

```text
电影级场景概念卡，主题《[片名]》，场景：[场景名称]。16:9 横版。主场景概念图占据画面 60% 以上区域：地点 [EV编号. 环境类型 + 场景地点]，时代 [HE编号. 历史时代]，时间 [白天/黄昏/夜晚/深夜]，天气 [WT编号. 天气类型] + [SP编号. 特殊大气]，环境材质 [MT编号. 地面]/[MT编号. 墙面]/[MT编号. 天空质感]，氛围 [氛围描述]，构图 [CP编号. 构图法则]。画面要有电影级纵深、强透视、强对比光影、体积光、[环境特效]。如有生物出现：[CR编号. 生物名称]。附加模块：环境细节局部特写（[细节1:MT编号]/[细节2:MT编号]/[细节3:PR编号. 道具]）、灯光方向示意图（[灯光方案]：主光/补光/环境光）、材质参考图（[MT编号. 材质列表]）、天气效果参考（[WT编号]+[SP编号]）、不同时段效果对比（[时段1 vs 时段2]）、声音氛围标注（[SD编号. 环境音]+[SD编号. 拟音]）。场景风格：[风格编号. 风格名称]，[氛围关键词]，色彩叙事 [CN编号. 色彩方案]，配色 [主色1] + [主色2] + [点缀色]。cinematic environment concept art, professional scene design card, wide establishing shot, atmospheric lighting, volumetric light, deep perspective, environmental material details, weather atmosphere effects, lighting diagram, sound atmosphere reference, ultra-detailed, 8K, sharp focus, no watermark, no garbled text, no flat illustration, no marketing poster style。
```

## 完整示例

### 输入
故事：雨夜，一个人走在城市天桥上，很悲伤

### 提取变量
- 片名：雨夜独行
- 场景名称：城市天桥（雨夜）
- EV编号：EV5 城市街道 / EV17 天桥
- HE编号：HE12 现代
- 时间：深夜
- WT编号：WT3 暴雨
- MT编号：MT26 沥青 / MT18 钢铁
- CP编号：CP12 孤立构图
- CN编号：CN15 忧郁蓝灰
- VS编号：VS27 王家卫情绪
- SD编号：SE2 雨声

### 输出 Prompt
```
电影级场景概念卡，主题《雨夜独行》，场景：城市天桥（雨夜）。16:9 横版。
主场景概念图占据画面 60% 以上区域：地点 EV5 城市街道 + EV17 天桥，
时代 HE12 现代，时间 深夜，天气 WT3 暴雨 + 雨雾大气，环境材质 MT26 沥青/MT18 钢铁/玻璃反光，
氛围 孤独、忧郁、电影感，构图 CP12 孤立构图（人物在画面中小而居中）。
画面要有电影级纵深、强透视、强对比光影、体积光、雨幕效果。
附加模块：环境细节局部特写（湿沥青近景/霓虹招牌反光/栏杆雨滴）、
灯光方向示意图（钠灯暖黄主光2700K：从上向下 + 霓虹红/蓝补光）、
材质参考图（MT26 沥青/MT18 钢铁/MT10 玻璃/MT19 水膜）、
天气效果参考（WT3 暴雨+雨幕雾气）、
不同时段效果对比（深夜雨 vs 雨后清晨）、
声音氛围标注（SE2 雨声+SE7 远处车流+SE15 寂静感）。
场景风格：VS27 王家卫情绪，霓虹、慢门、浓烈，
色彩叙事 CN15 忧郁蓝灰，配色 深蓝 + 暖黄 + 霓虹红。
cinematic environment concept art, professional scene design card, wide establishing shot,
atmospheric lighting, volumetric light, deep perspective, environmental material details,
weather atmosphere effects, lighting diagram, sound atmosphere reference,
ultra-detailed, 8K, sharp focus。
```

## 变量说明

| 变量 | 参考文件 | 填充方式 |
|------|---------|---------|
| EV编号 | `references/environments.md` | 按场景地点自动匹配 |
| HE编号 | `references/historical-eras.md` | 按故事时代自动匹配 |
| WT编号 | `references/weather.md` | 故事明确天气 → 匹配编号；未指定 → WT1 晴朗 |
| MT编号 | `references/materials.md` | 按场景地面/墙面/水体材质匹配 |
| CP编号 | `references/composition.md` | 按场景情绪匹配：孤独→CP12, 史诗→CP2, 对峙→CP1 |
| CN编号 | `references/color-narrative.md` | 按情绪曲线匹配 |
| VS编号 | `references/styles.md` | 用户选择或智能推荐 |
| SD编号 | `references/sound-design.md` | 按场景环境自动匹配 |
