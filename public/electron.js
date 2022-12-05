//const controlWindow = require('./electron/controlWindow.js')
const { app } = require("electron");
const { BrowserWindow } = require("electron");
const path = require("path");
const { Tray } = require('electron');

const iconPath = path.resolve(__dirname, 'assets', 'imgs', 'trayIcon.png');

function App() {
    const win = createWindow();
    const tray = createTray();
    const { toggle } = controlWindow(win);
    tray.on('click', toggle);
}

function controlWindow(win) {
    
    function toggle() {
        if(win.isVisible()) {
            win.hide();
        } else {
            win.show();
			win.focus();
        }
    }

	return { toggle }
}

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        resizable: true,
        //frame: false,
        //show: false,
        fullscreenable: true,
        //fullscreen: true
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, "preload.js") // add "preload"
        }
    });

    //win.on('blur', () => win.hide());
    //win.setMenu(null);
    win.webContents.openDevTools();
    win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);

    
    return win
};


function createTray() {
    const tray = new Tray(iconPath);
    tray.setToolTip('pilot');
    return tray;
}

app.whenReady().then(App);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});