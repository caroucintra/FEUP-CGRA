import {CGFobject} from '../lib/CGF.js';

/**
 * MyMovingObject
 * @constructor
 */
 export class MyMovingObject extends CGFobject {
    constructor(scene, object) {
      super(scene);
      this.scene = scene;
      this.object = object;
      this.v = 0.0;
      this.orientation = 0.0;
      this.pos = [0.0,0.0,0.0];
    }

    update(){
      this.pos[0] += this.v*Math.sin(this.orientation);
      this.pos[2] += this.v*Math.cos(this.orientation);
    }

    accelerate(val){
      this.v += val;
    }

    turn(val){
      this.orientation += val;
      this.orientation %= 2*Math.PI;
    }

    reset(){
      this.v = 0.0;
      this.orientation = 0.0;
      this.pos = [0.0,0.0,0.0];
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.pos[0],this.pos[1],this.pos[2]);
        this.scene.rotate(this.orientation,0,1,0);
        this.object.display();
        this.scene.popMatrix();
    }
}