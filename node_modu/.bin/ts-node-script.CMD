@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\ts-node@10.9.1_@types+node@20.2.5_typescript@5.1.3\node_modules\ts-node\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\ts-node@10.9.1_@types+node@20.2.5_typescript@5.1.3\node_modules\ts-node\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\ts-node@10.9.1_@types+node@20.2.5_typescript@5.1.3\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\ts-node@10.9.1_@types+node@20.2.5_typescript@5.1.3\node_modules\ts-node\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\ts-node@10.9.1_@types+node@20.2.5_typescript@5.1.3\node_modules\ts-node\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\ts-node@10.9.1_@types+node@20.2.5_typescript@5.1.3\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\ts-node\dist\bin-script.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\ts-node\dist\bin-script.js" %*
)
