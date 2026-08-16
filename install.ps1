# ============================================================
# dsh-annotate — 一键安装脚本（参考 dsh-routing-suite 部署风格）
# 用法：在 clone 下来的仓库根目录执行  .\install.ps1
# 作用：把插件文件装配进 DSH 的 local-packages，然后按提示在 DSH 会话里注入。
# ============================================================
param(
    [string]$Profile = "web"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

# 定位 DSH home（DSH_HOME 环境变量优先，否则 ~/.dsh）
$dshHome = if ($env:DSH_HOME -and (Test-Path $env:DSH_HOME)) {
    $env:DSH_HOME
} else {
    Join-Path $HOME ".dsh"
}
if (-not (Test-Path (Join-Path $dshHome "local-packages"))) {
    New-Item -ItemType Directory -Force -Path (Join-Path $dshHome "local-packages") | Out-Null
}

$target = Join-Path $dshHome "local-packages\dsh-annotate"

Write-Host ""
Write-Host "== dsh-annotate 一键安装 ==" -ForegroundColor Cyan
Write-Host "  DSH home : $dshHome"
Write-Host "  目标目录 : $target"
Write-Host ""

# 1) 复制插件文件（lib/ + 元数据；不含 .git）
if (Test-Path (Join-Path $target "package.json")) {
    Write-Host "  [skip] $target 已存在（如需覆盖请先手动删除该目录）" -ForegroundColor Yellow
} else {
    New-Item -ItemType Directory -Force -Path $target | Out-Null
    Copy-Item -Recurse (Join-Path $repoRoot "lib") (Join-Path $target "lib")
    Copy-Item (Join-Path $repoRoot "package.json") (Join-Path $target "package.json") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $repoRoot "README.md")   (Join-Path $target "README.md")   -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $repoRoot "LICENSE")     (Join-Path $target "LICENSE")     -ErrorAction SilentlyContinue
    Write-Host "  [ok] 已装配到 $target" -ForegroundColor Green
}

# 2) 指引注入
Write-Host ""
Write-Host "  下一步：打开 DSH 会话，在会话里调用注入器工具注入本插件：" -ForegroundColor Yellow
Write-Host ""
Write-Host "      dev_inject_plugin  $target" -ForegroundColor White
Write-Host ""
Write-Host "  注入后刷新页面即可使用。常用命令：" -ForegroundColor Yellow
Write-Host "      dev_reload_package  dsh-annotate    # 改动代码后热重载"
Write-Host "      dev_uninject_plugin dsh-annotate    # 卸载"
Write-Host ""
Write-Host "  若未安装注入器（dsh-super-injector），请先安装它（参考 dsh-routing-suite / dsh-super-injector 仓库）。"
Write-Host ""
