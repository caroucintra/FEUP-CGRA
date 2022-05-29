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
        this.material1.setAmbient(0, 0, 0, 1.0);
        this.material1.setDiffuse(0, 0,0, 1.0);
        this.material1.setSpecular(0,0,0, 1.0);
        this.material1.setShininess(10.0);
        this.material1.setTexture(this.textures[1]);
        this.material1.setTextureWrap('REPEAT', 'REPEAT');
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
          50.0, 0.0, 0.0, 0.0,
          0.0, 50.0, 0.0, 0.0,
          0.0, 0.0, 50.0, 0.0,
          0.0, 0.0, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(scaleMatrix);
        this.material1.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.quad.display();
        this.scene.popMatrix();
      
       
    }
}
