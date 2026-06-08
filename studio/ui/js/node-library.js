// node-library.js — node types for drag-drop
const NODE_TYPES = [
  {
    category: '📖 输入',
    nodes: [
      { type: 'obsidian_read', label: 'Obsidian 读取' },
      { type: 'paste_story', label: '粘贴故事' }
    ]
  },
  {
    category: '🧬 分析提取',
    nodes: [
      { type: 'extract_all', label: '提取全部信息' },
      { type: 'extract_character', label: '提取角色DNA' }
    ]
  },
  {
    category: '🎨 生成图片',
    nodes: [
      { type: 'generate_character', label: '角色卡' },
      { type: 'generate_character_sheet', label: '角色设定卡' },
      { type: 'generate_turnaround', label: '三视图' },
      { type: 'generate_expressions', label: '12表情' },
      { type: 'generate_scene', label: '场景概念图' },
      { type: 'generate_storyboard', label: '分镜图' },
      { type: 'generate_full_board', label: '全案板' },
      { type: 'generate_poster', label: '海报' },
      { type: 'generate_moodboard', label: '情绪板' }
    ]
  },
  {
    category: '🎥 生成视频',
    nodes: [
      { type: 'merge_frames', label: '合并帧' },
      { type: 'video_prompt', label: '视频Prompt' },
      { type: 'call_video_api', label: '调平台生成' }
    ]
  },
  {
    category: '📦 输出',
    nodes: [
      { type: 'export', label: '保存+导出' }
    ]
  }
];

function renderNodeLibrary(container) {
  container.innerHTML = '<h3>节点库</h3>';

  NODE_TYPES.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'node-category';
    catDiv.innerHTML = `<div class="node-category-title">${cat.category}</div>`;

    cat.nodes.forEach(nodeDef => {
      const item = document.createElement('div');
      item.className = 'node-library-item';
      item.textContent = nodeDef.label;
      item.draggable = true;
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('application/json', JSON.stringify({
          type: nodeDef.type,
          label: nodeDef.label,
          id: `node_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`
        }));
      });
      catDiv.appendChild(item);
    });

    container.appendChild(catDiv);
  });
}
