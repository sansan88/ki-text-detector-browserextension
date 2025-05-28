chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: highlightEmDashes,
    });
  });
  
  function highlightEmDashes() {
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    const matches = [];
  
    while (walk.nextNode()) {
      nodes.push(walk.currentNode);
    }
  
    for (const node of nodes) {
      if (node.nodeValue.includes("—")) {
        // Highlight
        const span = document.createElement("span");
        span.innerHTML = node.nodeValue.replace(/—/g, '<span style="background:yellow;font-weight:bold;">—</span>');
        node.parentNode.replaceChild(span, node);
  
        // Save excerpt
        const text = node.nodeValue;
        const excerpt = text.length > 80 ? text.slice(0, 77) + "…" : text;
        matches.push(excerpt);
      }
    }
  
    if (matches.length > 0) {
      alert(`Gefundene Em Dashes: ${matches.length}\n\n` + matches.join("\n\n"));
    } else {
      alert("Keine Em Dashes gefunden.");
    }
  }