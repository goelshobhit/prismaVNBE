@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\gulp@4.0.2\node_modules\gulp\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\gulp@4.0.2\node_modules\gulp\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\gulp@4.0.2\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\gulp@4.0.2\node_modules\gulp\bin\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\gulp@4.0.2\node_modules\gulp\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\gulp@4.0.2\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\gulp\bin\gulp.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\gulp\bin\gulp.js" %*
)
