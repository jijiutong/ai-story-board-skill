# 质量约束与负面提示词

## 质量标准（所有输出必须包含）

### 正面质量要求

```
ultra-detailed, professional film production layout, cinematic shot, film grain,
8K resolution, sharp focus, coherent character design, consistent costume,
clean layout, professional cinematography, correct anatomy, proper perspective
```

### 负面提示词（必须包含）

```
no watermark, no logo, no random large text, no garbled Chinese text,
no broken faces, no duplicated limbs, no extra fingers, no messy panels,
no low-quality collage, no flat illustration, no marketing poster style,
no cartoon style (unless specified), no text overlay (unless manga format),
no speech bubbles (unless manga format), no childlike drawing, no PPT style,
no random symbols, no unreadable text, no distorted faces, no broken anatomy,
no duplicated characters, no floating objects, no inconsistent lighting,
no mismatched color temperature, no clipping, no blur (unless specified)
```

## 角色一致性规则

- 同一角色在不同镜头中必须保持：服装一致、发型一致、面部特征一致
- 不允许：脸型突变、服装颜色变化、发型改变、年龄突变
- 检查项：服装颜色/款式、发型、肤色、配饰、武器

## 场景一致性规则

- 同一场景在不同镜头中必须保持：时间一致、天气一致、环境材质一致
- 不允许：晴天变雨天、白天变夜晚（除非分镜表明确说明时间推进）

## 常见 AI 生成错误及预防

| 错误 | 预防措施 |
|------|----------|
| 多出手脚 | 添加 `no extra limbs, no duplicated limbs, correct anatomy` |
| 面部崩坏 | 添加 `no broken faces, coherent character design, proper facial features` |
| 手指错误 | 添加 `correct fingers count, no extra fingers` |
| 文字乱码 | 添加 `no garbled text, text as texture only, no readable large text` |
| 画面杂乱 | 添加 `clean layout, organized panels, clear hierarchy` |
| 风格不一致 | 指定单一风格，添加 `consistent style throughout` |
| 光影混乱 | 指定光源方向，添加 `consistent lighting direction` |
| 透视错误 | 添加 `correct perspective, proper depth, architectural accuracy` |
| 颜色过饱和 | 添加 `natural color grading, cinematic color, not oversaturated` |
| 画面模糊 | 添加 `sharp focus, 8K, ultra-detailed, clear details` |

## 不同格式的额外约束

### 全案板 / 故事板
```
no single image output, must be layout with multiple panels and sections,
professional film production board format
```

### 角色设定卡
```
character turnaround sheet format, front/side/back views aligned,
consistent character proportions across all views, white or neutral background
```

### 海报
```
cinematic movie poster composition, dramatic lighting, professional poster design,
title typography integrated into layout
```

### 漫画分镜页
```
comic panel layout with clear borders between panels, reading flow from left to right or top to bottom,
speech bubbles with text, action lines, sound effect text integrated
```

### 情绪板
```
color palette swatches with labeled colors, material texture samples,
mood lighting references, typography samples, cohesive visual theme
```

### 四格漫画
```
exactly 4 panels in 起承转合 (setup-development-turn-punchline) structure,
clear reading order, comedic timing visible in panel sizes
```

### 关键帧序列
```
sequential key frames showing action progression, motion blur on moving elements,
action trajectory lines, timing annotations, consistent character across frames
```

## 在 Prompt 中使用

每个 prompt 的结尾必须包含：

```
质量要求：ultra-detailed, professional film production layout, cinematic shot, film grain, 8K, sharp focus, coherent character design, consistent costume, clean layout, no watermark, no logo, no random large text, no garbled Chinese, no broken faces, no duplicated limbs, no messy panels, no low-quality collage。
```

根据具体格式追加对应的额外约束。
