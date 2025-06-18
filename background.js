function updateHeaderRule(headerName, headerValue, enabled) {
  if (!enabled || !headerName || !headerValue) {
    chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: [1]}, () => {});
    return;
  }
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
      id: 1,
      priority: 1,
      action: {
        type: 'modifyHeaders',
        requestHeaders: [
          {header: headerName, operation: 'set', value: headerValue}
        ]
      },
      condition: {urlFilter: '*', resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest"]}
    }]
  }, () => {});
}

chrome.storage.local.get(['headerName', 'headerValue', 'enabled'], (data) => {
  updateHeaderRule(data.headerName, data.headerValue, data.enabled !== false);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && (changes.headerName || changes.headerValue || changes.enabled)) {
    chrome.storage.local.get(['headerName', 'headerValue', 'enabled'], (data) => {
      updateHeaderRule(data.headerName, data.headerValue, data.enabled !== false);
    });
  }
});
