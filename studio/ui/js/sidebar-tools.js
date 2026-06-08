// sidebar-tools.js — 工具侧边栏（市场页右侧）+ 工具页
const TOOLS = [
  { id: 'character-design', name: '角色设计', icon: '👤', desc: '角色DNA → 角色卡 → 三视图 → 12表情', flowFile: 'character-design', storyPrompt: '描述你的角色...' },
  { id: 'scene-card', name: '场景概念', icon: '🏞️', desc: '场景概念图 + 氛围参考', flowFile: 'storyboard-only', storyPrompt: '描述你的场景...' },
  { id: 'storyboard-only', name: '快速分镜', icon: '🎬', desc: '贴故事 → 全案板 + 角色卡', flowFile: 'storyboard-only', storyPrompt: '粘贴故事片段...' },
  { id: 'board-to-video', name: '分镜转视频', icon: '🎥', desc: '分镜图 → 合并帧 → Prompt → 出片', flowFile: 'board-to-video', storyPrompt: '描述分镜内容...' },
  { id: 'poster', name: '电影海报', icon: '🎨', desc: '生成宣传海报', flowFile: 'storyboard-only', storyPrompt: '帖名/标语/关键场景...' },
  { id: 'one-click-all', name: '一键全来', icon: '⚡', desc: '全案板+角色卡+海报+情绪板 一次出', flowFile: 'one-click-all', storyPrompt: '粘贴故事...' }
];

class SidebarTools {
  constructor() {
    this.activeTool = null;
  }

  // ---- Market page sidebar ----
  render() {
    const sidebar = document.getElementById('toolSidebar');
    if (!sidebar) return;

    sidebar.innerHTML = `
      <div class="sidebar-header">🔧 快捷工具</div>
      <div class="sidebar-tools">
        ${TOOLS.map(t => `
          <div class="sidebar-tool-btn" onclick="window.sidebarTools.openTool('${t.id}')" title="${t.desc}">
            <span class="sidebar-tool-icon">${t.icon}</span>
            <span class="sidebar-tool-name">${t.name}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ---- Tools page ----
  renderToolsPage() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;

    grid.innerHTML = TOOLS.map(t => `
      <div class="tool-card" onclick="window.sidebarTools.openTool('${t.id}')">
        <div class="tool-card-icon">${t.icon}</div>
        <div class="tool-card-name">${t.name}</div>
        <div class="tool-card-desc">${t.desc}</div>
      </div>
    `).join('');
  }

  openTool(toolId) {
    const tool = TOOLS.find(t => t.id === toolId);
    if (!tool) return;

    this.activeTool = tool;

    // Switch to tools tab and show runner
    const toolsView = document.getElementById('toolsView');
    const toolsGrid = document.getElementById('toolsGrid');
    const runner = document.getElementById('toolRunner');

    if (toolsView && runner && toolsGrid) {
      // Ensure tools tab is active
      window.switchTab('tools');

      runner.style.display = 'block';
      runner.innerHTML = `
        <div class="tool-runner-header">
          <button class="btn-back" onclick="window.sidebarTools.closeTool()">← 返回工具列表</button>
          <h3>${tool.icon} ${tool.name}</h3>
        </div>
        <div class="tool-runner-body">
          <textarea id="toolStoryInput" class="story-textarea" placeholder="${tool.storyPrompt}" rows="3"></textarea>
          <button class="btn btn-primary" onclick="window.sidebarTools.runTool()">
            ▶ 开始生成
          </button>
          <div class="tool-output" id="toolOutput" style="display:none"></div>
        </div>
      `;
    }
  }

  closeTool() {
    this.activeTool = null;
    const runner = document.getElementById('toolRunner');
    if (runner) runner.style.display = 'none';
    this.renderToolsPage();
  }

  async runTool() {
    if (!this.activeTool) return;
    const input = document.getElementById('toolStoryInput');
    if (!input || !input.value.trim()) { alert('请先输入内容'); return; }

    const outputDiv = document.getElementById('toolOutput');
    if (outputDiv) {
      outputDiv.style.display = 'block';
      outputDiv.innerHTML = '<div class="run-status running">🔄 生成中...</div>';
    }

    try {
      const result = await api.startWorkflow({
        flowFile: this.activeTool.flowFile,
        pastedStory: input.value.trim(),
        shotCount: 7
      });
      if (outputDiv) {
        outputDiv.innerHTML = `
          <div class="run-status completed">✅ 流程已启动: ${result.workflowId}</div>
          <p class="tool-output-desc">产物在 Obsidian Vault「产物」目录中查看</p>
        `;
      }
    } catch (e) {
      if (outputDiv) {
        outputDiv.innerHTML = `<div class="run-status failed">❌ ${e.message}</div>`;
      }
    }
  }
}

window.sidebarTools = new SidebarTools();
