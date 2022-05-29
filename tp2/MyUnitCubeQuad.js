import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyUnitCubeQuad
 * @constructor
 */
 export class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
      super(scene);
      this.quad = new MyQuad(scene);
    }

    display(scene) {

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
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(scaleMatrix);
        scene.quad.display();
        scene.popMatrix();
      
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
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(scaleMatrix);
        scene.multMatrix(rotateMatrix);
        scene.quad.display();
        scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, 2.5, -3.5, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(scaleMatrix);
        scene.multMatrix(rotateMatrix);
        scene.quad.display();
        scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, 0.0, -6.0, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(scaleMatrix);
        scene.quad.display();
        scene.popMatrix();
      
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
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(scaleMatrix);
        scene.multMatrix(rotateMatrix);
        scene.quad.display();
        scene.popMatrix();
      
        translateMatrix = [
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          2.5, 0.0, -3.5, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(scaleMatrix);
        scene.multMatrix(rotateMatrix);
        scene.quad.display();
        scene.popMatrix();
    }
}
