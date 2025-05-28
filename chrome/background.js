chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: highlightEmDashes,
  });
});

function highlightEmDashes() {
  // 1. Entferne vorherige Hervorhebungen
  document.querySelectorAll("span.highlight-em").forEach(span => {
    const parent = span.parentNode;
    parent.replaceChild(document.createTextNode(span.textContent), span);
  });

  // 2. Suche erneut durch die Seite
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  const matches = [];

  while (walk.nextNode()) {
    nodes.push(walk.currentNode);
  }

  for (const node of nodes) {
    const originalText = node.nodeValue;
    let modified = false;

    let updatedText = originalText;

    // Em Dash
    if (updatedText.includes("—")) {
      updatedText = updatedText.replace(/—/g, '<span class="highlight-em" style="background:yellow;font-weight:bold;">—</span>');
      matches.push(`EM-DASH: ${originalText}`);
      modified = true;
    }

    // Narrow NBSP
    if (updatedText.includes(" ")) {
      updatedText = updatedText.replace(/\u202F/g, '<span class="highlight-em" style="background:orange;font-weight:bold;"> </span>');
      matches.push(`NARROW NBSP: ${originalText}`);
      modified = true;
    }

    // NBSP
    if (updatedText.includes(" ")) {
      updatedText = updatedText.replace(/\u00A0/g, '<span class="highlight-em" style="background:red;font-weight:bold;"> </span>');
      matches.push(`NBSP: ${originalText}`);
      modified = true;
    }

    if (modified) {
      const span = document.createElement("span");
      span.innerHTML = updatedText;
      node.parentNode.replaceChild(span, node);
    }
  }

  if (matches.length > 0) {
    alert(`Gefundene Sonderzeichen: ${matches.length}\n\n` + matches.join("\n\n"));
  } else {
    alert("Keine Em Dashes oder Sonder-Leerzeichen gefunden.");
  }
}