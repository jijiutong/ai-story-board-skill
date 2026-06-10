# 新海诚 — Makoto Shinkai

## 1. Composition（构图）

- **画幅比**：偏好 1.78:1 (16:9)，近年作品探索更宽画幅
- **构图方式**：极致对称美学 + 黄金分割偏移。人物常偏画面一侧，另一侧留给巨大天空/风景；铁路/电线/云层构成水平分割线
- **空间深度**：多层前景→中景→远景精确分布。前景樱花枝/电线 + 中景人物 + 远景城市天际线/云海
- **标志性构图**：人物站在坡道/铁道口/天桥上远眺；两人背对背各占左右；巨大天体（彗星/云层/太阳）占画面上半
- **空间处理**：东京城市空间的细节密度——自动贩卖机、铁道口、公寓阳台、便利店灯光——都是情感载体

## 2. Camera（运镜）

- **运镜方式**：慢速摇摄（slow pan）横移城市全景、缓慢推近人物面部、固定机位长镜头
- **焦段偏好**：广角城市全景（收尽天空和城市）、长焦人物近景（浅景深分离角色与环境）
- **运动节奏**：极慢。镜头运动速度低于常规动画——每个镜头的移动有"呼吸感"
- **标志性运镜**：从云层上空缓慢下降穿过云层→城市全景→街道→人物；180° 摇摄全景城市日出/日落
- **镜头语言**：光线变化（晨光→午光→暮光→夜光）通过同一场景不同时段反复拍摄来推进时间感

## 3. Lighting（灯光）

- **灯光方案**：体积光（volumetric god rays）+ 全局光照。光线本身是画面主体——光柱/光斑/光晕/光晕扩散
- **光源方向**：逆光为主（日出/日落的金色逆光），侧光为辅（窗光/街灯）。大量 lens flare 和 bloom
- **光质**：柔光——所有光线通过大气散射、云层漫射、玻璃反射扩散。高光区有光晕溢出
- **标志性**：金色魔法时刻（日落前 30 分钟的暖金色全局光）；夜晚便利店荧光白 + 街灯暖黄对比
- **光线情绪**：希望=日出金色 god rays；思念=黄昏/暮光时分（逢魔时）；孤独=深夜便利店荧光

## 4. Color（色彩）

- **配色方案**：高饱和 + 高明度。天空是色彩主角——从浅蓝到深蓝到紫色到金色到橙红到粉色
- **色彩象征**：蓝色=天空/距离/思念；金色/橙=温暖/希望/相遇；粉色/紫=青春/恋爱/梦幻；绿色=自然/生命力
- **调色倾向**：色彩极度饱和但保持透明感——像水彩与水粉的混合。高光向白色溢出（bloom），暗部保持色彩而非压黑
- **标志性调色**：天空不是单一蓝色——同一画面中天空从暖橙渐变到冷蓝再到深紫，层次极丰富
- **时段色彩**：清晨=冷蓝紫+暖粉；午间=高饱和蓝+白；黄昏=金色+橙红；夜晚=深蓝+暖黄灯光

## 5. Rhythm（节奏）

- **剪辑节奏**：慢节奏。镜头平均 6-12 秒。关键情感镜可到 20 秒+
- **镜头时长偏好**：风景/天空镜 8-15 秒（让观众沉浸在环境中）；对话镜 5-8 秒
- **叙事节奏**：以季节/天气/时间为章节。蒙太奇段落+音乐推动叙事——4-6 分钟的音乐蒙太奇是标志
- **标志性节奏**：音乐高潮段落配快速交叉剪辑（城市→天空→人物→细节→回忆），每镜 1-3 秒

## 6. Character Blocking（人物调度）

- **走位方式**：人物在日常空间中自然移动——走过坡道、等电车、站在天台、坐在窗边。没有夸张走位
- **角色与摄影机关系**：摄影机是远距离观察者——常以中远景观察人物，不侵入私人空间
- **群像调度**：双人场景为主。经典配置=两人并肩或背对，中间留空间，各自看向远方
- **标志性**：人物在画面中极小——城市全景中一个小小的人影；巨大天空下一人一站
- **视线**：人物几乎从不直视镜头。常看向天空/远方/窗外/手机屏幕，视线方向就是情感方向

## 7. Prompt Patterns（Prompt 模式）

```
氛围句式：
  "volumetric god rays streaming through cumulonimbus clouds, golden hour rim light, high saturation transparent colors, anime cinematic lighting, bloom and lens flare"

关键视觉元素：
  - "endless sky with multilayered clouds, color gradient from warm orange to cool blue to purple, volumetric sunlight breaking through"
  - "Tokyo cityscape from above, dense buildings with glowing windows, train tracks cutting through, twilight sky reflection on glass"
  - "single figure standing at railway crossing, cherry blossom petals floating in afternoon light, dappled shadows on concrete"
  - "interior convenience store at night, fluorescent white light spilling onto dark street, warm streetlamp contrast"

人物描述句式：
  "small figure in vast [landscape/sky], [time of day] golden light, [emotion] expression looking toward [distant point], anime film aesthetic, Makoto Shinkai style"

天空描述：
  "sky as character: [cloud type] clouds in [color range] gradient, volumetric light beams, lens flare bloom, high atmosphere detail"
```

## 8. Negative Constraints（禁止方向）

- ❌ flat overcast sky without detail（禁用无细节的灰白天空——天空必须是画面主角）
- ❌ fast action / rapid camera movement（禁用快速动作和运镜——一切必须是慢节奏）
- ❌ desaturated / muted colors（禁用去饱和/灰调色彩——必须高饱和高明度）
- ❌ horror / gore / violence（禁用恐怖/血腥/暴力——必须是唯美或忧伤）
- ❌ hard lighting with sharp shadows（禁用硬光锐影——全部用柔光散射）
- ❌ cluttered composition without breathing room（禁用拥挤构图——必须有留白空间）
- ❌ 3D CG realism without anime stylization（禁用纯 3D 写实——必须是动画美学）

## 9. VS Mapping（映射到现有风格）

- **最接近 VS**：VS11（二次元动漫）——共用日本动画美学
- **差异**：VS11 更通用（覆盖战斗/奇幻/异世界），新海诚聚焦日常诗意+天空美学+恋爱物语
- **组合建议**：VS11 的角色设计 + 新海诚的天空色彩+体积光+慢节奏音乐蒙太奇
- **适配题材**：青春恋爱、都市物语、距离与思念、时间主题、日常中的奇迹
- **不适用题材**：战斗热血、恐怖惊悚、史诗战争、黑暗题材
