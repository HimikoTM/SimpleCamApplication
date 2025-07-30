const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const { Menu } = require('electron');
let win;
Menu.setApplicationMenu(null);
app.setAppUserModelId('com.yourcompany.simplecamapplication');
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300,
        icon: path.join(__dirname, 'img/icon.jpg'),
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
}
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});