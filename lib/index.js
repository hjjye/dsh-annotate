/**
 * @dsh-external/dsh-annotate — host 半区。
 *
 * 批注是草稿级的：选中文字 → 作为引用芯片插入主输入框，随消息一起序列化发送。
 * 全部逻辑在 client 内完成，host 无需持久化，仅占位一个合法插件入口。
 */
const name = 'dsh-annotate'
const inject = []

function apply(_ctx) {}

export { apply, inject, name }
