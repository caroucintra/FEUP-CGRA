import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MySeaweed } from './MySeaweed.js';

/**
 * MySeaweedSet
 * @constructor
 */
 export class MySeaweedSet extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.initTex();
      this.createObjs();
    }
    initTex() {
        this.scene.seaWeedAppearance1 = new CGFappearance(this.scene);
        this.scene.seaWeedAppearance1.setAmbient(50/255, 205/255, 50/255, 1);
	    this.scene.seaWeedAppearance1.setDiffuse(50/255, 205/255, 50/255, 1);
	    this.scene.seaWeedAppearance1.setSpecular(50/255, 205/255, 50/255, 1);
	    this.scene.seaWeedAppearance1.setShininess(10);
        
        this.scene.seaWeedAppearance2 = new CGFappearance(this.scene);
        this.scene.seaWeedAppearance2.setAmbient(128/255, 128/255, 0, 1);
	    this.scene.seaWeedAppearance2.setDiffuse(128/255, 128/255, 0, 1);
	    this.scene.seaWeedAppearance2.setSpecular(128/255, 128/255, 0, 1);
	    this.scene.seaWeedAppearance2.setShininess(10);

        this.scene.seaWeedAppearance3 = new CGFappearance(this.scene);
        this.scene.seaWeedAppearance3.setAmbient(85/255, 107/255, 47/255, 1);
	    this.scene.seaWeedAppearance3.setDiffuse(85/255, 107/255, 47/255, 1);
	    this.scene.seaWeedAppearance3.setSpecular(85/255, 107/255, 47/255, 1);
	    this.scene.seaWeedAppearance3.setShininess(10);
        
        this.scene.seaWeedAppearances = [this.scene.seaWeedAppearance1, this.scene.seaWeedAppearance2, this.scene.seaWeedAppearance3];
    }

    createObjs(){
        this.scene.seaWeeds = [];
        for(let i = 0; i < 15; i++){
            this.scene.seaWeeds.push(new MySeaweed(this.scene));
        }
    }


    display(){
        
        for(let i = 0; i < 15; i++){
            this.scene.pushMatrix();
            this.scene.translate(this.scene.seaWeeds[i].x,0, this.scene.seaWeeds[i].z);
            this.scene.seaWeeds[i].display();
            this.scene.popMatrix();
        }
    }
}