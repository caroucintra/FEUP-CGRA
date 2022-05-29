import {CGFobject, CGFappearance, CGFshader, CGFtexture} from '../lib/CGF.js';
import {MyTriangle} from "./MyTriangle.js"

/**
 * MyNest
 * @constructor
 */
 export class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.pos = [5,0.2,-9]; 
        this.rocks = [];
        this.yOffset = 0.2;
    }
    display(){
        this.scene.pushMatrix();
        for (let i = 0; i < this.rocks.length; i++){
          this.scene.pushMatrix();
          this.scene.rockAppearance.apply();
          this.scene.translate(this.pos[0],this.pos[1]+this.yOffset*i,this.pos[2]);
          this.scene.scale(0.7,0.7,0.7);
          this.scene.scale(this.rocks[i].dimensionx, this.rocks[i].dimensiony, this.rocks[i].dimensionz);
          this.scene.rotate(90*Math.PI/180,1,0,0);
          this.scene.rotate(this.rocks[i].orientation,0,0,1);
          this.scene.rotate(this.rocks[i].orientation,0,1,0);
          this.rocks[i].display();
          this.scene.popMatrix();
        }
        this.scene.popMatrix();
    }
}