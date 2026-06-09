# AI Visual Director

<p align="center">
  <a href="./README.md">中文</a> · <a href="./README.en.md"><b>🇬🇧 English</b></a>
</p>

> A Claude Code Skill that turns a single story sentence into cinematic storyboards, character sheets, scene concepts, posters, and video prompts — automatically.

---

## Who's It For

- **AI comic / short drama creators** — storyboards + video prompts in one flow
- **Novel authors** — visualize scenes and characters instantly
- **AI art & video enthusiasts** — GPT Image / Midjourney / SD / Seedance prompts, one click
- **Content creators needing consistency** — character sheets, turnarounds, expression charts, scene references

---

## Highlights

- **Auto story breakdown**: from one sentence to full storyboard with camera, pacing, and emotion curve
- **Character consistency**: sheets / turnarounds / 5-angle face / 12 expressions / costume-weapon detail / 20-field DNA
- **Scene consistency**: all-in-one reference / 720° panorama / overhead shot / orbit capture / text scene lock
- **53 visual styles**: Eastern Fantasy, Urban Mood, Ink Wash, Wong Kar-wai, Ghibli, Black-Gold Action…
- **Video workflow**: storyboard → Seedance / Runway / Kling / Luma / Pika video prompt
- **Multi-platform**: GPT Image / Midjourney / SDXL / Flux / Tongyi Wanxiang prompt format auto-adaptation

Full capability matrix → [docs/capability-matrix.md](docs/capability-matrix.md)

---

## Install

### npx (recommended)

```bash
# Global — available in all projects
npx skills add jijiutong/ai-visual-director -g -y

# Project-level — current project only
npx skills add jijiutong/ai-visual-director
```

Claude Code auto-discovers the skill. Just paste a story and go.

### Manual install

```bash
git clone https://github.com/jijiutong/ai-visual-director.git
```

Copy `SKILL.md` + `references/` + `templates/` into `~/.claude/skills/ai-visual-director/` (global) or `<project>/.claude/skills/ai-visual-director/` (per-project).

Individual sub-skill install: copy `sub-skills/<name>/SKILL.md` to `~/.claude/skills/<name>/SKILL.md`.

### Zero install

In Claude Code, just say:

```
Help me storyboard: [paste your story]
```

---

## Quick Start

### Paste your story

```
You: In a cultivation world, two sword cultivators duel at a sword tomb,
     once master and apprentice

AI: [Smart Recommendation]
  Recommend 1: Eastern Fantasy + Full Board (master-apprentice bonus)
  Recommend 2: Chinese Ink + Poster

You: 1

AI: ```[Full board prompt with master-apprentice composition bonus]```
```

### Quick Commands

| Command | What it does | Example |
|---------|-------------|---------|
| `/storyboard` | Storyboard generation | `/storyboard Two swordsmen in a rainy temple` |
| `/character` | Character design | `/character White-haired master, black robe` |
| `/scene` | Scene concept | `/scene Ancient temple hall at night` |
| `/poster` | Movie poster | `/poster Duel at Sword Tomb` |
| `/video` | Video prompt pipeline | `/video 15s scene: one sword splits the sky` |
| `/style` | Style browser / fusion | `/style Wong Kar-wai + Ghibli` |

Quick mode (under `/storyboard`):

| Command | Effect |
|---------|--------|
| `/storyboard 一键生成` | Full pipeline auto, no options |
| `/storyboard 一键全平台` | Multi-platform prompt output |
| `/storyboard 多版本` | A/B/C version comparison |
| `/storyboard 看全部` | Show all styles + formats + workflows |

---

## Examples

### Video Pipeline · "One Sword Splits the Sky"

```
You: 15-second scene — a Chinese warrior's single slash splits the heavens

AI: [Recommend] Black-Gold Action + Full Board
You: 1

→ Character sheet → Scene reference → Storyboard frames → Video prompt → Seedance-ready
```

### Eastern Fantasy · Master vs. Apprentice

```
You: Two cultivators duel at a sword tomb, once master and apprentice
AI: [Recommend 1] Eastern Fantasy + Full Board (relationship bonus)
    [Recommend 2] Chinese Ink + Poster
You: 1
AI: ```[Full board prompt with master-apprentice framing/lighting/emotion]```
```

### Style Fusion · Wong Kar-wai × Ghibli

```
You: Transform the rainy night scene into Wong Kar-wai + Ghibli fusion

AI: ```60% Wong Kar-wai neon + 40% Ghibli watercolor fusion prompt```
```

More examples → [docs/examples.md](docs/examples.md)

---

## Video Workflow

```
Prep (character + scene refs) → Panorama lock → Storyboard frames → Prompt → Video
```

Supports Seedance / Runway / Kling / Luma / Pika.

> API calls require you to configure your own platform API keys. Without API keys configured, the Skill still generates all prompts normally.

---

## Supported Platforms

| Image | Video |
|-------|-------|
| GPT Image / DALL·E 3 | Seedance |
| Midjourney v6/v7 | Runway Gen-4 |
| Stable Diffusion XL/3 | Kling |
| Flux / Ideogram | Luma Dream Machine |
| Tongyi Wanxiang | Pika |
| ComfyUI / Recraft |  |

---

## Command Priority

