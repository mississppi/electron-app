import { BrowserWindow, App, app } from "electron";
import Datastore from "nedb";
import {PostItemStore} from "../db/stores/postItem";

class MyApp {
  private window?: BrowserWindow;

  private app: App;

  private mainURL: string = `file://${__dirname}/index.html`;

  constructor(app: App) {
    this.app = app;
    this.app.on("ready", this.onReady);
    this.app.on("activate", this.onActivated);
    this.app.on("window-all-closed", this.onWindowAllClosed);
    const store = new PostItemStore();
    console.log(store.readAll());
  }

  private onReady = () => {
    this.window = new BrowserWindow();
    this.window.loadURL(this.mainURL);
    this.window.webContents.openDevTools();
  };

  private onActivated = () => {};

  private onWindowAllClosed = () => {
    this.app.quit();
  };
}

new MyApp(app);
