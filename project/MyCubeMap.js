import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyCubeMap
 * @constructor
 */
 export class MyCubeMap extends CGFobject {
    constructor(scene, textures) {
      super(scene);
      this.scene = scene;
      this.enableLinearFiltering = false;
      this.quad = new MyQuad(scene);
      if (textures != undefined){
        this.textures = textures;
        this.initMaterials();
      }
      this.size = 50;
    }


    initMaterials(){

        this.scene.quad = new MyQuad(this.scene);
        //Material
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.0, 0.0, 0.0, 0.0);
        this.material.setDiffuse(0.0, 0.0, 0.0, 0.0);
        this.material.setEmission(0.5, 0.5, 0.5, 1.0);
        this.material.setShininess(10.0);
    }

    changeFiltering() {
      if (this.enableLinearFiltering)
          this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      else {
          this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
      }
  }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(0.0,10,0.0);

      //back
        var angle = 180*Math.PI/180;
        this.scene.pushMatrix();
        this.scene.scale(this.size,this.size,this.size);
        this.scene.translate(0.0,0.0,0.5);
        this.scene.rotate(angle,1,0,0);
        this.scene.rotate(angle,0,0,1);
        this.changeFiltering();
        this.material.setTexture(this.textures[5]);
        this.material.apply();
        this.scene.quad.display();
        this.scene.popMatrix();

        //bottom
        var angle = 90*Math.PI/180;
        this.scene.pushMatrix();
        this.scene.scale(this.size,this.size,this.size);
        this.scene.translate(0.0,-0.5,0.0);
        this.scene.rotate(angle,1,0,0);
        var angle = 180*Math.PI/180;
        this.scene.rotate(angle,0,1,0);
        this.changeFiltering();
        this.material.setTexture(this.textures[1]);
        this.material.apply();
        this.scene.quad.display();
        this.scene.popMatrix();
      
        //top
        var angle = 90*Math.PI/180;
        this.scene.pushMatrix();
        this.scene.scale(this.size,this.size,this.size);
        this.scene.translate(0.0,+0.5, 0.0);
        this.scene.rotate(angle,1,0,0);
        this.changeFiltering();
        this.material.setTexture(this.textures[0]);
        this.material.apply();
        this.scene.quad.display();
        this.scene.popMatrix();
      
        //front
        this.scene.pushMatrix();
        this.scene.scale(this.size,this.size,this.size);
        this.scene.translate(0.0, 0.0,-0.5);
        this.changeFiltering();
        this.material.setTexture(this.textures[4]);
        this.material.apply();
        this.scene.quad.display();
        this.scene.popMatrix();
      
        //left
        angle = 90*Math.PI/180;
        this.scene.pushMatrix();
        this.scene.scale(this.size,this.size,this.size);
        this.scene.translate(-0.5, 0.0, 0.0);
        this.scene.rotate(angle,0,1,0);
        this.changeFiltering();
        this.material.setTexture(this.textures[2]);
        this.material.apply();
        this.scene.quad.display();
        this.scene.popMatrix();
    
        //right
        this.scene.pushMatrix();
        this.scene.scale(this.size,this.size,this.size);
        this.scene.translate(0.5, 0.0, 0.0);
        this.scene.rotate(angle,0,1,0);
        var angle = 180*Math.PI/180;
        this.scene.rotate(angle,0,1,0);
        this.changeFiltering();
        this.material.setTexture(this.textures[3]);
        this.material.apply();
        this.scene.quad.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}
