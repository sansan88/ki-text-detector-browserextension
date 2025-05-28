// Entferne nur die Hervorhebungen der letzten Ausführung
const timestamp = Date.now();
document.querySelectorAll("span.highlight-em[data-timestamp]").forEach(span => {
  const parent = span.parentNode;
  parent.replaceChild(document.createTextNode(span.textContent), span);
});

// Suche durch die Seite
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
  let newContent = [];

  // Em Dash (Unicode \u2014)
  if (updatedText.includes("—")) {
    const parts = updatedText.split("—");
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        const span = document.createElement("span");
        span.className = "highlight-em";
        span.setAttribute("data-timestamp", timestamp);
        span.style.background = "yellow";
        span.style.fontWeight = "bold";
        span.textContent = "—";
        newContent.push(span);
      }
      if (parts[i]) {
        newContent.push(document.createTextNode(parts[i]));
      }
    }
    matches.push(`EM-DASH: ${originalText}`);
    modified = true;
  }

  // Narrow No-Break Space
  if (updatedText.includes(" ")) {
    const parts = updatedText.split(" ");
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        const span = document.createElement("span");
        span.className = "highlight-em";
        span.setAttribute("data-timestamp", timestamp);
        span.style.background = "orange";
        span.style.fontWeight = "bold";
        span.textContent = " ";
        newContent.push(span);
      }
      if (parts[i]) {
        newContent.push(document.createTextNode(parts[i]));
      }
    }
    matches.push(`Narrow No-Break Space: ${originalText}`);
    modified = true;
  }

  // No-Break Space (NBSP)
  /*
  if (updatedText.includes(" ")) {
    const parts = updatedText.split(" ");
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        const span = document.createElement("span");
        span.className = "highlight-em";
        span.style.background = "red";
        span.style.fontWeight = "bold";
        span.textContent = " ";
        newContent.push(span);
      }
      if (parts[i]) {
        newContent.push(document.createTextNode(parts[i]));
      }
    }
    matches.push(`No-Break Space (NBSP): ${originalText}`);
    modified = true;
  }
  */
  
  // Soft Hyphen
  if (updatedText.includes("\u00AD")) {
    const parts = updatedText.split("\u00AD");
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        const span = document.createElement("span");
        span.className = "highlight-em";
        span.setAttribute("data-timestamp", timestamp);
        span.style.background = "red";
        span.style.fontWeight = "bold";
        span.textContent = "\u00AD";
        newContent.push(span);
      }
      if (parts[i]) {
        newContent.push(document.createTextNode(parts[i]));
      }
    }
    matches.push(`Soft Hyphen: ${originalText}`);
    modified = true;
  }

  if (modified) {
    const fragment = document.createDocumentFragment();
    newContent.forEach(content => fragment.appendChild(content));
    node.parentNode.replaceChild(fragment, node);
  }
}

if (matches.length > 0) {
  alert(`Gefundene Sonderzeichen: ${matches.length}\n\n` + matches.join("\n\n"));
} else {
  alert("Keine Em Dashes oder Sonder-Leerzeichen gefunden.");
}