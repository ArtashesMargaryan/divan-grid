import * as PIXI from 'pixi.js';
import { MainGrid } from './grid/main-grid';
import Emitter from 'eventemitter3'
import { LastPage } from './grid/lastPage-grid';
const emitter = new Emitter();
export function getEmitter() {
  return emitter;
}
export class Game extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', this._resize.bind(this));
    this.config = {
      pageNum: 0,
      pageCount: 3
    };
    this.emitter = getEmitter()
    document.body.appendChild(this.view);
    this._loadAssets();
  }

  _resize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this._mainView.rebuild();
  }

  _loadAssets() {
    this.loader.add('logo', './assets/ui/logo.png');
    this.loader.add('1a', './assets/furniture/1a.png');
    this.loader.add('1b', './assets/furniture/1b.png');
    this.loader.add('2a', './assets/furniture/2a.png');
    this.loader.add('2b', './assets/furniture/2b.png');
    this.loader.add('3a', './assets/furniture/3a.png');
    this.loader.add('3b', './assets/furniture/3b.png');
    this.loader.add('like', './assets/ui/icon_like.png');
    this.loader.add('hand', './assets/ui/hand.png');

    this.loader.add('divan1', './assets/ui/divan1.png');
    this.loader.add('divan2', './assets/ui/divan2.png');
    this.loader.add('divan3', './assets/ui/divan3.png');
    this.loader.add('divan4', './assets/ui/divan4.png');
    this.loader.load(() => {
      this._build();
    });
  }

  _build() {
    this.readAllEmitt()
    this.goLastPage()
    return
    this.buildGrid()
    // this.handAnimatia()
  }

  buildGrid() {
    this.stage.addChild((this._mainView = new MainGrid(this.config)));

  }

  readAllEmitt() {
    this.emitter.on('goLastPage', this.goLastPage.bind(this))
    this.emitter.on('goNextPage', this.goNextPage.bind(this))

  }

  goLastPage() {

    console.warn("verch");
    this.stage.removeChild(this._mainView)
    this.stage.addChild((this.lastPage= new LastPage()))
  }

  goNextPage() {
    this.stage.removeChild(this._mainView)
    this.config.pageNum += 1
    this.buildGrid()
  }

  buildLastGrid() {

  }

}
