document.getElementById('saveBtn').addEventListener('click', () => {
  const name = document.getElementById('headerName').value.trim();
  const value = document.getElementById('headerValue').value.trim();
  if (!name || !value) {
    document.getElementById('status').textContent = 'ヘッダー名と値を入力してください';
    return;
  }
  chrome.storage.local.set({headerName: name, headerValue: value}, () => {
    document.getElementById('status').textContent = '保存しました';
  });
});

// 保存済みの値をUIに反映
chrome.storage.local.get(['headerName', 'headerValue'], (data) => {
  if (data.headerName) document.getElementById('headerName').value = data.headerName;
  if (data.headerValue) document.getElementById('headerValue').value = data.headerValue;
});

// 有効化・無効化ボタンの初期化
const toggleBtn = document.getElementById('toggleBtn');
const toggleStatus = document.getElementById('toggleStatus');

function updateToggleUI(enabled) {
  toggleBtn.textContent = enabled ? '無効化' : '有効化';
  toggleStatus.textContent = enabled ? '現在: 有効' : '現在: 無効';
}

chrome.storage.local.get(['enabled'], (data) => {
  updateToggleUI(data.enabled !== false); // デフォルト有効
});

toggleBtn.addEventListener('click', () => {
  chrome.storage.local.get(['enabled'], (data) => {
    const newEnabled = !(data.enabled !== false);
    chrome.storage.local.set({enabled: newEnabled}, () => {
      updateToggleUI(newEnabled);
    });
  });
});
