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
        return
        this.bulidLeft();
        this.bulidRight();
        this.buildHand()
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
}