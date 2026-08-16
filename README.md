

**DSH 行内批注插件**（Codex 风格）：在会话里框选一段文字 → 添加批注 → 批注作为独立气泡跟随消息发送，原文可随时追踪/编辑。

> 纯 DSH 运行时插件，不依赖构建链（`lib/` 为手写纯 JS 产物）。无 GUI 依赖以外的任何外部配置，注入即用。

## 功能

- **框选即批注**：鼠标框选会话/代码中的文字 → 冒出「添加到对话」→ 输入批注（删除 / 取消 / 确定，回车=确认、Shift+回车=换行）。<img width="749" height="279" alt="屏幕截图 2026-08-16 221158" src="https://github.com/user-attachments/assets/9c14afeb-7e23-4abb-81a5-badfc63a20db" />

- **主对话框气泡**：输入框上方显示「N条批注」玻璃气泡，悬停弹出详情列表，每条右上角有 **✎ 编辑 / × 删除**。
- <img width="465" height="258" alt="屏幕截图 2026-08-16 221329" src="https://github.com/user-attachments/assets/8f969db7-26b4-4c86-84b9-1f490728395b" />

- **原文追踪**：每条批注在所选文本右上角有编号气泡；点击编辑会**先滚动追踪到原文**、套上选文背景高亮，再在原文旁打开编辑框。
- **发送序列化**：发送时批注以 `/noteN` 编号 + 引用文本嵌入消息首部；发送消息里合并成「N条批注」玻璃气泡，悬停查看/定位。
- **毛玻璃外观**：编辑框、详情气泡、发送/主对话框气泡统一采用半透明玻璃质感，任何皮肤下都清晰。
<img width="713" height="365" alt="屏幕截图 2026-08-16 221600" src="https://github.com/user-attachments/assets/b445b08a-cfab-45d1-9247-d42abd440656" />

## 一键部署

### 方式 A：DSH 注入器（推荐）

本插件设计为配合 [dsh-super-injector](https://github.com/hjjye/dsh-super-injector) 运行时注入，无需构建：

```bash
# 在 DSH 会话内调用注入器工具
dev_inject_plugin C:\path\to\dsh-annotate
```

注入后刷新页面即可。热重载 / 卸载：

```bash
dev_reload_package dsh-annotate   # 改代码后重载
dev_uninject_plugin dsh-annotate  # 卸载
```

### 方式 B：手动放置

1. 把整个目录（含 `package.json`、`lib/`）放到 DSH 的 `local-packages/` 下；
2. 用任意模块加载器 / 插件装配方式将其作为 `@dsh-external/dsh-annotate` 装载。

## 目录结构

```
dsh-annotate/
├─ package.json     # 包元数据（exports . / ./client）
├─ README.md
└─ lib/
   ├─ index.js      # host 半区（占位入口）
   └─ client.js     # client 半区（全部 UI 与批注逻辑，__ModuleLoader__ 加载）
```

## 说明

- 批注为**草稿级**：发送后随消息清空（不落盘持久化），一轮一清。
- 本插件不占用 DSH 右侧 `details` 列，工具详情面板保持原样。
- host 半区为空注入（批注逻辑全在 client），保留 module 契约以符合 DSH 插件装配。

## License

[MIT](./LICENSE)
