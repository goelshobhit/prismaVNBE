@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\eslint@8.42.0\node_modules\eslint\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint@8.42.0\node_modules\eslint\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint@8.42.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\eslint@8.42.0\node_modules\eslint\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint@8.42.0\node_modules\eslint\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint@8.42.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\eslint\bin\eslint.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\eslint\bin\eslint.js" %*
)
