// market-view.js — 故事板市场（主界面）
const STYLES = [
  { id: 1, name: '黑金动作', emoji: '⚔️', color: '#1a1a1a', accent: '#d4a843', tags: ['武侠','动作'] },
  { id: 2, name: '科幻机甲', emoji: '🤖', color: '#0a1a2e', accent: '#4dc9f6', tags: ['机甲','赛博'] },
  { id: 3, name: '东方玄幻', emoji: '🐉', color: '#1a0a0a', accent: '#e8a850', tags: ['修仙','古风'] },
  { id: 4, name: '悬疑惊悚', emoji: '🔍', color: '#0f0f0f', accent: '#c0392b', tags: ['犯罪','恐怖'] },
  { id: 5, name: '都市情绪', emoji: '🌆', color: '#1a1a2e', accent: '#e858a0', tags: ['爱情','职场'] },
  { id: 6, name: '青春校园', emoji: '🌸', color: '#fef9ef', accent: '#ff9aa2', tags: ['初恋','成长'] },
  { id: 7, name: '废土末日', emoji: '🏚️', color: '#3d3025', accent: '#e07020', tags: ['求生','丧尸'] },
  { id: 8, name: '宫廷权谋', emoji: '👑', color: '#1a0a0a', accent: '#c9a84c', tags: ['宫斗','古装'] },
  { id: 9, name: '蒸汽朋克', emoji: '⚙️', color: '#2d1f14', accent: '#c8956c', tags: ['机械','维多利亚'] },
  { id: 10, name: '童话绘本', emoji: '📖', color: '#f0f8e8', accent: '#7ec8a0', tags: ['魔法','森林'] },
  { id: 11, name: '二次元动漫', emoji: '🎌', color: '#fff0f5', accent: '#ff69b4', tags: ['日漫','轻小说'] },
  { id: 12, name: '写实摄影', emoji: '📷', color: '#2d2d2d', accent: '#888888', tags: ['纪实','真实'] },
  { id: 13, name: '复古胶片', emoji: '📽️', color: '#3d2a1a', accent: '#d4a574', tags: ['怀旧','年代'] },
  { id: 14, name: '北欧极简', emoji: '❄️', color: '#f5f5f5', accent: '#88c0d0', tags: ['维京','冰雪'] },
  { id: 15, name: '拉美魔幻', emoji: '🦋', color: '#1a3d2e', accent: '#ff6b35', tags: ['热带','亡灵'] },
  { id: 16, name: '赛博佛学', emoji: '🧘', color: '#1a0a2e', accent: '#ff6600', tags: ['赛博+东方'] },
  { id: 17, name: '中世纪史诗', emoji: '🏰', color: '#2d2d1a', accent: '#8b7355', tags: ['骑士','龙族'] },
  { id: 18, name: '非洲部落', emoji: '🥁', color: '#3d2010', accent: '#e8a040', tags: ['草原','原始'] },
  { id: 19, name: '新中式国潮', emoji: '🏮', color: '#cc0000', accent: '#ffd700', tags: ['国风','潮流'] },
  { id: 20, name: '暗黑哥特', emoji: '🦇', color: '#0a0a0a', accent: '#8b0000', tags: ['吸血鬼','宗教'] },
  { id: 21, name: 'Disney Pixar 3D', emoji: '✨', color: '#1a3d5e', accent: '#ffcc00', tags: ['动画','3D'] },
  { id: 22, name: 'Disney 2D 手绘', emoji: '🎨', color: '#faf0e6', accent: '#4169e1', tags: ['歌舞','手绘'] },
  { id: 23, name: 'Studio Ghibli', emoji: '🌿', color: '#e8f4e0', accent: '#5b8c5a', tags: ['吉卜力','治愈'] },
  { id: 24, name: '好莱坞商业大片', emoji: '💥', color: '#0a1a2e', accent: '#ff4400', tags: ['Marvel','超英'] },
  { id: 25, name: 'Wes Anderson', emoji: '🎀', color: '#f5e6d3', accent: '#e8a0c0', tags: ['对称','粉彩'] },
  { id: 26, name: 'Tim Burton 哥特', emoji: '🌙', color: '#1a1a2e', accent: '#8b5cf6', tags: ['暗黑童话','扭曲'] },
  { id: 27, name: '王家卫情绪', emoji: '💨', color: '#0a1a1a', accent: '#ff0066', tags: ['霓虹','香港'] },
  { id: 28, name: '张艺谋色彩', emoji: '🔴', color: '#8b0000', accent: '#ffd700', tags: ['红色','中国'] },
  { id: 29, name: '韩国犯罪美学', emoji: '🔪', color: '#1a1a2e', accent: '#4a90d9', tags: ['冷峻','写实'] },
  { id: 30, name: '印度宝莱坞', emoji: '🕺', color: '#1a0a2e', accent: '#ff6600', tags: ['歌舞','戏剧'] },
  { id: 31, name: '欧洲艺术电影', emoji: '🎭', color: '#2d2d2d', accent: '#8b7355', tags: ['长镜头','极简'] },
  { id: 32, name: '中国水墨意境', emoji: '🖌️', color: '#f5f0e8', accent: '#2d2d2d', tags: ['水墨','留白'] },
  { id: 33, name: '新浪潮自由', emoji: '🎞️', color: '#2d2d1a', accent: '#e07070', tags: ['跳接','实验'] },
  { id: 34, name: '赛博佛学朋克', emoji: '💻', color: '#0a0a2e', accent: '#ff8800', tags: ['佛学科技'] },
  { id: 35, name: '暗黑科幻', emoji: '👽', color: '#0a0a0a', accent: '#00ff88', tags: ['太空恐怖','AI失控'] },
  { id: 36, name: '废土末日生存', emoji: '☢️', color: '#3d3025', accent: '#ff4400', tags: ['废土','求生'] },
  { id: 37, name: '都市情绪电影', emoji: '🌃', color: '#0a0a2e', accent: '#e8a0a0', tags: ['都市','文艺'] },
  { id: 38, name: '青春校园物语', emoji: '📚', color: '#f5f0e8', accent: '#88b8e8', tags: ['校园','运动'] },
  { id: 39, name: '悬疑惊悚导演', emoji: '🎬', color: '#0f0f0f', accent: '#c0392b', tags: ['密室','心理'] },
  { id: 40, name: '心理迷宫', emoji: '🧩', color: '#1a1a2e', accent: '#9b59b6', tags: ['人格分裂','记忆'] },
  { id: 41, name: '浪漫梦幻', emoji: '💕', color: '#faf0f5', accent: '#ff69b4', tags: ['求婚','星空'] },
  { id: 42, name: '音乐 MV', emoji: '🎵', color: '#0a0a0a', accent: '#ff0066', tags: ['舞蹈','演唱会'] },
  { id: 43, name: '中国水墨动画', emoji: '🐼', color: '#f5f0e0', accent: '#2d2d2d', tags: ['国风短片'] },
  { id: 44, name: '像素复古游戏', emoji: '👾', color: '#0a2e0a', accent: '#00ff00', tags: ['8bit','像素'] },
  { id: 45, name: '黏土定格动画', emoji: '🧱', color: '#e8d5b7', accent: '#8b6914', tags: ['定格','手工'] },
  { id: 46, name: '沙画叙事', emoji: '🏜️', color: '#d4b896', accent: '#8b6914', tags: ['创意','叙事'] },
  { id: 47, name: '剪纸中国风', emoji: '✂️', color: '#cc0000', accent: '#ffd700', tags: ['非遗','中国风'] },
  { id: 48, name: '浮世绘日本', emoji: '🗾', color: '#f5e6d3', accent: '#1a3d7e', tags: ['江户','日本'] },
  { id: 49, name: '极简主义', emoji: '⬜', color: '#ffffff', accent: '#2d2d2d', tags: ['广告','概念'] },
  { id: 50, name: '故障艺术 Glitch', emoji: '📺', color: '#0a0a0a', accent: '#ff00ff', tags: ['赛博','Glitch'] },
  { id: 51, name: '超现实主义', emoji: '🫧', color: '#1a0a2e', accent: '#ff8800', tags: ['梦境','潜意识'] },
  { id: 52, name: '广告大片质感', emoji: '💎', color: '#0a0a0a', accent: '#ffd700', tags: ['奢侈品','时尚'] },
  { id: 53, name: '粗粝 B 级片', emoji: '🧟', color: '#2d1a0a', accent: '#ff4400', tags: ['Cult','另类'] }
];

