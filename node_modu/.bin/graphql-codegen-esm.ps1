#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
$pathsep=":"
$env_node_path=$env:NODE_PATH
$new_node_path="C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\cli\esm\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\cli\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules\@graphql-codegen\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0\node_modules;C:\sourcecode\apollo\node_modules\.pnpm\node_modules"
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
  $pathsep=";"
} else {
  $new_node_path="/mnt/c/sourcecode/apollo/node_modules/.pnpm/@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0/node_modules/@graphql-codegen/cli/esm/node_modules:/mnt/c/sourcecode/apollo/node_modules/.pnpm/@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0/node_modules/@graphql-codegen/cli/node_modules:/mnt/c/sourcecode/apollo/node_modules/.pnpm/@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0/node_modules/@graphql-codegen/node_modules:/mnt/c/sourcecode/apollo/node_modules/.pnpm/@graphql-codegen+cli@4.0.1_@babel+core@7.21.4_@types+node@20.2.5_graphql@16.6.0/node_modules:/mnt/c/sourcecode/apollo/node_modules/.pnpm/node_modules"
}
if ([string]::IsNullOrEmpty($env_node_path)) {
  $env:NODE_PATH=$new_node_path
} else {
  $env:NODE_PATH="$new_node_path$pathsep$env_node_path"
}

$ret=0
if (Test-Path "$basedir/node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir/node$exe"  "$basedir/../@graphql-codegen/cli/esm/bin.js" $args
  } else {
    & "$basedir/node$exe"  "$basedir/../@graphql-codegen/cli/esm/bin.js" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "node$exe"  "$basedir/../@graphql-codegen/cli/esm/bin.js" $args
  } else {
    & "node$exe"  "$basedir/../@graphql-codegen/cli/esm/bin.js" $args
  }
  $ret=$LASTEXITCODE
}
$env:NODE_PATH=$env_node_path
exit $ret
