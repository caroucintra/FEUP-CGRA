import {CGFobject} from '../lib/CGF.js';
import { MyPyramid } from './MyPyramid.js';

/**
* MyPlant
* @constructor
 * @param scene - Reference to MyScene object
*/
export class MyPlant extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.setRandomValues();
        this.scene.pyramid = new MyPyramid(this.scene,2,3);
    }

    setRandomValues(){
        this.height = (Math.random())+0.1;
        if (this.height >= 1) this.height = 0.9;
        this.colorIndex = Math.floor(Math.random() * 3);
        this.x = Math.random();
        this.z = Math.random();
    }
    
    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.05,this.height,0.05);
        this.scene.seaWeedAppearances[this.colorIndex].apply();
        this.scene.pyramid.display();
        this.scene.popMatrix();
    }
}
