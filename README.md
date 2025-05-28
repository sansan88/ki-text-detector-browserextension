# KI-Text-Detector Browser Extension

Diese Browser-Erweiterung erkennt Sonderzeichen und spezielle Leerzeichen auf der aktuellen Webseite, indem sie diese mit verschiedenen Farben hervorhebt. Dies macht es einfach, sie visuell zu identifizieren.

## ✨ Funktionen

- Hebt verschiedene Arten von Sonderzeichen und Leerzeichen hervor:
  - **Em-Dashes (—)** in gelb
  - **Schmale geschützte Leerzeichen ( )** in orange
  - **Geschützte Leerzeichen ( )** in rot
  - **Weiche Trennstriche (­)** in rot
- Zeigt einen Alert mit Textauszügen an, in denen Sonderzeichen gefunden wurden
- Funktioniert sowohl in **Google Chrome** als auch in **Mozilla Firefox**

## 🔍 Wie es funktioniert

Die Erweiterung durchsucht den gesamten Text der Webseite nach:
- Em-Dashes (Unicode: \u2014)
- Schmale geschützte Leerzeichen (Unicode: \u202F)
- Geschützte Leerzeichen (Unicode: \u00A0)
- Weiche Trennstriche (Unicode: \u00AD)

Gefundene Zeichen werden farblich hervorgehoben und in einer Übersicht aufgelistet.

---

## 🧩 Installation

### 🔵 Google Chrome

1. Öffnen Sie `chrome://extensions/` in Chrome
2. Aktivieren Sie den **Entwicklermodus** (oben rechts)
3. Klicken Sie auf **"Entpackte Erweiterung laden"**
4. Wählen Sie den Ordner `chrome` aus

### 🟠 Mozilla Firefox

1. Öffnen Sie `about:debugging#/runtime/this-firefox` in Firefox
2. Klicken Sie auf **"Temporäres Add-on laden..."**
3. Wählen Sie die `manifest.json`-Datei im Ordner `firefox` aus

---

## 📁 Ordnerstruktur

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

## 📝 Lizenz

MIT – Frei zur Verwendung, Modifikation und Weitergabe.
