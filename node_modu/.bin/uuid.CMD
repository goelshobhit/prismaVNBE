@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules\uuid\dist\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules\uuid\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules\uuid\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules\uuid\dist\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules\uuid\dist\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules\uuid\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\uuid@9.0.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\uuid\dist\bin\uuid" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\uuid\dist\bin\uuid" %*
)
