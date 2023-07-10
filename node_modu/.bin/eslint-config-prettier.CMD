@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\eslint-config-prettier@8.8.0_eslint@8.42.0\node_modules\eslint-config-prettier\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint-config-prettier@8.8.0_eslint@8.42.0\node_modules\eslint-config-prettier\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint-config-prettier@8.8.0_eslint@8.42.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\eslint-config-prettier@8.8.0_eslint@8.42.0\node_modules\eslint-config-prettier\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint-config-prettier@8.8.0_eslint@8.42.0\node_modules\eslint-config-prettier\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\eslint-config-prettier@8.8.0_eslint@8.42.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\eslint-config-prettier\bin\cli.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\eslint-config-prettier\bin\cli.js" %*
)
