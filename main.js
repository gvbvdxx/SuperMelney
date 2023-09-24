//Init Electron stuff.
var {
    app,
    BrowserWindow,
    Menu
} = require("electron");

function createSMWindow() {
    var window = new BrowserWindow({
		minWidth:480/2,
		minHeight:360/2,
		width:600,
		height:360,
        title: "Super Melney Is Loading...",
        icon: "icon.ico",
        autoHideMenuBar: true,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    window.show()
    window.loadFile("src/game/index.html");
    window.webContents.executeJavaScript("document.body.style.cursor = 'none';");
	window.setAspectRatio(600/360);
}

Menu.setApplicationMenu(Menu.buildFromTemplate([{
                label: "Game",
                submenu: [{
                        label: "Exit",
                        accelerator: 'Ctrl+E',
                        click: function (menuItem, win) {
                            win.close();
                        }
                    }, {
                        label: "Toggle Full Screen",
                        accelerator: 'Ctrl+F',
                        click: function (menuItem, win) {
                            win.setFullScreen(!win.isFullScreen());
                        }
                    }, {
                        label: "Restart Game",
                        accelerator: 'Ctrl+R',
                        click: function (menuItem, win) {
                            win.reload();
                        }
                    }
                ]
            }
        ]));
app.on("ready", createSMWindow);
