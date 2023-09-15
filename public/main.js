const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const fs = require("fs");
const isDev = require("electron-is-dev");

// const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    title: "NoteSZ",
    width: 1500,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // win.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, "index .html"),
    protocol: "file",
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // win.loadURL(startUrl);

  // and load the index.html of the app.
  // win.loadFile("index.html");
  // win.loadURL("http://localhost:3000");
  // Open the DevTools.
  //   if (isDev) {
  //     win.webContents.openDevTools({ mode: 'detach' });
  //   }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