// Style→keywords mapping for AI recommendations
const STYLE_KEYWORDS = {
  '修仙': [3], '古风': [3], '神魔': [3], '仙侠': [3], '玄幻': [3],
  '武侠': [1], '复仇': [1,29], '谍战': [1], '战争': [1],
  '机甲': [2], '赛博': [2,34], 'AI': [2,35], '太空': [2,35],
  '悬疑': [4], '密室': [4,39], '犯罪': [4,29,39], '恐怖': [4,35,39],
  '都市': [5,37], '爱情': [5,37,41], '职场': [5], '暧昧': [5,27],
  '校园': [6,38], '青春': [6,38], '初恋': [6,38], '成长': [6,38],
  '末日': [7,36], '废土': [7,36], '丧尸': [7,36],
  '宫斗': [8], '古装': [8,3], '权谋': [8],
  '蒸汽': [9], '机械': [9,2],
  '童话': [10], '魔法': [10], '森林': [10],
  '日漫': [11], '异世界': [11], '轻小说': [11],
  '纪实': [12], '纪录片': [12],
  '怀旧': [13], '年代': [13],
  '北欧': [14], '维京': [14], '冰雪': [14],
  '拉美': [15], '魔幻': [15],
  '骑士': [17], '城堡': [17], '龙': [17],
  '非洲': [18], '部落': [18],
  '国潮': [19], '非遗': [19,47],
  '哥特': [20,26], '吸血鬼': [20],
  '迪士尼': [21,22], 'Pixar': [21], '动画': [21,22,43],
  '吉卜力': [23], '宫崎骏': [23], '治愈': [23],
  '超英': [24], 'Marvel': [24],
  '水墨': [32,43], '山水': [32]
};

