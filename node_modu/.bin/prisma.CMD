@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\prisma@4.15.0\node_modules\prisma\build\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma@4.15.0\node_modules\prisma\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma@4.15.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\prisma@4.15.0\node_modules\prisma\build\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma@4.15.0\node_modules\prisma\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma@4.15.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\prisma\build\index.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\prisma\build\index.js" %*
)
