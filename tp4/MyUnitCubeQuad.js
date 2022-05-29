import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyUnitCubeQuad
 * @constructor
 */
 export class MyUnitCubeQuad extends CGFobject {
    constructor(scene, textures) {
      super(scene);
      this.scene = scene;
      this.quad = new MyQuad(scene);
      if (textures != undefined){
        this.textures = textures;
      this.initMaterials();
      }
    }

    initMaterials(){
        this.material1 = new CGFappearance(this.scene);
        this.material1.setAmbient(0, 206/255, 209/255, 1.0);
        this.material1.setDiffuse(0, 206/255, 209/255, 1.0);
        this.material1.setSpecular(1, 1, 1, 1.0);
        this.material1.setShininess(10.0);
        this.material1.setTexture(this.textures[1]);
        this.material1.setTextureWrap('REPEAT', 'REPEAT');

        this.material2 = new CGFappearance(this.scene);
        this.material2.setAmbient(0, 206/255, 209/255, 1.0);
        this.material2.setDiffuse(0, 206/255, 209/255, 1.0);
        this.material2.setSpecular(1, 1, 1, 1.0);
        this.material2.setShininess(10.0);
        this.material2.setTexture(this.textures[1]);
        this.material2.setTextureWrap('REPEAT', 'REPEAT');

        this.material3 = new CGFappearance(this.scene);
        this.material3.setAmbient(0, 206/255, 209/255, 1.0);
        this.material3.setDiffuse(0, 206/255, 209/255, 1.0);
        this.material3.setSpecular(1, 1, 1, 1.0);
        this.material3.setShininess(10.0);
        this.material3.setTexture(this.textures[2]);
        this.material3.setTextureWrap('REPEAT', 'REPEAT');

        this.material4 = new CGFappearance(this.scene);
        this.material4.setAmbient(0, 206/255, 209/255, 1.0);
        this.material4.setDiffuse(0, 206/255, 209/255, 1.0);
        this.material4.setSpecular(1, 1, 1, 1.0);
        this.material4.setShininess(10.0);
        this.material4.setTexture(this.textures[3]);
        this.material4.setTextureWrap('REPEAT', 'REPEAT');

        this.material5 = new CGFappearance(this.scene);
        this.material5.setAmbient(0, 206/255, 209/255, 1.0);
        this.material5.setDiffuse(0, 206/255, 209/255, 1.0);
        this.material5.setSpecular(1, 1, 1, 1.0);
        this.material5.setShininess(10.0);
        this.material5.setTexture(this.textures[0]);
        this.material5.setTextureWrap('REPEAT', 'REPEAT');

        this.material6 = new CGFappearance(this.scene);
        this.material6.setAmbient(0, 206/255, 209/255, 1.0);
        this.material6.setDiffuse(0, 206/255, 209/255, 1.0);
        this.material6.setSpecular(1, 1, 1, 1.0);
        this.material6.setShininess(10.0);
        this.material6.setTexture(this.textures[5]);
        this.material6.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
      var escalonamentoMatrix = [
        0.2, 0.0, 0.0, 0.0,
        0.0, 0.2, 0.0, 0.0,
        0.0, 0.0, 0.2, 0.0,
        0.0, 0.0, 0.0, 1.0
      ];
      this.scene.multMatrix(escalonamentoMatrix);

      var translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, 0.0, -1.0, 1.0
        ];
        var scaleMatrix = [
          5.0, 0.0, 0.0, 0.0,
          0.0, 5.0, 0.0, 0.0,
          0.0, 0.0, 5.0, 0.0,
          0.0, 0.0, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.material1.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, -2.5, -3.5, 1.0
        ];
        var angle = 90*Math.PI/180;
        var rotateMatrix = [
          1, 0, 0.0, 0.0,
          0.0, Math.cos(angle), -Math.sin(angle), 0.0,
          0.0, Math.sin(angle), Math.cos(angle), 0.0,
          0.0, 0.0, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.material2.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, 2.5, -3.5, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.material3.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, 0.0, -6.0, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.material4.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
      
        angle = 90*Math.PI/180;
        rotateMatrix = [
          Math.cos(angle), 0, Math.sin(angle), 0.0,
          0.0, 1.0, 0.0, 0.0,
          -Math.sin(angle), 0.0, Math.cos(angle), 0.0,
          0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          -2.5, 0.0, -3.5, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.material5.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          2.5, 0.0, -3.5, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.material6.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
    }
}
