// app.js — main entry, tab switching
let currentTab = 'market';

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  const chatBar = document.getElementById('chatBarContainer');

  switch (tab) {
    case 'market':
      document.getElementById('marketView').classList.add('active');
      if (window.marketView) window.marketView.render();
      if (chatBar) chatBar.style.display = 'none';
      break;
    case 'tools':
      document.getElementById('toolsView').classList.add('active');
      if (window.sidebarTools) window.sidebarTools.renderToolsPage();
      if (chatBar) chatBar.style.display = 'none';
      break;
    case 'pro':
      document.getElementById('proView').classList.add('active');
      if (window.proView) window.proView.render();
      if (chatBar) chatBar.style.display = 'flex';
      break;
    case 'config':
      document.getElementById('configView').classList.add('active');
      if (window.configPanel) window.configPanel.render();
      if (chatBar) chatBar.style.display = 'none';
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  switchTab('market');
});
