@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\prisma-kysely@1.4.2\node_modules\prisma-kysely\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma-kysely@1.4.2\node_modules\prisma-kysely\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma-kysely@1.4.2\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\prisma-kysely@1.4.2\node_modules\prisma-kysely\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma-kysely@1.4.2\node_modules\prisma-kysely\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\prisma-kysely@1.4.2\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\prisma-kysely\dist\bin.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\prisma-kysely\dist\bin.js" %*
)
