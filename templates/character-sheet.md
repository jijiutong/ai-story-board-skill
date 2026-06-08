# 角色设定卡模板

## 适用场景

角色设计确认用。包含两种模式：
- **标准角色设定卡（格式 3）**：6 模块完整角色设计，适合 AI 视频角色一致性
- **三视图设定卡（格式 9）**：纯正交三视图，适合 3D 建模参考和快速验证

## 模式 A：标准角色设定卡（格式 3）

```text
电影级角色设定卡，主题《[片名]》，[主角/反派]：[角色姓名]。[画幅比例，默认16:9] 横版，专业角色设计参考板，用于 AI 视频角色一致性。画面分为 6 个模块：

模块1—三视图（占画面左侧40%）：正面全身像、侧面全身像、背面全身像，三个视图严格对齐同一水平线，相同比例。[服装分层描述：底层/外层/配饰]。

模块2—面部多角度（占画面右上20%）：正面 close-up + 左侧3/4角 + 右侧3/4角 + 仰视角度。面部特征：[面部轮廓/眉/眼/鼻/唇/特征]。年龄[年龄]，[肤色]。

模块3—表情范围（占画面右中15%）：4个面部小图—愤怒(ME7 双目圆睁咬牙)、决绝(ME15 紧咬牙关)、平静(ME6 自然放松)、震撼(ME25 瞳孔微扩)。标注每个表情的眉/眼/嘴变化。

模块4—手部特写（占画面右下10%）：握[PR编号.道具]手正面+侧面。[手指特征]，[手部旧伤/特征]。[习惯性手部动作描述]。

模块5—武器/道具特写（占画面底部左8%）：[PR编号.道具名称]，正面+侧面+细节。[尺寸/材质/颜色/纹路]。

模块6—发型/服装动态参考（占画面底部右7%）：[状态1如束发]→[状态2如散开]→[状态3如披肩]。标注变化过程。

不可变特征标注（红色标记）：[列出3-5个绝对不能变的特征，如刀疤位置/眼睛间距/鼻梁形状/发际线/头身比]。这些在任何镜头中不得改变。

服装层次标注：[底层]→[外层]→[配饰]→[鞋靴]，分件标注。

整体风格：[风格编号.风格名称]，[氛围关键词]，配色[主色1]+[主色2]+[点缀色]，色彩方案[CN编号]。character reference sheet for AI video consistency, multiple face angles (front/3-quarter/side/up), expression range variations (4 emotions), hand close-up for prop interaction, hair/costume state transitions, weapon turn-around, layer-by-layer costume breakdown, DO NOT CHANGE markers on critical features, ultra-detailed, 8K, sharp focus, no watermark, no garbled text, no broken faces, no extra limbs, consistent style throughout。
```

## 模式 B：三视图设定卡（格式 9）

```text
专业三视图设定卡，主题《[片名]》，角色：[角色姓名]。16:9 横版，严格正交三视图布局：正面全身、侧面全身、背面全身，三个视图严格对齐同一水平线，相同比例，无透视变形。DNA标注：面部 [面部特征]，发型 [发型]，体型 [体型]，身高 [身高描述]。材质标注（MT编号）：[MT编号. 服装材质]/[MT编号. 配饰材质]/[MT编号. 皮肤质感]。颜色标注（CN编号）：[CN编号. 色彩方案] 含 [主色1]/[主色2]/[点缀色]。道具标注（PR编号）：[PR编号. 武器/道具]。尺寸比例标注：头身比/肩宽/臂长/腿长。背景纯白或中性灰。角色造型：[风格编号. 风格名称]，[服装描述]，[身体姿态: BL编号]。technical character turnaround, orthographic front/side/back views, aligned on same baseline, same scale, no perspective distortion, DNA annotations, material callouts with texture references, color swatches with hex references, prop callouts, dimension annotations, clean white background, professional 3D modeling reference, ultra-detailed, 8K, sharp focus, no watermark, no background elements, no shadows。
```

