// pro-view.js — professional node canvas view
class ProView {
  constructor() {
    this.canvas = null;
    this.flowName = null;
  }

  render() {
    const svg = document.getElementById('canvasSvg');
    const library = document.getElementById('nodeLibrary');
    if (!svg || !library) return;

    if (!this.canvas) {
      this.canvas = new FlowCanvas(svg);
      this._setupDrop(svg);
    }
    renderNodeLibrary(library);

    const chatBar = document.getElementById('chatBarContainer');
    if (chatBar) chatBar.style.display = 'flex';

    const sendBtn = document.getElementById('chatSendBtn');
    if (sendBtn) sendBtn.onclick = () => {
      const input = document.getElementById('chatInput');
      if (input && input.value.trim()) {
        console.log('Chat:', input.value.trim());
        input.value = '';
      }
    };
  }

  _setupDrop(svg) {
    svg.addEventListener('dragover', e => e.preventDefault());
    svg.addEventListener('drop', (e) => {
      e.preventDefault();
      try {
        const data = JSON.parse(e.dataTransfer.getData('application/json'));
        const rect = svg.getBoundingClientRect();
        this.canvas.addNode(data, e.clientX - rect.left, e.clientY - rect.top);
      } catch (err) {}
    });
  }

  async loadPresetFlow() {
    try {
      const data = await api.listFlows();
      const flows = data.flows || [];
      const names = flows.map((f, i) => `${i + 1}. ${f.name}`).join('\n');
      const choice = prompt(`选一个预设流程加载到画布：\n\n${names}\n\n输入编号：`);
      if (choice) {
        const idx = parseInt(choice) - 1;
        if (flows[idx]) {
          const flowFile = flows[idx].flowFile;
          const resp = await fetch(`./workflows/${flowFile}.json`);
          if (resp.ok) {
            const flowDef = await resp.json();
            this.canvas.loadFlow(flowDef);
            this.flowName = flowDef.name;
          } else {
            // Use fallback: load locally from api
            this.canvas.loadFlow({ nodes: [], edges: [] });
          }
        }
      }
    } catch (e) {
      alert('加载失败：' + e.message);
    }
  }

  async runWorkflow() {
    try {
      const flowDef = this.canvas.exportFlow();
      if (flowDef.nodes.length === 0) { alert('画布为空，请先拖节点或加载预设流程'); return; }
      const flowFile = `temp_${Date.now()}`;
      const result = await api.startWorkflow({
        flowFile,
        platform: 'seedance',
        pastedStory: '自定义画布流程'
      });
      console.log('Workflow started:', result);
      alert(`流程已启动: ${result.workflowId}`);
    } catch (e) {
      alert('运行失败：' + e.message);
    }
  }

  clearCanvas() {
    if (confirm('清空画布？所有节点和连线都会丢失。')) {
      this.canvas.clear();
    }
  }

  async saveAsCustom() {
    const name = prompt('给这个流程起个名字：');
    if (!name) return;
    try {
      const flowDef = this.canvas.exportFlow();
      const config = await api.getConfig();
      config.custom_workflows = config.custom_workflows || [];
      config.custom_workflows.push({
        name,
        icon: '🔧',
        flowDef,
        flowFile: `custom_${Date.now()}`
      });
      await api.updateConfig({ custom_workflows: config.custom_workflows });
      alert('流程已保存 ✅');
    } catch (e) {
      alert('保存失败：' + e.message);
    }
  }
}

const proView = new ProView();