class MarketView {
  constructor() {
    this.selectedStyle = null;
    this.selectedStyles = [];
    this.storyText = '';
    this.workflowId = null;
    this.nodeStatus = {};
    this.unsubscribe = null;
  }

  render() {
    this.renderStyleGallery();
    this.renderRecommendations();
    this._bindStoryInput();
    this.updateButtonState();
    // Sidebar renders independently via sidebar-tools.js
    if (window.sidebarTools) window.sidebarTools.render();
  }

  // ---- Style Gallery ----
  renderStyleGallery() {
    const gallery = document.getElementById('styleGallery');
    if (!gallery) return;

    gallery.innerHTML = STYLES.map(s => `
      <div class="style-card ${this.selectedStyle === s.id ? 'selected' : ''}"
           data-style-id="${s.id}"
           style="--card-bg:${s.color}; --card-accent:${s.accent}"
           onclick="window.marketView.selectStyle(${s.id})">
        <div class="style-card-emoji">${s.emoji}</div>
        <div class="style-card-name">${s.name}</div>
        <div class="style-card-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    `).join('');
  }

  selectStyle(id) {
    if (this.selectedStyle === id) {
      this.selectedStyle = null;
    } else {
      this.selectedStyle = id;
    }
    this.renderStyleGallery();
    this.updateButtonState();
    this.renderRecommendations();
  }