## 完整示例 — 标准角色设定卡

### 输入
剑修师父：陆沉，45岁，白发青衣，使剑「断念」

### 提取变量
- 片名：剑冢决
- VS编号：VS3 东方玄幻
- CN编号：CN8 复仇红黑
- PR编号：PR1 长剑「断念」
- BL编号：BL1 站姿
- MT编号：MT2 皮肤/MT18 丝绸/MT10 钢铁
- ME编号：ME15 悲伤/ME7 愤怒/ME6 平静/ME25 震撼

### 输出 Prompt
```
电影级角色设定卡，主题《剑冢决》，主角：陆沉。16:9 横版，专业角色设计参考板。

模块1—三视图（占画面左侧40%）：正面全身像、侧面全身像、背面全身像，
三个视图严格对齐同一水平线，相同比例。服装分层：底层白色中衣→外层青灰长衫破损边缘→
内衬暗红→腰带旧玉配饰→布靴。

模块2—面部多角度（占画面右上20%）：正面 close-up + 左侧3/4角 + 右侧3/4角 + 仰视角度。
面部特征：瘦长方脸/剑眉深目/法令纹深/鬓角微白/高鼻梁/薄唇微抿。
年龄 45岁，肤色 古铜。

模块3—表情范围（占画面右中15%）：4个面部小图—
愤怒(ME7 双目圆睁咬牙，眉头紧锁)、悲伤(ME15 眼尾下垂含泪，嘴唇微颤)、
平静(ME6 眼神深邃自然放松，嘴角微扬)、震撼(ME25 瞳孔微扩，眉梢上扬)。
标注每个表情的眉/眼/嘴变化。

模块4—手部特写（占画面右下10%）：握 PR1 长剑手正面+侧面。
手指修长有力，食指和中指有剑茧，手腕处一道旧剑疤。
习惯性手部动作：拇指轻抚剑首。

模块5—武器/道具特写（占画面底部左8%）：PR1 长剑「断念」，
正面+侧面+细节。长三尺六寸/陨铁锻造/剑身暗银色/剑身刻「断念」二字古铭文/
剑格为青铜色/剑首系旧红穗。不可变：剑身铭文位置+剑格形制+红穗材质。

模块6—发型/服装动态参考（占画面底部右7%）：
束发(战斗)→半散(受伤后)→披肩(崩溃时)。标注变化过程。

不可变特征标注（红色标记）：法令纹深度和位置/剑茧位置/手腕疤痕形状/
鼻梁高度/眼尾下垂角度。这些在任何镜头中不得改变。

服装层次标注：白色中衣（底层）→青灰长衫（外层）→暗红内衬→旧玉佩（配饰）→布靴（鞋）。

整体风格：VS3 东方玄幻，史诗、悲壮、沧桑，配色 墨黑+青灰+暗金，
色彩方案 CN8 复仇红黑。
character reference sheet for AI video consistency, multiple face angles,
expression range variations, DO NOT CHANGE markers on critical features,
ultra-detailed, 8K, sharp focus。
```

## 变量说明

| 变量 | 参考文件 | 填充方式 |
|------|---------|---------|
| 角色姓名/身份/年龄 | Step 1 提取 | 缺则起电影感名字 |
| 面部/体型/皮肤描述 | Step 1 提取 + `references/character-dna.md` | DNA 20字段补全 |
| 服装/配饰描述 | Step 1 提取 | 缺则按时代/身份推断 |
| ME编号 | `references/micro-expressions.md` | 按角色情绪底色匹配 4 种 |
| PR编号 | `references/props.md` | 按武器/道具匹配 |
| BL编号 | `references/body-language.md` | 按角色姿态匹配 |
| MT编号 | `references/materials.md` | 服装材质→MT18/MT19/MT20 |
| CN编号 | `references/color-narrative.md` | 按情绪匹配 |
| VS编号 | `references/styles.md` | 用户选择或智能推荐 |
| 不可变特征 | — | AI 按角色描述推断 3-5 个关键特征 |
