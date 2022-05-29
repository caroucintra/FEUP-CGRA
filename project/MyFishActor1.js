import {CGFobject, CGFappearance, CGFshader} from '../lib/CGF.js';
import { MyModSphere } from "./MyModSphere.js";
import { MySphere } from "./MySphere.js";
import { MyTriangle } from './MyTriangle.js';

/**
 * MyFish
 * @constructor
 */
 export class MyFishActor1 extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.scene.fishBody = new MyModSphere(this.scene, 16, 8);
      this.scene.fishEye = new MySphere(this.scene, 6, 3);
      this.scene.fishTailFin = new MyTriangle(this.scene);
      this.finAngle = 0;
      this.tailAngle = -60*Math.PI/180;
      this.vTail = 0.01;
      this.vFin = 0.005;
      this.rock = null;
      this.initTex();
    }

    initTex(){
      this.scene.fishAppearance = new CGFappearance(this.scene);
		  this.scene.fishAppearance.setAmbient(225/255, 225/225, 225/255, 1);
		  this.scene.fishAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		  this.scene.fishAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		  this.scene.fishAppearance.setShininess(10);
      this.scene.fishAppearance.loadTexture('images/escamaslaranjas.jpg');
      this.scene.fishAppearance.setTextureWrap('REPEAT', 'REPEAT');

      this.scene.fishEyeAppearance = new CGFappearance(this.scene);
      this.scene.fishEyeAppearance.setAmbient(1.0, 1.0, 1.0, 1);
      this.scene.fishEyeAppearance.setDiffuse(1.0, 1.0, 1.0, 1);
      this.scene.fishEyeAppearance.setSpecular(1.0, 1.0, 1.0, 1);
      this.scene.fishEyeAppearance.setShininess(10);
      this.scene.fishEyeAppearance.loadTexture('images/olhospeixe.png');
      this.scene.fishEyeAppearance.setTextureWrap('REPEAT', 'REPEAT');

      this.scene.fishFinAppearance = new CGFappearance(this.scene);
		  this.scene.fishFinAppearance.setAmbient(225/255, 0, 127/255, 1);
		  this.scene.fishFinAppearance.setDiffuse(225/255, 0, 127/255, 1);
		  this.scene.fishFinAppearance.setSpecular(225/255, 0, 127/255, 1);
  		this.scene.fishFinAppearance.setShininess(10);


      //Initialize shaders
      this.scene.fishShader = new CGFshader(this.scene.gl, "shaders/fishtexture.vert", "shaders/fishtexture.frag");
      this.scene.normalShader = new CGFshader(this.scene.gl, "shaders/texture1.vert", "shaders/texture1.frag");
    }

    update(t, v, rock){
      this.vFin = 0.005 + v*0.5;
      this.vTail = 0.01 + v*0.5;
      this.finAngle = Math.sin(t*this.vFin)*15*Math.PI/180;
      this.tailAngle = Math.sin(t*this.vTail)*20*Math.PI/180;
      if (rock != null){
        this.rock = rock;
      }
    }

    display(){
        this.scene.pushMatrix();
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(0,3,0);

        //pedra
        if (this.rock != null){
          this.scene.pushMatrix();
          this.scene.rockAppearance.apply();
          //this.scene.scale(0.7,0.7,0.7);
          this.scene.translate(this.rock.x-1.5,this.rock.y,this.rock.z);
          this.scene.scale(this.rock.dimensionx, this.rock.dimensiony, this.rock.dimensionz);
          this.scene.rotate(90*Math.PI/180,1,0,0);
          this.scene.rotate(this.rock.orientation,0,0,1);
          this.scene.rotate(this.rock.orientation,0,1,0);
          this.rock.display();
          this.scene.popMatrix();
        }

        //olho
        //this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.pushMatrix();
        this.scene.translate(-0.8,0.4,0.5);
        this.scene.scale(0.18,0.18,0.18);
        this.scene.rotate(130*Math.PI/180,0,1,0);
        this.scene.fishEyeAppearance.apply();
        this.scene.fishEye.display();
        this.scene.popMatrix();

        //olho
        this.scene.pushMatrix();
        this.scene.translate(-0.8,0.4,-0.5);
        this.scene.scale(0.18,0.18,0.18);
        this.scene.rotate(-20*Math.PI/180,0,1,0);
        this.scene.fishEyeAppearance.apply();
        this.scene.fishEye.display();
        this.scene.popMatrix();

        //barbatanas
        this.scene.pushMatrix();
        this.scene.rotate(-90*Math.PI/180,0,0,1);
        this.scene.translate(0.3,-0.2,0.63);
        this.scene.scale(1.2,1.2,1.2);
        if (!this.scene.turningleft)
          this.scene.rotate(this.finAngle,0,1,0);
        this.scene.fishFinAppearance.apply();
        this.scene.fishTailFin.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(-90*Math.PI/180,0,0,1);
        this.scene.translate(0.3,-0.2,-0.63);
        this.scene.scale(1.2,1.2,1.2);
        if (!this.scene.turningright)
          this.scene.rotate(-this.finAngle,0,1,0);
        this.scene.fishFinAppearance.apply();
        this.scene.fishTailFin.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3,0.9,0);
        this.scene.scale(1.2,1.2,1.2);
        this.scene.fishFinAppearance.apply();
        this.scene.fishTailFin.display();
        this.scene.popMatrix();

        //cauda
        this.scene.pushMatrix();
        this.scene.translate(1.45,0,0);
        this.scene.scale(1.5,1.5,1.5);
        this.scene.rotate(this.tailAngle,0,1,0);
        this.scene.fishFinAppearance.apply();
        this.scene.fishTailFin.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.45,0,0);
        this.scene.scale(1.5,1.5,1.5);
        this.scene.rotate(180*Math.PI/180,1,0,0);
        this.scene.rotate(-this.tailAngle,0,1,0);
        this.scene.fishFinAppearance.apply();
        this.scene.fishTailFin.display();
        this.scene.popMatrix();

        //corpo
        this.scene.pushMatrix();
        this.scene.setActiveShader(this.scene.fishShader);
        this.scene.fishAppearance.apply();
        this.scene.fishBody.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
    }
}