@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\cli\esm\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\cli\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\cli\esm\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\cli\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@graphql-codegen\cli\esm\bin.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@graphql-codegen\cli\esm\bin.js" %*
)
