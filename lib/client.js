window.__ModuleLoader__.load({
	id: "@dsh-external/dsh-annotate",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		var React = require("react");

		var inject = ["slots"];
		var SOURCE = "dsh-annotate";

		var LS_DRAFT = "dsa-annotate:";

		var CSS = `
.dsa-add{position:fixed;z-index:2147483000;transform:translate(-50%,-120%);background:rgba(255,255,255,.09);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);color:#fff;border:1px solid rgba(97,135,216,.5);border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;cursor:pointer;pointer-events:auto;box-shadow:0 4px 14px rgba(0,0,0,.35);white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,.35)}
.dsa-add:hover{background:rgba(255,255,255,.16)}
.dsa-editor{position:fixed;z-index:2147483002;width:320px;transform:none;border:1px solid var(--dsw-alias-border-l2,#333);border-radius:10px;background:rgba(255,255,255,.09);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 10px 34px rgba(0,0,0,.45);padding:10px;display:flex;flex-direction:column;gap:8px;pointer-events:auto}
.dsa-editor-quote{font-size:11px;color:var(--dsw-alias-label-tertiary,#999);border-left:3px solid var(--dsw-alias-state-business-primary,#4a9eff);padding-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsa-textarea{width:100%;min-height:64px;resize:vertical;background:var(--dsw-alias-bg-layer-1,#1b1b1f);border:1px solid var(--dsw-alias-border-l2,#444);border-radius:7px;color:var(--dsw-alias-label-primary,#eee);font-size:13px;padding:8px;box-sizing:border-box;font-family:inherit}
.dsa-editor-actions{display:flex;justify-content:flex-end;gap:8px}
.dsa-btn{font-size:12px;border:1px solid var(--dsw-alias-border-l2,#444);background:transparent;color:var(--dsw-alias-label-primary,#eee);border-radius:6px;padding:5px 12px;cursor:pointer}
.dsa-btn:hover{border-color:var(--dsw-alias-state-business-primary,#4a9eff);color:var(--dsw-alias-state-business-primary,#4a9eff)}
.dsa-btn.primary{background:var(--dsw-alias-state-business-primary,#4a9eff);border-color:var(--dsw-alias-state-business-primary,#4a9eff);color:#fff}
.dsa-btn.danger:hover{border-color:#e5484d;color:#e5484d}
.dsa-badge{position:fixed;z-index:2147483001;min-width:22px;height:22px;border-radius:50%;background:var(--dsw-alias-state-business-primary,#4a9eff);color:#fff;font-size:12px;font-weight:700;line-height:22px;text-align:center;cursor:pointer;pointer-events:auto;padding:0 6px;transform:translate(-100%,-100%);box-shadow:0 2px 6px rgba(0,0,0,.35);transition:transform .12s}
.dsa-badge:hover{transform:translate(-100%,-100%) scale(1.15)}
.dsa-tooltip{position:fixed;z-index:2147483003;width:320px;transform:translate(0,-100%);border:1px solid var(--dsw-alias-border-l2,#333);border-radius:10px;background:rgba(255,255,255,.09);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 28px rgba(0,0,0,.4);padding:10px;display:flex;flex-direction:column;gap:6px;pointer-events:none}
.dsa-rail{width:100%;max-width:var(--dsh-composer-card-max-width);margin:0 auto;display:flex;flex-wrap:wrap;gap:6px;padding:0 6px;box-sizing:border-box}
.dsa-rail-item{display:inline-flex;align-items:center;gap:6px;box-sizing:border-box;border:1px solid rgba(97,135,216,.5);background:rgba(255,255,255,.09);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);border-radius:14px;padding:3px 10px 3px 5px;font-size:12px;line-height:18px;cursor:pointer;transition:background .15s,box-shadow .15s,border-color .15s}
.dsa-rail-item:hover{background:rgba(255,255,255,.16);border-color:rgba(97,135,216,.7)}
.dsa-rail-n{width:22px;height:22px;border-radius:50%;background:var(--dsw-alias-state-business-primary,#4a9eff);color:#fff;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex:none}
.dsa-rail-count{color:var(--dsw-alias-label-secondary,#bbb);white-space:nowrap}
.dsa-tooltip-lbl{color:var(--dsw-alias-label-tertiary,#999);font-size:11px;flex:none}
.dsa-tooltip-row{display:flex;gap:6px;align-items:baseline}
.dsa-tooltip-qtext{color:var(--dsw-alias-state-business-primary,#4a9eff);font-style:italic;white-space:pre-wrap;word-break:break-word;font-size:12px}
.dsa-tooltip-ctext{color:var(--dsw-alias-label-primary,#eee);white-space:pre-wrap;word-break:break-word;font-size:13px}
.dsa-msg-pill{display:inline-flex;align-items:center;gap:6px;box-sizing:border-box;border:1px solid rgba(97,135,216,.5);background:rgba(255,255,255,.09);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);border-radius:14px;padding:3px 11px 3px 4px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-primary,#eee);cursor:pointer;margin:2px 2px 2px 0;transition:background .15s,box-shadow .15s,border-color .15s}
.dsa-msg-pill:hover{background:rgba(255,255,255,.16);border-color:rgba(97,135,216,.7);box-shadow:0 2px 8px rgba(0,0,0,.25)}
.dsa-msg-pill .dsa-msg-n{width:22px;height:22px;border-radius:50%;background:var(--dsw-alias-state-business-primary,#4a9eff);color:#fff;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex:none}
.dsa-msg-pill .dsa-msg-count{color:var(--dsw-alias-label-secondary,#bbb);white-space:nowrap}
.dsa-msg-tip{position:fixed;z-index:2147483003;width:320px;transform:translate(0,-100%);border:1px solid var(--dsw-alias-border-l2,#333);border-radius:10px;background:rgba(255,255,255,.09);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 28px rgba(0,0,0,.4);padding:10px;display:flex;flex-direction:column;gap:6px;pointer-events:auto;max-height:60vh;overflow-y:auto}
.dsa-msg-tip-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
.dsa-msg-tip-actions{display:none;gap:4px}
.dsa-msg-tip-act{width:18px;height:18px;border-radius:50%;border:none;background:rgba(140,140,150,.2);color:var(--dsw-alias-label-secondary,#bbb);font-size:11px;line-height:16px;cursor:pointer;padding:0;display:inline-flex;align-items:center;justify-content:center}
.dsa-msg-tip-act:hover{color:#fff;background:rgba(140,140,150,.45)}
.dsa-msg-tip-act.edit:hover{background:var(--dsw-alias-state-business-primary,#4a9eff);color:#fff}
.dsa-msg-tip-act.del:hover{background:#e5484d;color:#fff}
.dsa-msg-tip-head{font-size:12px;font-weight:700;color:var(--dsw-alias-label-primary,#eee);margin-bottom:2px}
.dsa-msg-tip-item{display:flex;flex-direction:column;gap:4px}
.dsa-msg-tip-lbl{color:var(--dsw-alias-label-tertiary,#999);font-size:11px;flex:none}
.dsa-msg-tip-q{display:flex;gap:6px;font-size:12px;align-items:baseline}
.dsa-msg-tip-qtext{color:var(--dsw-alias-state-business-primary,#4a9eff);font-style:italic;white-space:pre-wrap;word-break:break-word}
.dsa-msg-tip-c{display:flex;gap:6px;font-size:13px;align-items:baseline}
.dsa-msg-tip-ctext{color:var(--dsw-alias-label-primary,#eee);white-space:pre-wrap;word-break:break-word}
.dsa-msg-tip-sep{border-top:1px solid var(--dsw-alias-border-l2,#333);margin:6px 0 4px}
[data-dsa-flash]{box-shadow:0 0 0 2px rgba(74,158,255,.65);border-radius:4px}
mark.dsa-edit-hl{background:rgba(74,158,255,.28);color:inherit;border-radius:2px;padding:0 1px}
`;

		// =====================================================================
		// 模块级共享状态：dock(session) 维护批注列表，overlay/sidebar 读取
		// 批注不进入草稿文本（避免占位符破坏输入框），发送时�?prompt 包装注入消息
		// =====================================================================
		var state = {
			sessions: {}, // sessionId -> { list: [ {id,n,q,c,prefix,suffix} ] }
			handlers: {}, // sessionId -> { add, remove, update }
		};

		function emitChange() {
			try {
				document.dispatchEvent(new CustomEvent("dsa-annotate-change"));
			} catch (e) { /* ignore */ }
		}

		function newId() {
			return "a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
		}

		function clampX(x) {
			return Math.max(8, Math.min(window.innerWidth - 330, x));
		}
		function clampY(y) {
			return Math.max(8, Math.min(window.innerHeight - 60, y));
		}
		function truncate(s, n) {
			s = String(s);
			return s.length > n ? s.slice(0, n) + "\u2026" : s;
		}

		// ---- 本地持久化 ----
		function readSaved(sessionId) {
			try {
				var v = JSON.parse(localStorage.getItem(LS_DRAFT + sessionId) || "null");
				return Array.isArray(v) ? v : null;
			} catch (e) { return null; }
		}
		function persistDraftList(sessionId, list) {
			try { localStorage.setItem(LS_DRAFT + sessionId, JSON.stringify(list)); } catch (e) { /* ignore */ }
		}

		// ---- 发送时序列化：批注作为消息第一段文本；发送成功后清空草稿批注 ----
		function buildAnnotationText(sessionId) {
			var sess = state.sessions[sessionId];
			if (!sess || !sess.list.length) return "";
			// 用户消息是纯文本渲染（仅 /@token 会变成胶囊），因此用 /noteN 编号胶囊（真气泡）
			// + 结构化文本呈现每条批注，与主文区分
			return sess.list.map(function (a) {
				var q = String(a.q).replace(/\s+/g, " ").trim();
				var c = String(a.c).replace(/\s+/g, " ").trim();
				return "/note" + a.n + " \u25B8 \u9009\u6587\uFF1A" + q + " \u270E \u6279\u6CE8\uFF1A" + c;
			}).join("\n");
		}
		function clearDraftAnnotations(sessionId) {
			var sess = state.sessions[sessionId];
			if (sess && sess.list.length) {
				sess.list = [];
				persistDraftList(sessionId, []);
				emitChange();
			}
		}

		// ---- 跨文本节点定位原文（探针可跨相邻节点拼接命中；前后缀上下文消歧）----
		function collectTextNodes() {
			var nodes = [];
			var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
			var n;
			while ((n = walker.nextNode())) {
				var p = n.parentElement;
				if (!p) continue;
				if (p.closest("[data-dsa-ui]")) continue;
				if (p.closest("[data-composer-card]")) continue;
				if (p.closest("script,style,noscript,textarea,input,select")) continue;
				nodes.push(n);
			}
			return nodes;
		}
		// 选区上下文：跨节点取被选文字前/后各 len 字符（用于更稳的原文锚定）
		function captureSelectionContext(range, len) {
			len = len || 100;
			var startContainer = range.startContainer;
			var endContainer = range.endContainer;
			var startOffset = range.startOffset;
			var endOffset = range.endOffset;
			var nodes = collectTextNodes();
			var si = -1;
			var ei = -1;
			for (var i = 0; i < nodes.length; i++) {
				if (si === -1 && nodes[i] === startContainer) si = i;
				if (ei === -1 && nodes[i] === endContainer) ei = i;
			}
			if (si === -1 && startContainer.nodeType === 1) {
				for (var j = 0; j < nodes.length; j++) {
					if (startContainer.contains(nodes[j])) { si = j; break; }
				}
			}
			if (ei === -1 && endContainer.nodeType === 1) {
				for (var k = nodes.length - 1; k >= 0; k--) {
					if (endContainer.contains(nodes[k])) { ei = k; break; }
				}
			}
			if (si === -1) si = 0;
			if (ei === -1) ei = nodes.length - 1;
			return {
				prefix: contextBefore(nodes, si, startOffset, len),
				suffix: contextAfter(nodes, ei, endOffset, len),
			};
		}
		function contextBefore(nodes, nodeIndex, offset, len) {
			var collected = "";
			var i = nodeIndex;
			var end = offset;
			while (i >= 0 && collected.length < len) {
				var node = nodes[i];
				var text = node.nodeValue || "";
				var take = Math.min(end, len - collected.length);
				if (take > 0) collected = text.slice(end - take, end) + collected;
				end = text.length;
				i--;
			}
			return collected.slice(-len);
		}
		function contextAfter(nodes, nodeIndex, offset, len) {
			var collected = "";
			var i = nodeIndex;
			var start = offset;
			while (i < nodes.length && collected.length < len) {
				var node = nodes[i];
				var text = node.nodeValue || "";
				var take = Math.min(text.length - start, len - collected.length);
				if (take > 0) collected += text.slice(start, start + take);
				start = 0;
				i++;
			}
			return collected.slice(0, len);
		}
		function tryMatchAcross(nodes, nodeIndex, offset, probe) {
			// 空白容错匹配：逐字符比较，任一侧的空白可被跳过（跨块选区带来的换行/空格差异都能命中）
			var startNode = nodes[nodeIndex];
			var startOffset = offset;
			var i = nodeIndex;
			var nodeOffset = offset;
			var pi = 0;
			var lastSig = null; // 最后一个非空白探针字符的位置
			while (i < nodes.length && pi < probe.length) {
				var node = nodes[i];
				var text = node.nodeValue || "";
				if (nodeOffset >= text.length) { i += 1; nodeOffset = 0; continue; }
				var pc = probe.charAt(pi);
				var tc = text.charAt(nodeOffset);
				if (pc === tc) {
					if (!/\s/.test(pc)) lastSig = { node: node, off: nodeOffset + 1 };
					pi += 1;
					nodeOffset += 1;
				} else if (/\s/.test(pc)) {
					pi += 1;
				} else if (/\s/.test(tc)) {
					nodeOffset += 1;
				} else {
					return null;
				}
			}
			if (pi < probe.length) return null;
			if (!lastSig) return null;
			try {
				var range = document.createRange();
				range.setStart(startNode, startOffset);
				range.setEnd(lastSig.node, lastSig.off);
				return { range: range, endIndex: nodes.indexOf(lastSig.node), endOffset: lastSig.off };
			} catch (e) { return null; }
		}
		function findQuoteRange(q, prefix, suffix) {
			if (!q) return null;
			// 探针：空白折叠版 + 长度递进（配合空白容错匹配器，跨�?内部空格的引文都能命中）
			var collapsed = q.replace(/\s+/g, " ");
			var probes = [collapsed];
			var lens = [40, 20, 10];
			for (var li = 0; li < lens.length; li++) {
				if (collapsed.length > lens[li]) probes.push(collapsed.slice(0, lens[li]));
			}
			var seen = {};
			probes = probes.filter(function (p) { if (!p || seen[p]) return false; seen[p] = true; return true; });
			var nodes = collectTextNodes();
			var best = null;
			var bestScore = -1;
			for (var pi = 0; pi < probes.length; pi++) {
				var probe = probes[pi];
				var firstChar = probe.charAt(0);
				for (var si = 0; si < nodes.length; si++) {
					var node = nodes[si];
					var text = node.nodeValue || "";
					var searchFrom = 0;
					var idx;
					while ((idx = text.indexOf(firstChar, searchFrom)) !== -1) {
						searchFrom = idx + 1;
						var matched = tryMatchAcross(nodes, si, idx, probe);
						if (!matched) continue;
						var before = contextBefore(nodes, si, idx, 120);
						var after = contextAfter(nodes, matched.endIndex, matched.endOffset, 120);
						var score = probe.length;
						var nb = before.replace(/\s+/g, " ");
						var na = after.replace(/\s+/g, " ");
						var np = (prefix || "").replace(/\s+/g, " ").trim();
						var ns = (suffix || "").replace(/\s+/g, " ").trim();
						// 命中点在"发送消息里的批注卡片/序列化"中 → 重罚（应定位到原文而非发送副本）
						// 覆盖旧序列化 【批注N】「...」 与新卡片 **批注N** ▸被选文字：... ✎批注：...）
						if (nb.indexOf("\u3010\u6279\u6CE8") !== -1 && nb.charAt(nb.length - 1) === "\u300C") score -= 800;
						if (nb.indexOf("**\u6279\u6CE8") !== -1 || nb.indexOf("\u25B8 \u88AB\u9009\u6587\u5B57") !== -1 || nb.indexOf("\u25B8 \u9009\u6587") !== -1 || nb.indexOf("> **") !== -1) score -= 800;
						if (nb.indexOf("> ") !== -1 && nb.indexOf("> **") === -1 && nb.charAt(0) === ">") score -= 400;
						if (np) {
							if (nb.indexOf(np) !== -1) score += 300;
							else if (nb.slice(-np.length) === np) score += 250;
						}
						if (ns) {
							if (na.indexOf(ns) !== -1) score += 200;
							else if (na.slice(0, ns.length) === ns) score += 150;
						}
						if (score > bestScore) {
							bestScore = score;
							best = matched.range;
						}
					}
				}
			}
			return best;
		}

		// ---- 消息气泡渲染层：把用户消息里�?/noteN ▸…✎�?批注行替换成小气泡（悬停显示详情�?---
		var msgTip = null;
		var msgTipHover = false;
		var msgTipHideTimer = null;
		var msgTipCtx = null; // 当前详情气泡上下�?{ items, anchor, interactive }
		var editorOpeners = {}; // sessionId -> fn(ann)：在原文位置打开编辑框
		function ensureMsgTip() {
			if (msgTip) return msgTip;
			msgTip = document.createElement("div");
			msgTip.className = "dsa-msg-tip";
			msgTip.style.display = "none";
			document.body.appendChild(msgTip);
			// 可停留：鼠标移进详情气泡不消失
			msgTip.addEventListener("mouseenter", function () {
				msgTipHover = true;
				if (msgTipHideTimer) clearTimeout(msgTipHideTimer);
			});
			msgTip.addEventListener("mouseleave", function () {
				msgTipHover = false;
				scheduleHideMsgTip();
			});
			return msgTip;
		}
		function scheduleHideMsgTip() {
			if (msgTipHideTimer) clearTimeout(msgTipHideTimer);
			msgTipHideTimer = setTimeout(function () {
				if (!msgTipHover) hideMsgTip();
			}, 160);
		}
		function editAnnotationFromTip(it) {
			var sess = state.sessions[it.sessionId];
			if (!sess) return;
			var ann = null;
			for (var i = 0; i < sess.list.length; i++) {
				if (sess.list[i].id === it.id) { ann = sess.list[i]; break; }
			}
			if (!ann) return;
			hideMsgTip();
			var opener = editorOpeners[it.sessionId];
			if (opener) opener(ann);
		}
		function deleteAnnotationFromTip(it) {
			var h = state.handlers[it.sessionId];
			if (h) h.remove(it.id);
			// 删除后不关闭详情：用剩余批注重渲染（删光才关闭），方便连续删除
			setTimeout(function () {
				var sess = state.sessions[it.sessionId];
				var remaining = sess ? sess.list : [];
				if (!remaining.length) { hideMsgTip(); return; }
				var items = remaining.map(function (a) { return { n: a.n, q: a.q, c: a.c, id: a.id, sessionId: it.sessionId }; });
				var anchor = msgTipCtx ? msgTipCtx.anchor : null;
				if (!anchor || !anchor.isConnected) {
					anchor = document.querySelector(".dsa-rail-item[data-dsa-rail-items]");
				}
				if (anchor) showMsgTipForItems(items, anchor, true);
				else hideMsgTip();
			}, 0);
		}
		function createTipItem(it, interactive) {
			var item = document.createElement("div");
			item.className = "dsa-msg-tip-item";
			var topRow = document.createElement("div");
			topRow.className = "dsa-msg-tip-top";
			var head = document.createElement("div");
			head.className = "dsa-msg-tip-head";
			head.textContent = "\u6279\u6CE8" + it.n;
			topRow.appendChild(head);
			if (interactive && it.id) {
				var actions = document.createElement("div");
				actions.className = "dsa-msg-tip-actions";
				var editBtn = document.createElement("button");
				editBtn.className = "dsa-msg-tip-act edit";
				editBtn.textContent = "\u270E";
				editBtn.title = "\u7F16\u8F91\uFF08\u8DF3\u8F6C\u539F\u6587\uFF09";
				editBtn.addEventListener("click", function (e) { e.stopPropagation(); editAnnotationFromTip(it); });
				var delBtn = document.createElement("button");
				delBtn.className = "dsa-msg-tip-act del";
				delBtn.textContent = "\u00D7";
				delBtn.title = "\u5220\u9664\u8FD9\u6761\u6279\u6CE8";
				delBtn.addEventListener("click", function (e) { e.stopPropagation(); deleteAnnotationFromTip(it); });
				actions.appendChild(editBtn);
				actions.appendChild(delBtn);
				item.addEventListener("mouseenter", function () { actions.style.display = "inline-flex"; });
				item.addEventListener("mouseleave", function () { actions.style.display = "none"; });
				topRow.appendChild(actions);
			}
			item.appendChild(topRow);
			var qRow = document.createElement("div");
			qRow.className = "dsa-msg-tip-q";
			var qLabel = document.createElement("span");
			qLabel.className = "dsa-msg-tip-lbl";
			qLabel.textContent = "\u25B8 \u9009\u6587\uFF1A";
			var qText = document.createElement("span");
			qText.className = "dsa-msg-tip-qtext";
			qText.textContent = it.q;
			qRow.appendChild(qLabel);
			qRow.appendChild(qText);
			var cRow = document.createElement("div");
			cRow.className = "dsa-msg-tip-c";
			var cLabel = document.createElement("span");
			cLabel.className = "dsa-msg-tip-lbl";
			cLabel.textContent = "\u270E \u6279\u6CE8\uFF1A";
			var cText = document.createElement("span");
			cText.className = "dsa-msg-tip-ctext";
			cText.textContent = it.c;
			cRow.appendChild(cLabel);
			cRow.appendChild(cText);
			item.appendChild(qRow);
			item.appendChild(cRow);
			return item;
		}
		function showMsgTipForItems(items, pill, interactive) {
			var tip = ensureMsgTip();
			tip.innerHTML = "";
			for (var i = 0; i < items.length; i++) {
				tip.appendChild(createTipItem(items[i], interactive));
				if (i < items.length - 1) {
					var sep = document.createElement("div");
					sep.className = "dsa-msg-tip-sep";
					tip.appendChild(sep);
				}
			}
			var r = pill.getBoundingClientRect();
			var below = r.top < 260;
			tip.style.transform = below ? "none" : "translate(0,-100%)";
			tip.style.left = Math.max(8, Math.min(window.innerWidth - 330, r.left)) + "px";
			tip.style.top = (below ? r.bottom + 6 : r.top - 6) + "px";
			tip.style.pointerEvents = "auto";
			tip.style.display = "block";
			msgTipCtx = { items: items, anchor: pill, interactive: interactive };
		}
		function hideMsgTip() {
			if (msgTip) msgTip.style.display = "none";
			msgTipHover = false;
			if (msgTipHideTimer) clearTimeout(msgTipHideTimer);
		}
		function renderAnnotationCards() {
			// 按用户消息气泡为单位，把其中的 /noteN ▸…✎… 批注行合并成单个「X条批注」气泡
			var bubbles = document.querySelectorAll('[class*="userRow"]');
			for (var b = 0; b < bubbles.length; b++) {
				var bubble = bubbles[b];
				if (bubble.querySelector('[data-dsa-msg-card]')) continue; // 已处理
				var chips = bubble.querySelectorAll('[data-ref-chip]');
				var items = [];
				for (var i = 0; i < chips.length; i++) {
					var chip = chips[i];
					if (chip.getAttribute("data-dsa-done")) continue;
					var m = /^\/note(\d+)$/.exec((chip.textContent || "").trim());
					if (!m) continue;
					var next = chip.nextSibling;
					while (next && next.nodeType === 3 && !(next.textContent || "").trim()) next = next.nextSibling;
					if (!next || next.nodeType !== 1) continue;
					var t = next.textContent || "";
					if (t.indexOf("\u9009\u6587\uFF1A") === -1) continue;
					var q = "";
					var c = "";
					var iQ = t.indexOf("\u9009\u6587\uFF1A");
					if (iQ !== -1) {
						var afterQ = t.slice(iQ + "\u9009\u6587\uFF1A".length);
						var iC = afterQ.indexOf("\u270E \u6279\u6CE8\uFF1A");
						if (iC !== -1) {
							q = afterQ.slice(0, iC).trim();
							c = afterQ.slice(iC + "\u270E \u6279\u6CE8\uFF1A".length).split("\n")[0].trim();
						} else {
							q = afterQ.split("\n")[0].trim();
						}
					}
					items.push({ n: parseInt(m[1], 10), q: q, c: c, chip: chip, next: next });
				}
				if (!items.length) continue;
				items.sort(function (a, b) { return a.n - b.n; });
				// 隐藏所有原始 chip + 批注行文本（保留其后剩余文本，如主文）
				for (var j = 0; j < items.length; j++) {
					var it = items[j];
					it.chip.style.display = "none";
					it.chip.setAttribute("data-dsa-done", "1");
					var full = it.next.textContent || "";
					var nl = full.indexOf("\n");
					if (nl === -1) {
						if (it.next.style) it.next.style.display = "none";
					} else {
						var remainder = full.slice(nl + 1);
						while (it.next.firstChild) it.next.removeChild(it.next.firstChild);
						it.next.textContent = remainder;
					}
				}
				// 合并气泡
				var data = items.map(function (x) { return { n: x.n, q: x.q, c: x.c }; });
				var pill = document.createElement("div");
				pill.className = "dsa-msg-pill";
				pill.setAttribute("data-dsa-msg-card", "1");
				pill.setAttribute("data-dsa-count", String(items.length));
				pill.setAttribute("data-dsa-items", JSON.stringify(data));
				pill.title = "\u60AC\u505C\u67E5\u770B\u8BE6\u60C5";
				var badge = document.createElement("span");
				badge.className = "dsa-msg-n";
				badge.textContent = String(items.length);
				var countTxt = document.createElement("span");
				countTxt.className = "dsa-msg-count";
				countTxt.textContent = "\u6761\u6279\u6CE8";
				pill.appendChild(badge);
				pill.appendChild(countTxt);
				pill.addEventListener("mouseenter", function () {
					try { showMsgTipForItems(JSON.parse(pill.getAttribute("data-dsa-items") || "[]"), pill); } catch (e) { /* ignore */ }
				});
				pill.addEventListener("mouseleave", scheduleHideMsgTip);
				items[0].chip.parentNode.insertBefore(pill, items[0].chip);
			}
		}

		// 取 Range 首行矩形（所选文本的"右上角"以首行为准，多行时更准）
		function firstLineRect(range) {
			try {
				var rects = range.getClientRects ? range.getClientRects() : null;
				if (rects && rects.length && rects[0] && (rects[0].width > 0 || rects[0].height > 0)) return rects[0];
			} catch (e) { /* ignore */ }
			try {
				var r = range.getBoundingClientRect();
				if (r && (r.width > 0 || r.height > 0)) return r;
			} catch (e) { /* ignore */ }
			return null;
		}
		// 编辑框左上角位置：与所选文本右上角的编号气泡接壤（气泡中心约在 rect 右上角，半径约11px）
		function editorPosFromRect(rect) {
			return { left: rect.right + 14, top: rect.top - 11 };
		}

		// ---- 编辑时的原文持续高亮（选文背景色，<mark> 包裹，关闭编辑框才移除）----
		var editHlMark = null;
		function highlightQuoteRange(range) {
			try {
				var contents = range.extractContents();
				var mark = document.createElement("mark");
				mark.className = "dsa-edit-hl";
				mark.appendChild(contents);
				range.insertNode(mark);
				return mark;
			} catch (e) { return null; }
		}
		function clearEditHighlight() {
			if (editHlMark && editHlMark.parentNode) {
				try {
					var parent = editHlMark.parentNode;
					while (editHlMark.firstChild) parent.insertBefore(editHlMark.firstChild, editHlMark);
					parent.removeChild(editHlMark);
				} catch (e) { /* ignore */ }
			}
			editHlMark = null;
		}

		// =====================================================================
		// Overlay：选区监听 → 添加到对话 → 输入框(删除/取消/确定)；原文角标
		// =====================================================================
		function AnnotateOverlay(props) {
			var useSessions = props.useSessions;
			var sessionId = useSessions(function (s) { return s.current; });

			var [pending, setPending] = React.useState(null);
			var [editor, setEditor] = React.useState(null);
			var [, forceTick] = React.useReducer(function (x) { return x + 1; }, 0);

			React.useEffect(function () {
				function onMouseUp() {
					setTimeout(function () {
						if (!sessionId) return;
						var sel = window.getSelection();
						if (!sel || sel.isCollapsed) {
							setPending(null);
							return;
						}
						var range = sel.getRangeAt(0);
						var startEl = range.startContainer.nodeType === 1 ? range.startContainer : range.startContainer.parentElement;
						if (startEl && startEl.closest && startEl.closest("[data-dsa-ui]")) return;
						var quote = sel.toString().replace(/\s+/g, " ").trim();
						if (!quote) return;
						// 按钮定位用选区整体包围盒（跨行内元素时 getClientRects 会退化，包围盒稳定）
						var rect = range.getBoundingClientRect();
						if (!rect || (rect.width === 0 && rect.height === 0)) return;
						// 编辑框定位用首行右上角（与编号气泡接壤）
						var fr = firstLineRect(range);
						var ctx = captureSelectionContext(range, 100);
						setPending({
							quote: quote,
							prefix: ctx.prefix,
							suffix: ctx.suffix,
							cx: rect.left + rect.width / 2,
							top: rect.top,
							right: fr ? fr.right : rect.right,
							firstTop: fr ? fr.top : rect.top,
						});
					}, 0);
				}
				document.addEventListener("mouseup", onMouseUp);
				return function () { document.removeEventListener("mouseup", onMouseUp); };
			}, [sessionId]);

			React.useEffect(function () {
				var timer = null;
				function tickNow() { forceTick(); }
				function tickThrottled() {
					if (timer) return;
					timer = setTimeout(function () { timer = null; forceTick(); }, 250);
				}
				document.addEventListener("dsa-annotate-change", tickNow);
				window.addEventListener("scroll", tickNow, true);
				window.addEventListener("resize", tickNow);
				var mo = new MutationObserver(tickThrottled);
				mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["style"] });
				return function () {
					document.removeEventListener("dsa-annotate-change", tickNow);
					window.removeEventListener("scroll", tickNow, true);
					window.removeEventListener("resize", tickNow);
					if (timer) clearTimeout(timer);
					mo.disconnect();
				};
			}, []);

			// 消息气泡渲染层：把已发送消息里的批注行替换成大气泡卡片（渲染后 + DOM 变化时重扫）
			React.useEffect(function () {
				try { renderAnnotationCards(); } catch (e) { /* ignore */ }
			});

			// 注册"从详情气泡点编辑 → 跳转原文 + 高亮闪烁 + 打开编辑框"的入口
			React.useEffect(function () {
				editorOpeners[sessionId] = function (ann) {
					var range = findQuoteRange(ann.q, ann.prefix, ann.suffix);
					if (range) {
						var el = range.startContainer.nodeType === 3 ? range.startContainer.parentElement : range.startContainer;
						if (el) {
							try { el.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) { el.scrollIntoView(); }
						}
						// 先滚动追踪到原文，等滚动完成后再取新坐标打开编辑框，并给原文套上持续高亮
						setTimeout(function () {
							clearEditHighlight();
							var range2 = findQuoteRange(ann.q, ann.prefix, ann.suffix);
							var pos = { left: Math.round(window.innerWidth / 2), top: 120 };
							if (range2) {
								var rect2 = firstLineRect(range2);
								if (rect2) pos = editorPosFromRect(rect2);
								editHlMark = highlightQuoteRange(range2);
							}
							setEditor({ mode: "edit", id: ann.id, quote: ann.q, left: pos.left, top: pos.top, draft: ann.c });
						}, 250);
					} else {
						clearEditHighlight();
						setEditor({ mode: "edit", id: ann.id, quote: ann.q, left: Math.round(window.innerWidth / 2), top: 120, draft: ann.c });
					}
				};
				return function () {
					if (editorOpeners[sessionId]) delete editorOpeners[sessionId];
				};
			}, [sessionId]);

			function confirmEditor() {
				if (!editor || !editor.draft.trim()) return;
				var h = state.handlers[sessionId];
				if (editor.mode === "edit") {
					if (h) h.update(editor.id, editor.draft.trim());
					clearEditHighlight();
					setEditor(null);
				} else {
					if (h) h.add({ q: editor.quote, c: editor.draft.trim(), prefix: editor.prefix, suffix: editor.suffix });
					setEditor(null);
					setPending(null);
					if (window.getSelection) window.getSelection().removeAllRanges();
				}
			}

			function deleteEditor() {
				if (!editor) return;
				if (editor.mode === "edit") {
					var h = state.handlers[sessionId];
					if (h) h.remove(editor.id);
					clearEditHighlight();
					setEditor(null);
				} else {
					setEditor(function (c) { return Object.assign({}, c, { draft: "" }); });
				}
			}

			function cancelEditor() {
				clearEditHighlight();
				setEditor(null);
			}

			var view = state.sessions[sessionId];
			var badgeItems = [];
			if (view) {
				for (var bi = 0; bi < view.list.length; bi++) {
					var a = view.list[bi];
					var br = findQuoteRange(a.q, a.prefix, a.suffix);
					if (br) {
						var rect = firstLineRect(br);
						if (rect) badgeItems.push({ ann: a, rect: rect });
					}
				}
			}

			return React.createElement(
				React.Fragment,
				null,
				badgeItems.map(function (b) {
					return React.createElement(
						"button",
						{
							key: "b-" + b.ann.id,
							"data-dsa-ui": "1",
							className: "dsa-badge",
							title: "\u6279\u6CE8" + b.ann.n + "\uFF08\u70B9\u51FB\u4FEE\u6539\uFF09",
							style: { left: b.rect.right + "px", top: b.rect.top + "px" },
							onMouseDown: function (e) { e.stopPropagation(); },
							onClick: function () {
								var opener = editorOpeners[sessionId];
								if (opener) opener(b.ann);
							},
						},
						String(b.ann.n)
					);
				}),
				pending && !editor
					? React.createElement(
						"button",
						{
							"data-dsa-ui": "1",
							className: "dsa-add",
							style: { left: clampX(pending.cx) + "px", top: clampY(pending.top) + "px" },
							onClick: function () {
								var pos = editorPosFromRect({ right: pending.right, top: pending.firstTop });
								setEditor({ mode: "add", quote: pending.quote, prefix: pending.prefix, suffix: pending.suffix, left: pos.left, top: pos.top, draft: "" });
								setPending(null);
							},
						},
						"\u6DFB\u52A0\u5230\u5BF9\u8BDD"
					)
					: null,
				editor
					? React.createElement(
						"div",
						{
							"data-dsa-ui": "1",
							className: "dsa-editor",
							style: { left: clampX(editor.left) + "px", top: clampY(editor.top) + "px" },
						},
						React.createElement("div", { className: "dsa-editor-quote" }, truncate(editor.quote, 80)),
						React.createElement("textarea", {
							className: "dsa-textarea",
							placeholder: "\u5199\u6279\u6CE8\u2026",
							autoFocus: true,
							value: editor.draft,
							onChange: function (e) {
								setEditor(function (c) { return Object.assign({}, c, { draft: e.target.value }); });
							},
							onKeyDown: function (e) {
								// 回车 = 确认（确定）；Shift+回车 = 换行
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									confirmEditor();
								}
							},
						}),
						React.createElement(
							"div",
							{ className: "dsa-editor-actions" },
							React.createElement(
								"button",
								{ className: "dsa-btn danger", onClick: deleteEditor },
								"\u5220\u9664"
							),
							React.createElement(
								"button",
								{ className: "dsa-btn", onClick: cancelEditor },
								"\u53D6\u6D88"
							),
							React.createElement(
								"button",
								{ className: "dsa-btn primary", onClick: confirmEditor },
								"\u786E\u5B9A"
							)
						)
					)
					: null
			);
		}

		// =====================================================================
		// 历史侧边栏（真实布局列：details 列；仅「批注历史」Tab 生效时占用）
		// =====================================================================
		// =====================================================================
		// Dock：批注气泡行（输入框上方）+ 会话批注列表维护（不进入草稿）
		// =====================================================================
		function DockWiring(props) {
			var sessionId = props.sessionId;
			var useInput = props.useInput;
			var inputActions = props.inputActions;
			var [, forceTick] = React.useReducer(function (x) { return x + 1; }, 0);

			var stateRef = React.useRef(null);
			stateRef.current = useInput(function (s) { return s; });

			React.useEffect(function () {
				function on() { forceTick(); }
				document.addEventListener("dsa-annotate-change", on);
				return function () { document.removeEventListener("dsa-annotate-change", on); };
			}, []);

			// 批注不在草稿里，发送按钮要�?draft 非空 �?有批注时在草稿最前面放一个零宽空格，
			// "只有批注"也能发送；批注清空后移除（发送成功后草稿会被机器整体清空，含该零宽空格）
			function syncSendEnablement() {
				try {
					var st = stateRef.current;
					if (!st || !inputActions) return;
					var list = state.sessions[sessionId] ? state.sessions[sessionId].list : [];
					var has = list.length > 0;
					var hasZwsp = st.draft.indexOf("\u200B") !== -1;
					if (has && !hasZwsp) {
						inputActions.setDraft("\u200B" + st.draft);
					} else if (!has && hasZwsp) {
						inputActions.setDraft(st.draft.replace(/\u200B/g, ""));
					}
				} catch (e) { /* ignore */ }
			}

			// 注册本会话的 add/remove/update 句柄
			React.useEffect(function () {
				if (!state.sessions[sessionId]) state.sessions[sessionId] = { list: [] };
				var sess = state.sessions[sessionId];
				state.handlers[sessionId] = {
					add: function (ann) {
						var n = 1;
						for (var i = 0; i < sess.list.length; i++) n = Math.max(n, sess.list[i].n + 1);
						var id = newId();
						sess.list.push({ id: id, n: n, q: ann.q, c: ann.c, prefix: ann.prefix || "", suffix: ann.suffix || "" });
						persistDraftList(sessionId, sess.list);
						emitChange();
						syncSendEnablement();
						return { ok: true, id: id };
					},
					remove: function (id) {
						sess.list = sess.list.filter(function (x) { return x.id !== id; });
						persistDraftList(sessionId, sess.list);
						emitChange();
						syncSendEnablement();
					},
					update: function (id, content) {
						for (var i = 0; i < sess.list.length; i++) {
							if (sess.list[i].id === id) { sess.list[i].c = content; break; }
						}
						persistDraftList(sessionId, sess.list);
						emitChange();
					},
				};
				return function () {
					if (state.handlers[sessionId]) delete state.handlers[sessionId];
					if (state.sessions[sessionId]) delete state.sessions[sessionId];
					emitChange();
				};
			}, [sessionId]);

			// 恢复：从本地存储载入本会话批注（无需重建草稿占位符）
			React.useEffect(function () {
				var saved = readSaved(sessionId);
				var sess = state.sessions[sessionId];
				if (sess && saved && saved.length) {
					sess.list = saved;
					emitChange();
					syncSendEnablement();
				}
			}, [sessionId]);

			var sess = state.sessions[sessionId];
			var list = sess ? sess.list : [];
			if (!list.length) return null;

			// 合并成单个「N条批注」气泡（与发送消息一致），悬停列出全部详情并可编�?删除；单个删除也可走原文角标
			var items = list.map(function (a) { return { n: a.n, q: a.q, c: a.c, id: a.id, sessionId: sessionId }; });
			return React.createElement(
				"div",
				{ className: "dsa-rail", "data-dsa-ui": "1" },
				React.createElement(
					"div",
					{
						className: "dsa-rail-item",
						"data-dsa-rail-items": JSON.stringify(items),
						title: "\u60AC\u505C\u67E5\u770B\u8BE6\u60C5\uFF0C\u53EF\u7F16\u8F91/\u5220\u9664",
						onMouseEnter: function (e) {
							try { showMsgTipForItems(JSON.parse(e.currentTarget.getAttribute("data-dsa-rail-items") || "[]"), e.currentTarget, true); } catch (err) { /* ignore */ }
						},
						onMouseLeave: scheduleHideMsgTip,
					},
					React.createElement("span", { className: "dsa-rail-n" }, String(list.length)),
					React.createElement("span", { className: "dsa-rail-count" }, "\u6761\u6279\u6CE8")
				)
			);
		}

		function apply(ctx) {
			var slots = ctx.get("slots");
			var sessions = ctx.get("sessions");
			if (!slots) return;

			ctx.effect(function () {
				var style = document.createElement("style");
				style.setAttribute("data-plugin", "dsh-annotate");
				style.textContent = CSS;
				document.head.appendChild(style);
				return function () { style.remove(); };
			}, "dsh-annotate: styles");

			if (sessions) {
				slots.inject("conversation.input.dock", function () {
					return slots.register({
						name: "conversation.input.dock",
						id: "dsh-annotate",
						order: 10000,
						inject: function (sessionId) {
							// 包装会话 prompt：发送时把批注作为第一段文本注入；发送成功后清空草稿批注
							try {
								var actx = sessions.scope(sessionId);
								var face = actx ? sessions.sessionOf(actx) : undefined;
								if (face && typeof face.prompt === "function" && !face.__dsaAnnotateWrapped) {
									face.__dsaAnnotateWrapped = true;
									var orig = face.prompt.bind(face);
									face.prompt = async function (content, mode) {
										var annText = buildAnnotationText(sessionId);
										var content2 = content;
										if (annText && Array.isArray(content)) {
											content2 = [{ type: "text", text: annText + "\n" }].concat(content);
										}
										var result = await orig(content2, mode);
										if (result && result.ok) clearDraftAnnotations(sessionId);
										return result;
									};
								}
							} catch (e) { /* ignore */ }
							return {};
						},
					}, DockWiring);
				});
			}

			slots.inject("shell.overlay", function () {
				return slots.register({
					name: "shell.overlay",
					id: "dsh-annotate",
					order: 100,
				}, AnnotateOverlay);
			});
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	},
});
