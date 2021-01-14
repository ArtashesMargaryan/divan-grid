import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import gsap from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from 'pixi.js';
import { getEmitter } from '../game'
import { getFuterText, getLastItem } from '../game-config';
import { lastPageGridConfig } from './last-page-grid-config';

// register the plugin
gsap.registerPlugin(PixiPlugin);

// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);
export class LastPage extends PixiGrid {
    getGridConfig() {
        return lastPageGridConfig();
    }

    constructor(config) {
        super();
        this.items = getLastItem()
        this.emitter = getEmitter()
        this._build();
    }

    rebuild() {
        super.rebuild(this.getGridConfig());
    }

    _build() {
        this.buildTitle();
        this.buildContent();
        this.buildFuter();
    }

    buildTitle() {
        const sprite = this.createSprite('logo');
        this.setChild('logo', sprite);
    }

    buildContent() {
        const items = this.items[0]
        const frame = this.items[1]
        for (let i = 0; i < items.length; i++) {
            this.buildSofa(items[i], frame[i])

        }
        this.createBtn()
        return

    }

    buildSofa(item, frame) {
        const cont = new PIXI.Container()
        const sofa1 = this.createSprite(item)
        const sofa2 = this.createSprite(item)
        sofa2.anchor.x = 2
        sofa2.scale.set(-1, 1)
        cont.addChild(sofa2)
        cont.addChild(sofa1)
        this.setChild(`${frame}`, cont)

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

    createBtn() {
        this.buildPlayBtn()
        this.buildRetryBtn()
    }

    buildPlayBtn() {
        const btn = this.createSprite('button')
        btn.anchor.set(0.5)
        const cont = new PIXI.Container()
        cont.addChild(btn)
        cont.pivot.x = cont.width / 2
        cont.pivot.y = cont.height / 2
        // scale=Math.min()
        this.btnAnim(btn)
        this.setChild('playGame', cont)
    }

    btnAnim(btn) {

        const timLine = gsap.timeline({ yoyo: true, repeat: -1 })
        timLine.from(btn, { pixi: { scaleY: 0.8, scaleX: 0.9 }, duration: 1 })

    }

    buildRetryBtn() {
        const btn = this.createSprite('button1')
        btn.anchor.set(0.5)
        btn.interactive = true
        btn.on('pointerup', () => {
            this.emitter.emit('retry')
        })
        this.setChild('retry', btn)

    }

}
