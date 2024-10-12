const { app, BrowserWindow, dialog} = require("electron");
const{saveData, loadData}=require("./helpers/saveData")
const{wait}=require("./helpers/wait");
const path = require("path");
const {input}=require("./screens/alertDialog");
app.commandLine.appendSwitch('enable-logging');
const mainCreateWindow = async () => {
const     mainWindow = new BrowserWindow({
        width: 300,
        height: 300,
    //show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false,
        },
    });
mainWindow.loadFile("index.html");
    return mainWindow;
};
function dialogWindow(mainWindow){
    const page={
        tipe: "info",
        buttons: ["ok!", "no!"],
        defaultId: 0,
        title: "alert",
        message: "demo!",
        detail: 'The meeting you were attending has been ended.',
    };
    dialog.showMessageBox(mainWindow, page).then((msg) => {
       if (msg === 0) {
           console.log("ok!");
       }else{
           console.log("no!");
       }
    });

}

app.whenReady().then(async () => {
demo = mainCreateWindow();
await wait(15000)

await wait(10000)

});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit(); // Quit the app if all windows are closed (except on macOS)
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        mainCreateWindow();
    }
});