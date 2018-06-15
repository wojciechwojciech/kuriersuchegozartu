const electron = require('electron')

// Module to control application life.
//var screenElectron = electron.screen
//Module to control app dimensions.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
//     Create the browser window.
    win = new BrowserWindow({width:800,height:600,minWidth:700,minHeight:600,icon: __dirname + '/img/trux.png',frame:false})

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
/////////////////////////////////////////////////////  
require('update-electron-app')({
  repo: 'wojciechwojciech/kuriersuchegozartu',
  updateInterval: '1 hour',
//  logger: require('electron-log')
})

    

    
win.webContents.openDevTools()
    
win.webContents.session.webRequest.onHeadersReceived({}, (d, c) => {
    if(d.responseHeaders['x-frame-options'] || d.responseHeaders['X-Frame-Options']){
        delete d.responseHeaders['x-frame-options']
        delete d.responseHeaders['X-Frame-Options']
    }
    c({cancel: false, responseHeaders: d.responseHeaders})
})
    

/////////////////////////////////////////////////////
      // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
      
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.