import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import gsap from 'gsap';
import { gatImgFrame, getFuterText, getTextStyle } from '../game-config';
import { mainGridConfig } from './main-grid-config';
import { PixiPlugin } from "gsap/PixiPlugin";
import { getEmitter } from '../game'

// register the plugin
gsap.registerPlugin(PixiPlugin);

// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);
export class MainGrid extends PixiGrid {
  getGridConfig() {
    return mainGridConfig();
  }

  constructor(config) {
    super();
    this.pageNum = config.pageNum;
    this.pageCount = config.pageCount;
    this.itemArr = gatImgFrame();
    this.textStyle = getTextStyle();
    this.items = [];
    this.eventStatus = true;
    this.emitter = getEmitter()
    this._build();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
    this.buildTitle();
    this.buildContent(this.pageNum);
    this.buildFuter();
  }

  buildTitle() {
    const sprite = this.createSprite('logo');
    this.setChild('logo', sprite);
  }

  buildContent(pageNum) {
    this.bulidLeft(pageNum);
    this.bulidRight(pageNum);
    this.buildHand()
  }

  bulidLeft(num) {
    const { item, textBolt, text } = this.itemArr[num][0];
    const itemSprite = this.pushItems(item);
    itemSprite.on('pointerup', this.toLike.bind(this, itemSprite))
    this.setChild('itemLeft', itemSprite);
    this.setChild('textLeftBolt', this.createText(textBolt, this.textStyle.bold));
    this.setChild('textLeft', this.createText(text, this.textStyle.normal));
  }

  bulidRight(num) {
    const { item, textBolt, text } = this.itemArr[num][1];
    const itemSprite = this.pushItems(item);
    itemSprite.on('pointerup', this.toLike.bind(this, itemSprite))
    this.setChild('itemRight', itemSprite);
    this.setChild('textRightBolt', this.createText(textBolt, this.textStyle.bold));
    this.setChild('textRight', this.createText(text, this.textStyle.normal));
    this.itemArr[num][1];
  }

  pushItems(item) {
    const itemSprite = this.createSprite(item);
    itemSprite.interactive = true
    this.items.push(itemSprite);
    return itemSprite;
  }

  buildFuter() {
    const { text, style } = getFuterText();
    const gr = new PIXI.Graphics();
    gr.beginFill('0x537f7e');
    gr.drawRect(0, 0, window.innerWidth, Math.min(window.innerHeight * 0.1, 200));
    gr.endFill();
    this.setChild('futer', gr);
    this.setChild('futerText', this.createText(text, style));
  }

  createSprite(frame) {
    return PIXI.Sprite.from(`${frame}`);
  }

  createText(text, style) {
    return new PIXI.Text(`${text}`, style);
  }

  refundItem() {
    return this.items
  }

  buildHand() {
    const hand = this.createSprite('hand')
    this.addChild(hand)
    hand.y = 2 * window.innerHeight
    hand.scale.set(0)
    this.hand = hand
    this.handAnimatia((this.hand = hand))
  }

  handAnimatia(hand) {
    const itemsPosition = this.refunndItemsPosition()
    const timeLine = gsap.timeline({ repeat: -1, delay: 2, duration: 2.5, })
    itemsPosition.forEach(arr => {
      timeLine.to(hand, { pixi: { x: arr[0], y: arr[1], scaleX: 1, scaleY: 1 } })
      timeLine.to(hand, { pixi: { x: arr[0], y: arr[1], scaleX: 0.6, scaleY: 0.6 }, duration: 0.9 })
      timeLine.to(hand, { pixi: { x: arr[0], y: arr[1], scaleX: 1, scaleY: 1 }, duration: 0.5 })

    });

  }

  refunndItemsPosition() {
    const arr = []
    this.items.forEach((item, index) => {
      arr[index] = []
      arr[index].push((item.x + item.width / 2))
      arr[index].push((item.y + item.height / 2))
    });
    return arr
  }

  toLike(item) {
    if (!this.eventStatus) { return }
    this.killHandAnim()
    const like = this.createSprite("like")
    like.anchor.set(0.5)
    like.alpha = 0
    const scaleItem = Math.min(Math.min(window.innerHeight / (5 * like.height), window.innerWidth / (5 * like.width)), 1)
    like.scale.set(scaleItem)
    like.x = item.x + item.width / 2
    like.y = item.y + item.height / 2
    this.addChild(like)
    this.toLikeAnim(like, scaleItem)
  }

  toLikeAnim(item, scaleItem) {
    this.eventStatus = false
    const timline = gsap.timeline()
    timline.to(item, { pixi: { scale: 0.5 * scaleItem, alpha: 1 }, duration: 0.5 })
    timline.to(item, { pixi: { scale: scaleItem, alpha: 1 }, duration: 0.5 })
    timline.to(item, {
      pixi: { scale: scaleItem, alpha: 0 }, duration: 0.05, onComplete: () => {
        this.toNextPage()
        this.eventStatus = true
      }
    })

  }

  killHandAnim() {
    this.hand.alpha = 0
  }

  toNextPage() {

    if (this.pageNum >= this.pageCount - 1) {
      this.emitter.emit('goLastPage')

    } else {

      this.emitter.emit('goNextPage')
    }
  }

}
