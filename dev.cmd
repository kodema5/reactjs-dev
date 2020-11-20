@echo off
setlocal EnableDelayedExpansion

set args_all=%*
set arg1=%1
set arg2=%2
call set args=%%args_all:*%1=%%

set BUILD_DIR=build

if [%arg1%]==[install] (
    cd %~dp0
    call dev.cmd install-dir .
    for /d %%i in (src\*) do (
        call dev.cmd install-dir %%i
    )
    goto end
    cd %~dp0
)

if [%arg1%]==[install-dir] (
    echo -- installing %arg2%
    cd %arg2%
    rem rd /s /q node_modules
    npm install
    npm install --package-lock-only
    goto end
)

if [%arg1%]==[build] (
    echo -- webpack
    npx webpack %args%
    goto end
)

if [%arg1%]==[clean] (
    echo -- clean
    rd /s /q build
    goto end
)


if [%arg1%]==[serve] (
    echo -- serve at :3000
    nodemon -w %BUILD_DIR%\server.js ^
        -x "node %BUILD_DIR%\server.js 3000 public"
    goto end
)

if [%arg1%]==[proxy] (
    echo -- proxy :8081 to localhost:3000/api
    node proxy.js 8081 http://localhost:3000/api
    goto end
)

if [%arg1%]==[live] (
    echo -- liver-server monitor %BUILD_DIR% dir changes for auto-refresh at 8080
    npx live-server %BUILD_DIR%\public ^
        ---wait=100 ^
        --port=8080 ^
        --browser=firefox ^
        --proxy=/api:http://localhost:8081
    goto end
)

if [%arg1%]==[watch] (
    echo -- watch file changes
    npx webpack --watch
    goto end
)


if [%arg1%]==[start] (
    echo -- starting services
    @echo (Press CTRL+C to quit)

    npx concurrently ^
        \"dev.cmd proxy\" ^
        \"dev.cmd serve\" ^
        \"dev.cmd live\" ^
        \"dev.cmd watch\"

    goto end
)

echo nothing to do

:end
endlocal
