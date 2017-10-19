# NetConf2017TokyoDemo
Demo for .Net Conf 2017 Tokyo, Japan.  
This demo is an Angular CLI integration with ASP.NET Core 2.0 project.

## .NET Conf 2017 Tokyo, Japan
https://csugjp.connpass.com/event/66004/

## My session slide
http://slides.com/tkiryu/aspnetcore-angularcli

## Demo Prerequisites
- Visual Studio 2017 version 15.3+ or Visual Studio Code
- ASP.NET Core 2.0
- Node.js 6.9+
- npm 5+
- Angular CLI 1.4.0+

## Usage

### Visual Studio 2017
1. Clone or download this repository.
2. Install [Whack Whack Terminal](https://marketplace.visualstudio.com/items?itemName=DanielGriffen.WhackWhackTerminal).
3. Install [NPM Task Runner](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner).
4. Open the solution.
5. Open the Whack Whack Terminal and type the following commands.
```
cd Server
dotnet restore
dotnet watch run
```
6. Open the Task Runner Explorer.
7. Double-click the `install` task
8. Double-click the `start` task.

### Visual Studio Code
1. Clone or download this repository.
2. Open the folder.
3. Open a terminal and type the following commands.
```
cd Server
dotnet restore
dotnet watch run
```
4. Open another terminal and type the following commands.
```
cd client
npm install
npm start
```