import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';

/**
 * MyPillar
 * @constructor
 */
 export class MyPillar extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.scene.cylinder = new MyCylinder(this.scene, 4);
      this.initTex();
    }

    initTex(){
      this.scene.pillarAppearance = new CGFappearance(this.scene);
		  this.scene.pillarAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		  this.scene.pillarAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		  this.scene.pillarAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		  this.scene.pillarAppearance.setShininess(10);
      this.scene.pillarAppearance.loadTexture('images/woodTexture.jpg');
      this.scene.pillarAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
      this.scene.pushMatrix();
      this.scene.translate(2,0,1.7);
      //pillar1

      this.scene.pushMatrix();
      this.scene.scale(0.18,10,0.18);
      this.scene.translate(8,0,0);
      this.scene.pillarAppearance.apply();
      this.scene.cylinder.display();
      this.scene.popMatrix();

      //pillar2

      this.scene.pushMatrix();
      this.scene.scale(0.18,10,0.18);
      this.scene.translate(-8,0,0);
      this.scene.cylinder.display();
      this.scene.popMatrix();

      //pillar3

      this.scene.pushMatrix();
      this.scene.scale(0.18,10,0.18);
      this.scene.translate(8,0,8);
      this.scene.cylinder.display();
      this.scene.popMatrix();

      //pillar4

      this.scene.pushMatrix();
      this.scene.scale(0.18,10,0.18);
      this.scene.translate(-8,0,8);
      this.scene.cylinder.display();
      this.scene.popMatrix();

      this.scene.popMatrix();
    }
}