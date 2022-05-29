import {CGFobject, CGFappearance, CGFshader, CGFtexture} from '../lib/CGF.js';
import { MyRock } from './MyRock.js';

/**
 * MyRockSet
 * @constructor
 */
 export class MyRockSet extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initTex();
        this.createObjs();
    }

    initTex(){
        this.scene.rockAppearance = new CGFappearance(this.scene);
        this.scene.rockAppearance.setAmbient(64/255, 64/255, 64/255, 1);
        this.scene.rockAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.scene.rockAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.scene.rockAppearance.setShininess(10);
    }

    createObjs(){
        this.scene.rocks = [];
        for(let i = 0; i < 30; i++){
            this.scene.rocks.push(new MyRock(this.scene, 4, 4));
        }
    }

    display(){
        this.scene.pushMatrix();
        for(let i = 0; i < this.scene.rocks.length; i++){
            this.scene.pushMatrix();
            this.scene.rockAppearance.apply();
            this.scene.translate(this.scene.rocks[i].x,this.scene.rocks[i].y,this.scene.rocks[i].z);
            this.scene.scale(0.7,0.7,0.7);
            this.scene.scale(this.scene.rocks[i].dimensionx, this.scene.rocks[i].dimensiony, this.scene.rocks[i].dimensionz);
            this.scene.rotate(90*Math.PI/180,1,0,0);
            this.scene.rotate(this.scene.rocks[i].orientation,0,0,1);
            this.scene.rotate(this.scene.rocks[i].orientation,0,1,0);
            this.scene.rocks[i].display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
    }
}