@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules\tsc-alias\dist\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules\tsc-alias\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules\tsc-alias\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules\tsc-alias\dist\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules\tsc-alias\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules\tsc-alias\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\tsc-alias@1.8.6\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\tsc-alias\dist\bin\index.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\tsc-alias\dist\bin\index.js" %*
)
