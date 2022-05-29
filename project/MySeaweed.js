import {CGFobject} from '../lib/CGF.js';
import { MyPlant } from './MyPlant.js';
/**
* MySeaweed
* @constructor
 * @param scene - Reference to MyScene object
*/
export class MySeaweed extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.plants = [];
        this.setRandomValues();
        this.createObjs();
    }

    setRandomValues(){
        var number = Math.floor(Math.random() * 3) + 2;
        var posx = Math.round(Math.random() * 2) - 1;
        var posz = Math.round(Math.random() * 2) - 1;
        if (posx == 0) posx = 1;
        if (posz == 0) posz = -1;
        posx *=  (Math.random() * 10);
        posz *=  (Math.random() * 10);
        this.number = number;
        this.x = posx;
        this.z = posz;
    }

    createObjs() {
        for (let i = 0; i < this.number; i++){
            this.plants.push(new MyPlant(this.scene));
        }
    }
    display(){
        for (let j = 0; j < this.number; j++){
            this.scene.pushMatrix();
            this.scene.seaWeedAppearances[this.plants[j].colorIndex].apply();
            this.scene.translate(this.plants[j].x,0,this.plants[j].z);
            this.plants[j].display();
            this.scene.popMatrix();
        }
    }
}

