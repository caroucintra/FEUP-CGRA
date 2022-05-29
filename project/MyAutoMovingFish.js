import {CGFobject} from '../lib/CGF.js';
import { MyMovingObject } from './MyMovingObject.js';

/**
 * MyAutoMovingFish
 * @constructor
 */
 export class MyAutoMovingFish extends MyMovingObject {
    constructor(scene, fish) {
        super(scene, fish);
        this.scene = scene;
        this.fish = fish;
        this.orientation = 0;
        this.r = 3;
        this.v = 0.001;
        this.goingup = false;
        this.goingdown = false;
        this.setRandomValues();
    }

    setRandomValues(){
        this.posx = Math.ceil(Math.random() * 2) - 1;
        this.posz = Math.ceil(Math.random() * 2) - 1;
        if (this.posx == 0) this.posx = -1;
        if (this.posz == 0) this.posz = -1;
        this.posx *=  (Math.random() * 8);
        this.posy =  (Math.random() * 5) + 0.2;
        this.posz *=  (Math.random() * 8);
        this.pos = [this.posx, this.posy, this.posz];

        this.direction = Math.ceil(Math.random() * 2) - 1;
        if (this.direction == 0) this.direction = -1;
    }

    update(t) {
        this.pos[0] = this.r*Math.sin(this.direction*this.orientation)+this.posx;
        this.pos[2] = this.r*Math.cos(this.direction*this.orientation)+this.posz;
        this.orientation += Math.PI/100;
        this.orientation %= 2*Math.PI;
        this.fish.update(t, this.v, null);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.pos[0],this.pos[1],this.pos[2]);

        this.scene.rotate(this.direction*90*Math.PI/180,0,1,0);
        this.scene.rotate(this.direction*this.orientation,0,1,0);
        this.fish.display();
        this.scene.popMatrix();
    }
 }