const path = require("path");
const { app, BrowserWindow } = require("electron");

const BASE_URL = "http://localhost:3000";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 또는 false 시도
      contextIsolation: false, // 또는 true 시도
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL(BASE_URL);
  } else {
    win.loadFile(path.join(__dirname, "../build/index.html"));
  }
}

app.whenReady().then(createWindow);

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
