const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 440,
        height: 600
    });

    win.loadFile("frame2.html");
}

app.whenReady().then(() => {
    createWindow();
});


