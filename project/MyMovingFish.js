import {CGFobject} from '../lib/CGF.js';
import { MyMovingObject } from './MyMovingObject.js';

/**
 * MyMovingFish
 * @constructor
 */
 export class MyMovingFish extends MyMovingObject {
    constructor(scene, fish, appearance) {
        super(scene, fish, appearance);
        this.scene = scene;
        this.fish = fish;
        this.goingup = false;
        this.goingdown = false;
        this.floatageVal = 0;
        this.hasarock = false;
        this.rock = null;
    }

    up(floatageVal){
        if (this.goingdown) this.goingdown = false;
        this.goingup = true;
        this.floatageVal = floatageVal;
    }

    down(floatageVal){
        if (this.goingup) this.goingup = false;
        this.goingdown = true;
        this.floatageVal = floatageVal;
    }

    picksRock(rock){
        if (rock != null && !this.hasarock){
            this.hasarock = true;
            this.rock = rock;
            this.originalRockPos = [this.rock.x, this.rock.y, this.rock.z];
        }
    }

    dropsRock(){
        if (this.rock != null && this.hasarock){
            this.hasarock = false;
            this.fish.rock = null;
            this.rock = null;
        }
    }

    reset(){
        super.reset();
        this.fish.rock = null;
        if (this.hasarock){
            this.rock.x = this.originalRockPos[0];
            this.rock.y = this.originalRockPos[1];
            this.rock.z = this.originalRockPos[2];
            this.hasarock = false;
            this.rock = null;
        }
    }

    update(t) {
        if (this.goingup && this.pos[1]<5)
            this.pos[1] += this.floatageVal;

        else if (this.goingdown && this.pos[1]>0)
            this.pos[1] -= this.floatageVal;
        else{
            this.goingup = false;
            this.goingdown = false;
        }
        super.update();
        if (this.hasarock){
            this.rock.x = this.v*Math.sin(-this.orientation);
            this.rock.z = this.v*Math.cos(-this.orientation);
            this.rock.y = this.pos[1];
        }
        this.fish.update(t, this.v, this.rock);
    }

    display(){
        super.display();
    }
 }