  // ---- Story Input ----
  _bindStoryInput() {
    const input = document.getElementById('storyInput');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.storyText = input.value.trim();
        if (this.storyText.length > 10) {
          this.renderRecommendations();
        }
      }, 800);
    });
  }

  // ---- AI Recommendations ----
  renderRecommendations() {
    const container = document.getElementById('aiRecommendations');
    if (!container) return;

    const story = this.storyText || document.getElementById('storyInput')?.value?.trim() || '';

    if (story.length < 10) {
      container.style.display = 'none';
      return;
    }

    // Match story keywords to styles
    const matchedIds = new Set();
    const lower = story.toLowerCase();
    for (const [keyword, ids] of Object.entries(STYLE_KEYWORDS)) {
      if (lower.includes(keyword)) ids.forEach(id => matchedIds.add(id));
    }

    // Pick top 3, or defaults
    let recs = [...matchedIds].slice(0, 3).map(id => STYLES.find(s => s.id === id)).filter(Boolean);
    if (recs.length === 0) {
      // Default recommendations based on story length and tone
      recs = [
        { ...STYLES[2], reason: '故事篇幅适中，玄幻风格适合' },
        { ...STYLES[31], reason: '意境丰富，水墨风格更有韵味' },
        { ...STYLES[4], reason: '都市情感类，情绪板最配' }
      ];
    } else {
      recs = recs.map(s => ({ ...s, reason: this._getReason(s.id) }));
    }

    container.style.display = 'block';
    container.innerHTML = `
      <div class="section-header">
        <h2>🤖 AI 推荐</h2>
        <span class="section-hint">根据你的故事自动匹配</span>
      </div>
      <div class="rec-cards">
        ${recs.map((r, i) => `
          <div class="rec-card ${i === 0 ? 'rec-primary' : ''}"
               onclick="window.marketView.selectStyle(${r.id})">
            <div class="rec-rank">${i === 0 ? '⭐ 最推荐' : `推荐 ${i+1}`}</div>
            <div class="rec-style">
              <span class="rec-emoji">${r.emoji}</span>
              <span class="rec-name">${r.name}</span>
            </div>
            <div class="rec-reason">${r.reason}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  _getReason(styleId) {
    const reasons = {
      1: '故事冲突激烈，动作风格最能体现张力',
      3: '东方玄幻风格匹配你的故事世界观',
      4: '悬疑氛围需要暗调色彩和紧张节奏',
      5: '都市情感，情绪化视觉最打动人',
      27: '情感细腻，王家卫式慢门霓虹正合适',
      32: '留白意境美，水墨风给你独特韵味',
      23: '治愈系故事，吉卜力手绘温暖人心'
    };
    return reasons[styleId] || 'AI 分析认为这个风格最契合你的故事';
  }

  // ---- Button State ----
  updateButtonState() {
    const btnGen = document.getElementById('btnGenerate');
    const btnAll = document.getElementById('btnAllInOne');
    const status = document.getElementById('selectionStatus');

    if (this.selectedStyle) {
      const style = STYLES.find(s => s.id === this.selectedStyle);
      if (btnGen) btnGen.disabled = false;
      if (btnAll) btnAll.disabled = false;
      if (status) status.textContent = `✅ 已选：${style?.name || '#' + this.selectedStyle}`;
    } else {
      if (btnGen) btnGen.disabled = true;
      if (btnAll) btnAll.disabled = true;
      if (status) status.textContent = '👆 先选一个风格';
    }
  }

  // ---- Generate ----
  async generateStoryboard() {
    if (!this.selectedStyle) return;
    const story = document.getElementById('storyInput')?.value?.trim() || '';
    if (!story) { alert('请先粘贴故事'); return; }

    this._showOutput();

    // Subscribe to progress
    if (this.unsubscribe) this.unsubscribe();
    this.unsubscribe = window.onProgress((data) => {
      if (data.nodeId) {
        this.nodeStatus[data.nodeId] = data;
        this._updateOutput(data);
      }
    });

    try {
      const result = await api.startWorkflow({
        flowFile: 'storyboard-only',
        pastedStory: story,
        style: `VS${this.selectedStyle}`,
        shotCount: 7
      });
      this.workflowId = result.workflowId;
      if (result.plan) this._renderOutputSteps(result.plan);
    } catch (e) {
      this._showOutputError(e.message);
    }
  }

  async generateAll() {
    if (!this.selectedStyle) return;
    const story = document.getElementById('storyInput')?.value?.trim() || '';
    if (!story) { alert('请先粘贴故事'); return; }

    this._showOutput();
    if (this.unsubscribe) this.unsubscribe();
    this.unsubscribe = window.onProgress((data) => {
      if (data.nodeId) {
        this.nodeStatus[data.nodeId] = data;
        this._updateOutput(data);
      }
    });

    try {
      const result = await api.startWorkflow({
        flowFile: 'one-click-all',
        pastedStory: story,
        style: `VS${this.selectedStyle}`
      });
      this.workflowId = result.workflowId;
      if (result.plan) this._renderOutputSteps(result.plan);
    } catch (e) {
      this._showOutputError(e.message);
    }
  }

  _showOutput() {
    const area = document.getElementById('outputArea');
    if (area) area.style.display = 'block';
  }

  _renderOutputSteps(plan) {
    const grid = document.getElementById('outputGrid');
    if (!grid) return;

    grid.innerHTML = plan.map(phase => {
      if (phase.parallel) {
        return phase.nodes.map(n => `
          <div class="output-card" id="out-${n.id}">
            <div class="output-status">⏳</div>
            <div class="output-label">${n.label || n.id}</div>
          </div>
        `).join('');
      }
      return phase.nodes.map(n => `
        <div class="output-card" id="out-${n.id}">
          <div class="output-status">⏳</div>
          <div class="output-label">${n.label || n.id}</div>
        </div>
      `).join('');
    }).join('');
  }

  _updateOutput(data) {
    const card = document.getElementById(`out-${data.nodeId}`);
    if (!card) return;
    const statusEl = card.querySelector('.output-status');
    if (statusEl) {
      const icons = { running: '🔄', completed: '✅', failed: '❌' };
      statusEl.textContent = icons[data.status] || '⏳';
    }
    card.className = `output-card status-${data.status}`;
  }

  _showOutputError(msg) {
    const grid = document.getElementById('outputGrid');
    if (grid) grid.innerHTML += `<div class="workflow-error">❌ ${msg}</div>`;
  }
}

window.marketView = new MarketView();
