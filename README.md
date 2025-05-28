# KI-Text-Detector Browser Extension

This extension detects special characters and spaces on the current web page by highlighting them with different colors, making it easy to visually identify them.

## ✨ Features

- Highlights different types of special characters and spaces:
  - **Em dashes (—)** in yellow
  - **Narrow non-breaking spaces ( )** in orange
  - **Non-breaking spaces ( )** in red
- Displays an alert with text excerpts where special characters were found
- Works in both **Google Chrome** and **Mozilla Firefox**

---

## 🧩 Installation

### 🔵 Google Chrome

1. Open `chrome://extensions/` in Chrome.
2. Enable **Developer mode** (top right).
3. Click **"Load unpacked"**.
4. Select the folder `chrome`.

### 🟠 Mozilla Firefox

1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Click **"Load Temporary Add-on..."**
3. Select the `manifest.json` file inside `firefox`.

---

## 📁 Folder Structure

```
ki-text-detector-browserextension/
├── chrome/
│   ├── manifest.json
│   ├── background.js
│   └── icons/
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
├── firefox/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   └── icons/
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
```

## 📝 License

MIT – Free to use, modify, and share.
