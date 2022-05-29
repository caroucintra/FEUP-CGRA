import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyAutoMovingFish } from './MyAutoMovingFish.js';
import { MyFish } from './MyFish.js';
import { MySeaweed } from './MySeaweed.js';

/**
 * MyAutoMovingFishSet
 * @constructor
 */
 export class MyAutoMovingFishSet extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.initTex();
      this.createObjs();
    }
    initTex() {
        this.scene.orangeFishAppearance = new CGFappearance(this.scene);
        this.scene.orangeFishAppearance.setAmbient(50/255, 205/255, 50/255, 1);
	    this.scene.orangeFishAppearance.setDiffuse(50/255, 205/255, 50/255, 1);
	    this.scene.orangeFishAppearance.setSpecular(50/255, 205/255, 50/255, 1);
        this.scene.orangeFishAppearance.setShininess(10);
        this.scene.orangeFishAppearance.loadTexture('images/escamaslaranjas.png');
        this.scene.orangeFishAppearance.setTextureWrap('REPEAT', 'REPEAT');
        
        this.scene.redFishAppearance = new CGFappearance(this.scene);
        this.scene.redFishAppearance.setAmbient(128/255, 128/255, 0, 1);
	    this.scene.redFishAppearance.setDiffuse(128/255, 128/255, 0, 1);
	    this.scene.redFishAppearance.setSpecular(128/255, 128/255, 0, 1);
	    this.scene.redFishAppearance.setShininess(10);
        this.scene.redFishAppearance.loadTexture('images/escamasvermelhas.png');
        this.scene.redFishAppearance.setTextureWrap('REPEAT', 'REPEAT');
        
        this.scene.fishAppearances = [this.scene.orangeFishAppearance, this.scene.redFishAppearance];
    }

    createObjs(){
        this.scene.automovingfish = [];
        for(let i = 0; i < 4; i++){
            var app = this.scene.fishAppearances[Math.round(Math.random())]
            this.scene.automovingfish.push(new MyAutoMovingFish(this.scene, new MyFish(this.scene, app)));
        }
    }

    update(t){
        for(let i = 0; i < 4; i++){
            this.scene.automovingfish[i].update(t);
        }
    }

    display(){
        for(let i = 0; i < 4; i++){
            this.scene.pushMatrix();
            this.scene.automovingfish[i].display();
            this.scene.popMatrix();
        }
    }
}