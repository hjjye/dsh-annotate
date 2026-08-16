
<p align="center">
  <a href="README.md">中文</a> · <a href="README.en.md"><b>English</b></a>
</p>

<p align="center">
  <img alt="version" src="https://img.shields.io/badge/version-0.1.2-8b5cf6" />
  <img alt="license" src="https://img.shields.io/badge/license-MIT-green" />
  <img alt="platform" src="https://img.shields.io/badge/platform-DSH-blue" />
  <img alt="status" src="https://img.shields.io/badge/status-stable-brightgreen" />
</p>

**DSH Inline Annotation Plugin** (Codex-style): select a piece of text in a conversation → add an annotation → the annotation is sent as its own bubble along with the message, with the source text always traceable/editable.

> A pure DSH runtime plugin with no build toolchain (`lib/` is hand-written plain JS). No external configuration besides the GUI dependency — inject and use.

## Features

- **Select & annotate**: mouse-select text in the conversation/code → a floating「添加到对话」button appears → type your annotation (删除 / 取消 / 确定; Enter = confirm, Shift+Enter = newline).<img width="749" height="279" alt="screenshot" src="https://github.com/user-attachments/assets/9c14afeb-7e23-4abb-81a5-badfc63a20db" />

- **Composer bubble**: a frosted-glass「N条批注」bubble sits above the input box; hovering it opens a detail list, each item with **✎ edit / × delete** in its top-right corner.
- <img width="465" height="258" alt="screenshot" src="https://github.com/user-attachments/assets/8f969db7-26b4-4c86-84b9-1f490728395b" />

- **Source tracing**: each annotation gets a numbered badge at the top-right of its selected text; clicking edit **scrolls to the source**, highlights the selection, then opens the editor right next to it.
- **Send serialization**: on send, annotations are embedded at the top of the message as `/noteN` numbering + quoted text; the sent message merges them into one「N条批注」frosted bubble with hover to view/locate.
- **Frosted-glass look**: editor, detail tooltips and sent/composer bubbles all share a translucent glass material, readable under any theme.
<img width="713" height="365" alt="screenshot" src="https://github.com/user-attachments/assets/b445b08a-cfab-45d1-9247-d42abd440656" />

## One-click install

### Option A: install script (recommended)

```powershell
git clone https://github.com/hjjye/dsh-annotate.git
cd dsh-annotate
.\install.ps1
```

The script assembles the plugin into `~/.dsh/local-packages/dsh-annotate`, then run the injection inside a DSH session:

```bash
dev_inject_plugin C:\Users\<you>\\.dsh\\local-packages\\dsh-annotate
```

Refresh the page after injecting. Hot-reload / uninstall:

```bash
dev_reload_package dsh-annotate   # reload after code changes
dev_uninject_plugin dsh-annotate  # uninstall
```

### Option B: GitHub Release download

Every version is published on [Releases](https://github.com/hjjye/dsh-annotate/releases) (`v*` tag + `.tgz` asset). Extract the tgz into `~/.dsh/local-packages/dsh-annotate`, then use the Option A injection command to assemble.

### Option C: manual placement

1. Put the whole directory (including `package.json`, `lib/`) under DSH's `local-packages/`;
2. Load it as `@dsh-external/dsh-annotate` with any module loader / plugin assembly method.

### Option D: agent auto-install (easiest, safest)

Just copy the repo URL `https://github.com/hjjye/dsh-annotate` and hand it to DeepSeek Harness or any other agent tool — let it install the plugin for you.

## Directory layout

```
dsh-annotate/
├─ package.json     # package metadata (exports . / ./client, files: lib/README*/LICENSE/install.ps1)
├─ README.md        # Chinese
├─ README.en.md     # English
├─ LICENSE          # MIT
├─ install.ps1      # one-click install script (assembles into ~/.dsh/local-packages)
└─ lib/
   ├─ index.js      # host half (placeholder entry)
   └─ client.js     # client half (all UI + annotation logic, loaded via __ModuleLoader__)
```

## Notes

- Annotations are **draft-level**: they are cleared when the message is sent (no persistence), one round at a time.
- The plugin does not occupy DSH's right-hand `details` column; the tool-details panel stays untouched.
- The host half is an empty injection (all logic lives in the client), kept to satisfy DSH's module contract.

## License

[MIT](./LICENSE)
