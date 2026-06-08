// sidebar-tools.js — standalone tool runner
class SidebarTools {
  async runStandaloneTool(toolId) {
    const input = document.getElementById('toolInput');
    if (!input || !input.value.trim()) { alert('请先输入内容'); return; }

    const outputDiv = document.getElementById('toolOutput');
    const grid = document.getElementById('outputGrid');
    if (outputDiv) outputDiv.style.display = 'block';
    if (grid) grid.innerHTML = '<div class="output-card status-running"><div class="output-status">🔄</div><div class="output-label">启动中...</div></div>';

    const flowMap = {
      'character-design': { flowFile: 'character-design', storyProp: 'pastedStory' },
      'scene-card': { flowFile: 'storyboard-only', storyProp: 'pastedStory' },
      'board-to-video': { flowFile: 'board-to-video', storyProp: 'pastedStory' },
      'poster': { flowFile: 'storyboard-only', storyProp: 'pastedStory' },
      'one-click-all': { flowFile: 'one-click-all', storyProp: 'pastedStory' }
    };

    const flow = flowMap[toolId];
    if (!flow) { if (grid) grid.innerHTML = '<div class="workflow-error">❌ 未知工具</div>'; return; }

    // Subscribe to progress
    if (this._unsub) this._unsub();
    this._unsub = window.onProgress((data) => {
      if (data.nodeId && grid) {
        this._updateGrid(data, grid);
      }
    });

    try {
      const result = await api.startWorkflow({
        flowFile: flow.flowFile,
        pastedStory: input.value.trim(),
        shotCount: 7
      });

      if (result.plan && grid) {
        grid.innerHTML = '';
        result.plan.forEach(phase => {
          (phase.nodes || []).forEach(n => {
            const card = document.createElement('div');
            card.className = 'output-card';
            card.id = `out-${n.id}`;
            card.innerHTML = `<div class="output-status">⏳</div><div class="output-label">${n.label || n.id}</div>`;
            grid.appendChild(card);
          });
        });
      }
    } catch (e) {
      if (grid) grid.innerHTML = `<div class="workflow-error">❌ ${e.message}</div>`;
    }
  }

  _updateGrid(data, grid) {
    const card = grid.querySelector(`#out-${data.nodeId}`);
    if (!card) return;
    const statusEl = card.querySelector('.output-status');
    if (statusEl) {
      const icons = { running: '🔄', completed: '✅', failed: '❌' };
      statusEl.textContent = icons[data.status] || '⏳';
    }
    card.className = `output-card status-${data.status}`;
  }
}

window.sidebarTools = new SidebarTools();
