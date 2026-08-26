// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path'); // <-- Thêm dòng này vào đầu file

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 450,
    height: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('frame2.html');
}

ipcMain.on('window-minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-close', () => {
  if (mainWindow) mainWindow.close();
});

app.whenReady().then(createWindow);