import {CGFobject} from '../lib/CGF.js';
import { MyMovingObject } from './MyMovingObject.js';
import { MyFish } from "./MyFish.js";
import { MyRock } from "./MyRock.js";

/**
 * MyMovingFish
 * @constructor
 */
 export class MyMovingFishActor extends MyMovingObject {
    constructor(scene, fish) {
        super(scene, fish);
        this.scene = scene;
        this.fish = fish;
        this.floatageVal = 0;
    }


    reset(){
        super.reset();
    }

    update(t) {
        this.pos[1] += this.floatageVal;
        super.update();
        this.fish.update(t, this.v);
    }

    display(){
        super.display();
    }
 }