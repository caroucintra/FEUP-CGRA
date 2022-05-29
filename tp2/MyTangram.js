import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";

/**
 * MyTangram
 * @constructor
 */
 export class MyTangram extends CGFobject {
    constructor(scene) {
      super(scene);
      this.diamond = new MyDiamond(scene);
      this.triangle = new MyTriangle(scene);
      this.parallelogram = new MyParallelogram(scene);
    }
    display(scene){
        var translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -1.7, 1.2, 0.0, 1.0
        ];
    
        
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.diamond.display();
        scene.popMatrix();
    
        var escalonamentoMatrix = [
            2.0, 0.0, 0.0, 0.0,
            0.0, 2.0, 0.0, 0.0,
            0.0, 0.0, 2.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    
        scene.pushMatrix();
        scene.multMatrix(escalonamentoMatrix);
        scene.triangle.display();
        scene.popMatrix();
    
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2.0, 0.80, 0.0, 1.0
        ];
        var angle = 45*Math.PI/180;
        var rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(escalonamentoMatrix);
        scene.multMatrix(rotateMatrix);
        scene.triangle.display();
        scene.popMatrix();
    
        
        angle = 90*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2.7, -1.3, 0.0, 1.0
        ];
        var escalonamentoMatrix = [
            -0.7, 0.0, 0.0, 0.0,
            0.0, 0.7, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(escalonamentoMatrix);
        scene.multMatrix(rotateMatrix);
        scene.parallelogram.display();
        scene.popMatrix();
        
    
        var escalonamentoMatrix = [
        -1.0, 0.0, 0.0, 0.0,
        0.0, -1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
        ];
        angle = 45*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2.0, -2.0, 0.0, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(escalonamentoMatrix);
        scene.multMatrix(rotateMatrix);
        scene.triangle.display();
        scene.popMatrix();
    
        var escalonamentoMatrix = [
            -1.5, 0.0, 0.0, 0.0,
            0.0, -1.5, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        angle = 90*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            1.5, -1.5, 0.0, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(escalonamentoMatrix);
        scene.multMatrix(rotateMatrix);
        scene.triangle.display();
        scene.popMatrix();
    
        
        angle = -45*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            2.5, -1.5, 0.0, 1.0
        ];
        scene.pushMatrix();
        scene.multMatrix(translateMatrix);
        scene.multMatrix(rotateMatrix);
        scene.triangle.display();
        scene.popMatrix();
    }
}