The system recognizes input in this order:

```
1. /skill commands (/storyboard /character /scene /poster /video /style)
2. Obsidian read commands
3. API generation commands
4. Global adjustment (mood/style/compress/score…)
5. Story text (direct paste)
6. Continue / modify / rollback
```

---

## Default Output Strategy

| User type | Strategy |
|-----------|----------|
| New user | Fewer options, auto-generate default |
| Experienced | Extra parameters supported |
| Advanced | Say "看全部" to see full capabilities |
| Batch user | Obsidian read → one-click batch |
| Commercial user | One-click all-platform output |

> 6 commands up front. 50+ styles, 10+ formats all auto-orchestrated. Don't make users remember features — let them state their goal.

---

## Platform Comparison

| Feature | GPT Image | Midjourney | Stable Diffusion |
|---------|-----------|------------|------------------|
| Chinese input | ✅ Native | ⚠️ Needs translation | ❌ Not supported |
| Layout | ⭐⭐ Strong | ⭐ Single image focused | ⭐ Needs ControlNet |
| Character consistency | ⭐⭐ Medium | ⭐⭐⭐ --cref | ⭐⭐⭐ IP-Adapter |
| Best for | Full board / manga / mood board | Poster / character / scene | Character sheets / local batch |

---

<details>
<summary>View full file structure</summary>

```
ai-visual-director/
├── SKILL.md                         # Main entry: workflow + capability matrix + rules
├── README.md                        # Project docs (Chinese)
├── README.en.md                     # Project docs (English)
├── api-config.template.env          # API Key config template (14 platforms)
├── sub-skills/                      # Sub-skills (6 independent /xxx commands)
│   ├── storyboard/SKILL.md          # /storyboard
│   ├── character/SKILL.md           # /character
│   ├── scene/SKILL.md               # /scene
│   ├── poster/SKILL.md              # /poster
│   ├── video/SKILL.md               # /video
│   └── style/SKILL.md               # /style
├── references/                      # Reference files (51)
│   ├── styles.md                    # 50+ visual styles
│   ├── fusion.md                    # Style fusion engine
│   ├── formats.md                   # 10 output formats
│   ├── relationships.md             # 30+ character relationships
│   ├── character-dna.md             # 20-field character DNA
│   ├── character-consistency.md     # Character consistency (8 methods)
│   ├── scene-consistency.md         # Scene consistency (7 methods)
│   ├── camera.md                    # 140+ camera techniques
│   ├── lighting.md                  # 40+ lighting schemes
│   ├── emotion-curve.md             # 12 emotion curve models
│   ├── color-narrative.md           # 60+ color narrative schemes
│   ├── mood-slider.md               # Mood slider (24 dimensions)
│   ├── act-structure.md             # 12 narrative structures
│   ├── pacing.md                    # Storyboard pacing engine
│   ├── composition.md               # 35+ composition rules
│   ├── cultural-accuracy.md         # Cultural accuracy
│   ├── micro-expressions.md         # 43 micro-expressions
│   ├── dialogue-rhythm.md           # Dialogue rhythm notation
│   ├── negative-prompt.md           # Auto negative prompts
│   ├── multi-version.md             # Multi-version A/B/C
│   ├── multi-aspect.md              # Multi-aspect adaptation
│   ├── single-shot-edit.md          # Precise single-shot editing
│   ├── prompt-scorer.md             # Prompt quality scorer
│   ├── continuity-check.md          # Continuity checking
│   ├── version-control.md           # Prompt version management
│   ├── style-migration.md           # Style migration
│   ├── prompt-compression.md        # Prompt compression
│   ├── series.md                    # Sequel/series support
│   ├── batch-chapter.md             # Batch chapter processing
│   ├── video-prompt.md              # AI video prompt
│   ├── video-prompt-assembly.md     # Video prompt assembly
│   ├── video-api-integration.md     # Video API integration
│   ├── api-integration.md           # Image API integration
│   ├── thumbnail-board.md           # Thumbnail storyboard
│   ├── director-notes.md            # Director notes
│   ├── audio-reference.md           # Music & SFX reference
│   ├── industry-export.md           # Industry format export
│   ├── platform.md                  # Multi-platform adaptation
│   ├── platform-advanced.md         # Platform deep optimization
│   ├── creatures.md                 # 36 creature designs
│   ├── environments.md              # 36 environment designs
│   ├── props.md                     # 46 props & weapons
│   ├── weather.md                   # 26 weather & atmosphere
│   ├── body-language.md             # 46 body language types
│   ├── materials.md                 # 36 material textures
│   ├── animals.md                   # 36 animal designs
│   ├── historical-eras.md           # 15 historical eras
│   ├── transitions.md               # Transitions & montage
│   └── sound-design.md              # Sound design
├── templates/                       # Template files (7)
│   ├── full-board.md                # Full board template
│   ├── quick-board.md               # Quick storyboard
│   ├── character-sheet.md           # Character sheet
│   ├── scene-card.md                # Scene concept card
│   ├── poster.md                    # Poster template
│   ├── manga-page.md                # Manga panel
│   └── mood-board.md                # Mood board
└── docs/
    ├── capability-matrix.md         # Full capability matrix
    └── examples.md                  # More examples
```
</details>

---

## License

MIT
