# 镜头语言参考

## 景别（Shot Size）

| 景别 | 英文 | 说明 | 用途 |
|------|------|------|------|
| 大远景 | Extreme Long Shot (ELS) | 环境为主，人物极小 | 建立世界观、展现规模 |
| 远景 | Long Shot (LS) | 人物全身 + 大部分环境 | 场景交代、人物位置 |
| 全景 | Full Shot (FS) | 人物从头到脚 | 动作展示、服装全貌 |
| 中景 | Medium Shot (MS) | 腰部以上 | 对话、日常互动 |
| 中近景 | Medium Close-Up (MCU) | 胸部以上 | 情绪交流、表情变化 |
| 近景 | Close-Up (CU) | 肩部以上/面部 | 情绪高潮、关键反应 |
| 特写 | Extreme Close-Up (ECU) | 眼睛/嘴/道具局部 | 细节强调、紧张感 |
| 大特写 | Macro Shot | 睫毛/汗水/纹理 | 极度紧张、微观信息 |

## 运镜（Camera Movement）

| 运镜 | 英文 | 说明 | 情绪效果 |
|------|------|------|----------|
| 固定 | Static / Locked-off | 摄影机不动 | 稳定、客观、不安（长时间） |
| 推近 | Push In / Dolly In | 镜头缓慢靠近主体 | 紧张升级、注意力集中 |
| 拉远 | Pull Out / Dolly Out | 镜头缓慢远离主体 | 孤独感、揭示环境、余韵 |
| 摇摄 | Pan (left/right) | 水平转动镜头 | 跟随动作、揭示空间 |
| 倾斜 | Tilt (up/down) | 垂直转动镜头 | 强调高度/深度 |
| 跟踪 | Tracking / Dolly | 镜头跟随主体移动 | 代入感、节奏感 |
| 环绕 | Orbit / Arc | 围绕主体旋转 | 展示关系、戏剧性 |
| 升降 | Crane / Boom | 镜头垂直升降 | 揭示全局、情绪释放 |
| 手持 | Handheld | 轻微抖动 | 紧张、真实感、混乱 |
| 斯坦尼康 | Steadicam | 平滑跟随 | 沉浸感、优雅跟随 |
| 航拍 | Aerial / Drone | 高空俯拍 | 壮阔、上帝视角 |
| 疾推 | Crash Zoom | 快速推到特写 | 冲击、发现、震惊 |
| 变焦 | Rack Focus | 焦点在前景后景间切换 | 转移注意力、揭示关系 |

## 角度（Camera Angle）

| 角度 | 英文 | 说明 | 心理效果 |
|------|------|------|----------|
| 平视 | Eye Level | 与主体眼睛平齐 | 客观、平等 |
| 仰拍 | Low Angle | 从下往上拍 | 主体高大、力量、威严 |
| 俯拍 | High Angle | 从上往下拍 | 主体渺小、弱势、可怜 |
| 鸟瞰 | Bird's Eye / God's Eye | 正上方垂直 | 全局、命运、棋盘感 |
| 倾斜 | Dutch Angle / Canted | 镜头倾斜 | 不安、混乱、疯狂 |
| 虫视 | Worm's Eye | 地面极低角度 | 压迫感、巨大威胁 |
| 过肩 | Over the Shoulder (OTS) | 越过一人肩膀 | 对话、对峙、关系 |

## 焦段（Lens Focal Length）

| 焦段 | 类型 | 效果 | 用途 |
|------|------|------|------|
| 14-24mm | 超广角 | 强烈透视变形、空间感强 | 大场景、压迫感、动作 |
| 24-35mm | 广角 | 自然广角、轻微变形 | 环境交代、群戏 |
| 35-50mm | 标准 | 接近人眼视角 | 日常、对话、纪实 |
| 50-85mm | 中焦 | 轻微压缩、自然透视 | 人物特写、肖像 |
| 85-135mm | 中长焦 | 明显压缩、背景虚化 | 情绪特写、分离主体 |
| 135-300mm | 长焦 | 强压缩、扁平化 | 远距离、压缩空间 |
| Anamorphic | 变形宽银幕 | 椭圆焦外、水平拉丝、镜头光晕 | 电影感、宽银幕 |

## 画幅（Aspect Ratio）

| 画幅 | 比例 | 说明 |
|------|------|------|
| 标准电视 | 4:3 | 复古、传统 |
| 高清电视 | 16:9 | 标准横版 |
| 电影宽银幕 | 2.39:1 | 超宽电影感 |
| 竖版短视频 | 9:16 | 小红书/抖音/TikTok |
| 方形 | 1:1 | 社交媒体 |
| IMAX | 1.43:1 | 沉浸超大画幅 |

## 在 Prompt 中使用

```
镜头语言：[摄影机] / [镜头类型] / [画幅] / [景深描述] / [胶片颗粒] / [高反差灯光] / [轮廓光] / [逆光] / [体积光] / [动态构图] / professional cinematography
```

例：
```
镜头语言：ARRI ALEXA 35 / 35mm anamorphic lens / 2.39:1 cinematic crop / shallow depth of field / film grain / high contrast lighting / rim light / backlight / volumetric light / motion blur / dynamic composition / professional cinematography
```
